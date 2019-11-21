from flask import Flask, jsonify
from flask_cors import CORS
import sys

application = Flask(__name__)
#CORS(application)

@application.route("/")
def hello():
	return "<h1>ORGANIZING TOOLS</h1><p>This is our temporary home page as we put REACT app up!</p>"

@application.route("/api/simplelist", methods=['GET'])
def simplelist():
    return jsonify({'Item 1':'chicken', 'Item 2':'steak', 'Item 3':'wegetarian for Raghav'})

if __name__ == "__main__":
    application.run(host='0.0.0.0')
