# ORGANIZING TOOLS
Campaign builder developed for IMPACCT Brooklyn

* [http://167.172.226.114/](http://167.172.226.114/)






## React App Setup:

* Navigate to impacct-campaign/react-test
* Install react-router-dom using ```npm install react-router-dom```
* ```npm start```

## Flask Setup for Windows:

* Navigate to impacct-campaign/flaskBackend
* Create an environment (first time only) using ```virtual env```
* Activate the environment using ```.\env\Scripts\activate.bat```
* Install Flask and other modules
  ```
  pip install Flask
  pip install flask_cors
  ```
* Run the application
  ```
  set FLASK_APP=app.py
  python -m flask run
  ```
* [http://127.0.0.1:5000/api/simplelist](http://127.0.0.1:5000/api/simplelist)
* To close the application: ```Ctrl+c```
* To close the virtual environment: ```deactivate```

## Flask Setup for Mac:

* Navigate to impacct-campaign/flaskBackend
* Create an environment (first time only) using ```python3 -m virtualenv venv``` or ```python3 -m venv venv```
* Activate the environment using ```. venv/bin/activate```
* Install Flask and other modules
  ```
  pip3 install Flask
  pip3 install flask_cors
  ```
* Run the application
  ```
  export FLASK_APP=app.py
  flask run
  ```
* [http://127.0.0.1:5000/api/simplelist](http://127.0.0.1:5000/api/simplelist)
* To close the application: ```Ctrl+c```
* To close the virtual environment: ```deactivate```

## Authors

* **Angela Zhang**

* **Arya Zhao**

* **Justin Lee**

* **Kanav Kalucha**

* **Luvena Huo**

* **Mustafa Eyceoz**
