# source venv/bin/activate
# FLASK_APP=run.py FLASK_DEBUG=1 flask run
from flask import Flask, render_template, jsonify, request
from random import *
import os
from backend.venv.src import main
app = Flask(__name__,static_folder = "./dist/static",template_folder = "./dist")


@app.route("/api", methods=['POST'])
def getRequests():
	requests = {
		'targetUrl': request.json['url'],
		'path': request.json['cssSelectors'],
	}
	datas = main.getTarget(requests['targetUrl'], requests['path'])

	# print(requests)
	for i in range(len(datas)):
		for j in range(len(datas[i])):
			datas[i][j] = datas[i][j].text

	return jsonify(datas)

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def catch_all(path):
	return render_template("index.html")


if __name__ == "__main__":
	port = int(os.environ.get("PORT", 5000))
	app.run(host='0.0.0.0', port=port)
