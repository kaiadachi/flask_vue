from flask import Flask, render_template, jsonify, request
from random import *
app = Flask(__name__,static_folder = "./dist/static",template_folder = "./dist")


@app.route("/api", methods=['POST'])
def hello():
	requests = {
		'targetUrl': request.json['url'],
		'path': request.json['cssSelector'],
	}


	return requests['targetUrl']



@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def catch_all(path):
	return render_template("index.html")
