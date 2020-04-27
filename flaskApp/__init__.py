from flask import Flask, jsonify, render_template, request
from flask_sqlalchemy import SQLAlchemy
import sys

sys.path.append("/home/cseg/impacct-campaign/flaskApp")

application = Flask(__name__, static_folder="./static/dist", template_folder="./static")
application.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://nycdb:nycdb@127.0.0.1/nycdb'
application.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(application)

""" from models import LL7_qualified
from models import no_harassment """

RTC_ZIP_CODES = [10026, 10027, 10025, 10031,\
                 10457, 10467, 10468, 10462,\
                 11216, 11221, 11225, 11226,\
                 11433, 11434, 11373, 11385,\
                 10302, 10303, 10314, 10310]

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

class vacate_orders(db.Model):
    __tablename__ = 'hpd_vacateorders'
    buildingid = db.Column(db.Integer)
    registrationid = db.Column(db.Integer)
    borough = db.Column(db.String())
    number = db.Column(db.String())
    street = db.Column(db.String())
    vacateordernumber = db.Column(db.Integer)
    primaryvacatereason = db.Column(db.String())
    vacatetype = db.Column(db.String())
    vacateeffectivedate = db.Column(db.Date)
    rescinddate = db.Column(db.Date)
    numberofvacatedunits = db.Column(db.Integer)
    postcode = db.Column(db.String())
    latitude = db.Column(db.Float)
    longitude = db.Column(db.Float)
    communityboard = db.Column(db.String())
    councildistrict = db.Column(db.Integer)
    censustract = db.Column(db.String())
    bin = db.Column(db.String())
    bbl = db.Column(db.String(), primary_key=True)
    nta = db.Column(db.String())

    def serialize(self):
        return {
            'street address' : self.number + " " + self.street,
            'zipcode' : self.postcode,
            'borough' : self.borough,
            'bbl' : self.bbl
        }

    def __repr__(self):
        return self.bbl

class no_harassment(db.Model):
    __tablename__ = "no_harassment"
    buildingid = db.Column(db.Integer)
    bin = db.Column(db.Integer)
    streetaddress = db.Column(db.String())
    borocode = db.Column(db.String())
    block = db.Column(db.Integer)
    lot = db.Column(db.Integer)
    bqi = db.Column(db.String())
    aeporder = db.Column(db.String())
    hpdvacateorder = db.Column(db.String())
    dobvacateorder = db.Column(db.String())
    harassmentfinding = db.Column(db.String())
    dateadded = db.Column(db.Date)
    borough = db.Column(db.String())
    postcode = db.Column(db.Integer)
    latitude = db.Column(db.Float)
    longitude = db.Column(db.Float)
    communityboard = db.Column(db.Integer)
    councildistrict = db.Column(db.Integer)
    censustract = db.Column(db.Integer)
    bbl = db.Column(db.BigInteger, primary_key=True)
    ntaneighborhoodtabulationarea = db.Column(db.String())

    def serialize(self):
        return {
            'street address' : self.streetaddress,
            'zipcode' : str(self.postcode),
            'borough' : self.borough,
            'bbl' : str(self.bbl)
        }

    def __repr__(self):
        return str(self.bbl)

def sendData():
    data = request.get_json(force=True)
    return {"response": [data,data,data]}

#print(no_harassment.query.filter_by(postcode=10027).first())

@application.route("/api/coalitionSearch", methods=['POST'])
def coalitionSearch():
    data = request.get_json(force=True)
    zipcode = data['zipcode']
    borough = data['borough']
    buildings = no_harassment.query.filter_by(postcode=int(zipcode)).filter_by(borocode=borough)

    return {"response": list(map(lambda x:x.serialize(), buildings))}

@application.route("/api/nyattorneySearch", methods=['POST'])
def nyattorneySearch():
	return sendData()

@application.route("/api/speculationWatchlistSearch", methods=['POST'])
def speculationWatchlistSearch():
    data = request.get_json(force=True)
    zipcode = data.get('zipcode')
    borough = data.get('borough')
    worst_evictors = data.get('worst-evictors')
    buildings = LL7_qualified.query
    if zipcode is not None:
        buildings = buildings.filter_by(postcode=zipcode)
    if borough is not None:
        buildings = buildings.filter_by(boro=borough)
    if worst_evictors is not None and worst_evictors == 'yes':
        buildings = buildings.filter(LL7_qualified.postcode.in_(RTC_ZIP_CODES))
    return {"response": list(map(lambda x:x.serialize(), buildings))}

@application.route("/api/vacateOrdersSearch", methods=['POST'])
def vacateOrdersSearch():
    data = request.get_json(force=True)
    zipcode = data['zipcode']
    borough = data['borough']
    buildings = vacate_orders.query.filter_by(postcode=zipcode).filter_by(borough=borough)

    return {"response": list(map(lambda x:x.serialize(), buildings))}

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
