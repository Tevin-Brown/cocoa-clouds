# ETL
This is a python API.

## Setup
This package uses flask to run. to set the application up,
ensure you have python v3.7.2 and venv installed.
1. Setup a virtual environment using the command `python3 -m venv venv`.
2. Activate the virtual environment using `source venv/bin/activate`.
3. Download the packages `pip install -r requirements.txt`

## run the application
export FLASK_APP=src
export FLASK_ENV=development
flask run