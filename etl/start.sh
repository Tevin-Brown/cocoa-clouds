#!/bin/bash
# Script to download run the backend
source virtual/bin/activate
which python
export FLASK_APP=noaa-images
flask run