from flask import Flask, jsonify, render_template, request
import sys

application = Flask(__name__, static_folder="./static/dist", template_folder="./static")

@application.route("/api/coalitionSearch", methods=['POST'])
def coalitionSearch():
	data = request.get_json(force=True)
	print(data)
	return {"response": [data,data]}

@application.route("/api/simplelist", methods=['GET'])
def simplelist():
    return jsonify({'Item 1':'chicken', 'Item 2':'steak', 'Item 3':'wegetarian for Raghav'})

@application.route("/")
def index():
    return render_template("index.html")

if __name__ == "__main__":
    application.run(host='0.0.0.0')
