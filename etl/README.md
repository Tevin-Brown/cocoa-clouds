# ETL
This is a python API.

## Setup
This package uses flask to run. to set the application up,
ensure you have python v3.7.2 and venv installed.
1. Setup a virtual environment using the command `python3 -m venv venv`.
2. Activate the virtual environment using `source venv/bin/activate`.
3. Download the packages `pip install -r requirements.txt`

## Run the application
Run `bash start.sh`.
The application is now hosted at http://127.0.0.1:5000/

## Docker
1. Build an image `docker build -t cocoa-clouds .`
2. Run the dockerfile `docker run --rm -p 5000:5000 -e PORT=5000 cocoa-clouds`