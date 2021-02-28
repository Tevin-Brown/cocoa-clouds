import os
from .util.ftpdownloader import FTPDownloader
from flask.wrappers import Response
from flask_cors import CORS
from flask import Flask
from flask import render_template
from PIL import Image
from ftplib import FTP
import urllib3
from io import BytesIO
from celery import Celery


def make_celery(app):
    celery = Celery(
        app.name,
        backend=app.config['CELERY_RESULT_BACKEND'],
        broker=app.config['CELERY_BROKER_URL']
    )
    celery.conf.update(app.config)

    class ContextTask(celery.Task):
        def __call__(self, *args, **kwargs):
            with app.app_context():
                return self.run(*args, **kwargs)

    celery.Task = ContextTask
    return celery


# create and configure the app
app = Flask(__name__)
app.config.update(
    CELERY_BROKER_URL='redis://localhost:6379',
    CELERY_RESULT_BACKEND='redis://localhost:6379'
)
CORS(app)
celery = make_celery(app)


@celery.task()
def add_together(a, b):
    return a + b


@app.route("/")
def home():
    return render_template("index.html")


@app.route("/gfs")
def gfs():
    return render_template("gfs/index.html")


@app.route("/satellites")
def satallites():
    return render_template("satallites/index.html")


@app.route('/satellites/list/all')
def getAllDirectories():
    ftp = FTP("ftp.nnvl.noaa.gov")
    ftp.login()
    ftp.cwd('GOES')
    response = {"data": ftp.nlst()}
    ftp.quit()
    return (response, 200, {'Content-Type': 'text/html'})


@app.route('/satellites/list/<satelliteType>')
def getAllEndpoints(satelliteType=None):
    ftp = FTP("ftp.nnvl.noaa.gov")
    ftp.login()
    ftp.cwd('GOES')
    ftp.cwd(satelliteType)
    response = {"data": ftp.nlst()}
    ftp.quit()
    return (response, 200, {'Content-Type': 'text/html'})


@app.route('/satellites/<directory>/<filename>')
def image(directory=None, filename=None):
    ftp = FTPDownloader("ftp.nnvl.noaa.gov", directory)
    return Response(ftp.download(filename), mimetype="image/jpeg")
