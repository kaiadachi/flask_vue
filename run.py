# source venv/bin/activate
# FLASK_APP=run.py FLASK_DEBUG=1 flask run
from flask import Flask, render_template, jsonify, request
from random import *
from backend.venv.src import main
app = Flask(__name__,static_folder = "./dist/static",template_folder = "./dist")


@app.route("/api", methods=['POST'])
def hello():
	requests = {
		'targetUrl': request.json['url'],
		'path': request.json['cssSelectors'],
	}
	print(requests['path'])
	datas = main.getTarget(requests['targetUrl'], requests['path'])
	print(datas)
	for i in range(len(datas)):
		for j in range(len(datas[i])):
			datas[i][j] = datas[i][j].text

	print(datas)

	return jsonify(datas)



@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def catch_all(path):
	return render_template("index.html")
