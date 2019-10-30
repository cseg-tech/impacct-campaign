# impacct-campaign
Campaign builder developed for IMPACCT Brooklyn

[![forthebadge](https://forthebadge.com/images/badges/made-with-python.svg)](https://python.org)

## Flask: Getting Started for Windows

* Create and activate an environment
  * In Command Prompt, navigate to the flaskBackend folder
    ```
    ...
    cd impacct-campaign
    cd flaskBackend
    ```
  * Install virtualenv
    ```
    pip install virtualenv
    ```
  * Create an environment (first time only)
    ```
    virtual env
    ```
  * Activate the environment
    ```
    .\env\Scripts\activate.bat
    ```

* Install the necessary modules
  * Install Flask and other modules
    ```
    pip install Flask
    pip install flask_cors
    ```
  * Install anything else prompted by errors
* Run the application
  ```
  set FLASK_APP=app.py
  python -m flask run
  ```
* Now head over to [http://127.0.0.1:5000/api/simplelist](http://127.0.0.1:5000/api/simplelist)
* Close the application
  ```
  Ctrl+c
  ```
* Close the virtual environment
  ```
  deactivate
  ```

## Flask: Getting Started for Mac

* Create and activate an environment
  * In Command Prompt, navigate to the flaskBackend folder
    ```
    ...
    cd impacct-campaign
    cd flaskBackend
    ```
  * Install virtualenv
    ```
    pip3 install virtualenv
    ```
  * Create an environment (first time only)
    ```
    python3 -m virtualenv venv
    ```
    or
    ```
    python3 -m venv venv
    ```
  * Activate the environment
    ```
    . venv/bin/activate
    ```

* Install the necessary modules
  * Install Flask
    ```
    pip3 install Flask
    pip3 install flask_cors
    ```
  * Install anything else prompted by errors
* Run the application
  ```
  export FLASK_APP=app.py
  flask run
  ```
* Now head over to [http://127.0.0.1:5000/api/simplelist](http://127.0.0.1:5000/api/simplelist)
* Close the application
  ```
  Ctrl+c
  ```
* Close the virtual environment
  ```
  deactivate
  ```

## Authors

* **Angela Zhang**

* **Arya Zhao**

* **Justin Lee**

* **Kanav Kalucha**

* **Luvena Huo**

* **Mustafa Eyceoz**
