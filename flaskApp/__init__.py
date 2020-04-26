from flask import Flask, jsonify, render_template, request
from flask_sqlalchemy import SQLAlchemy
import sys

application = Flask(__name__, static_folder="./static/dist", template_folder="./static")
application.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://nycdb:nycdb@127.0.0.1/nycdb'
application.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(application)

#from models import LL7_qualified

class LL7_qualified(db.Model):
    __tablename__ = 'll7_qualified'
    borough = db.Column(db.String())
    boro = db.Column(db.Integer)
    block = db.Column(db.Integer)
    lot = db.Column(db.Integer)
    bbl = db.Column(db.BigInteger, primary_key = True)
    hnumlo = db.Column(db.Integer)
    hnumhi = db.Column(db.Integer)
    strname = db.Column(db.String())
    crfn = db.Column(db.BigInteger)
    grantee = db.Column(db.String())
    deeddate = db.Column(db.Date)
    price = db.Column(db.Integer)
    caprate = db.Column(db.Float)
    boroughcaprate = db.Column(db.Float)
    yearqtr = db.Column(db.String())
    postcode = db.Column(db.Integer)
    latitude = db.Column(db.Float)
    longitude = db.Column(db.Float)
    communityboard = db.Column(db.Integer)
    councildistrict = db.Column(db.Integer)
    censustract = db.Column(db.Integer)
    bin = db.Column(db.Integer)
    nta = db.Column(db.String())
    location1 = db.Column(db.String())

    def serialize(self):
        return {
            'street address' : str(self.hnumlo) + " " + self.strname,
            'zipcode' : str(self.postcode),
            'borough' : str(self.boro),
            'bbl' : str(self.bbl)
        }

    def __repr__(self):
        return str(self.bbl)

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
    data = request.get_json(force=True)
    zipcode = data['zipcode']
    borough = data['borough']
    buildings = LL7_qualified.query.filter_by(postcode=zipcode).filter_by(boro=borough)

    return {"response": list(map(lambda x:x.serialize(), buildings))}

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
