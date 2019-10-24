
from flask import Flask, jsonify
from flask_cors import CORS
import sys

app = Flask(__name__)
CORS(app)


@app.route('/api/simplelist', methods=['GET'])
def hello():
    return jsonify({'Item 1':'chicken', 'Item 2':'steak', 'Item 3':'wegetarian for Raghav'})

print(sys.path)
