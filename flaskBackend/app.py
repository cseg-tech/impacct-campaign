
from flask import Flask, jsonify
app = Flask(__name__)


@app.route('/api/simplelist', methods=['GET'])
def hello():
    return jsonify({'Item 1':'chicken', 'Item 2':'steak', 'Item 3':'wegetarian for Raghav'})



