import subprocess
from flaskApp import application 

if __name__ == '__main__':
    # Every time the production app runs, you rebuild the react app too
    output = subprocess.call(["./refreshReact.sh"])
    application.run()
