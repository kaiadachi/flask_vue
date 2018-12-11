from flask import Flask, render_template, jsonify, request
from random import *
from backend.venv.src import main
app = Flask(__name__,static_folder = "./dist/static",template_folder = "./dist")



@app.route("/api", methods=['POST'])
def hello():
	requests = {
		'targetUrl': request.json['url'],
		'path': request.json['cssSelector'],
	}
	data = main.getTarget(requests['targetUrl'], requests['path'])
	output = []
	for i in data:
		output.append(i.text)

	return jsonify(output)



@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def catch_all(path):
	return render_template("index.html")
