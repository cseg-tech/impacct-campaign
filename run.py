import subprocess
from flaskApp import application 

if __name__ == '__main__':
    '''
    In the case of the development environment, this would not be called every time by default.
    The frontend may not need to be rebuilt everytime you work on the backend.
    '''
    # output = subprocess.call(["./refreshReact.sh"])
    application.run()
