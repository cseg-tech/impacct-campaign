from flask import Flask, jsonify, render_template, request
import sys

application = Flask(__name__, static_folder="./static/dist", template_folder="./static")

def sendData():
    data = request.get_json(force=True)
    return {"response": [data,data,data]}

@application.route("/api/coalitionSearch", methods=['POST'])
def coalitionSearch():
	return sendData()

@application.route("/api/nyattorneySearch", methods=['POST'])
def nyattorneySearch():
	return sendData()

@application.route("/api/speculationWatchlistSearch", methods=['POST'])
def speculationWatchlistSearch():
	return sendData()

@application.route("/api/vacateOrdersSearch", methods=['POST'])
def vacateOrdersSearch():
    return sendData()

@application.route("/api/stabilizingSearch", methods=['POST'])
def stabilizingSearch():
	return sendData()

@application.route("/api/righttocounselSearch", methods=['POST'])
def righttocounselSearch():
	return sendData()





@application.route("/api/simplelist", methods=['GET'])
def simplelist():
    return jsonify({'Item 1':'chicken', 'Item 2':'steak', 'Item 3':'wegetarian for Raghav'})

@application.route("/")
def index():
    return render_template("index.html")

if __name__ == "__main__":
    application.run(host='0.0.0.0')
