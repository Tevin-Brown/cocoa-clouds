# myapp/util/assets.py

from flask_assets import Bundle, Environment
from .. import app

bundles = {
    'home_css': Bundle(
        'css/home.css',
        output='gen/home.css',
        filters='cssmin'),
    'common_css': Bundle(
        'css/common.css',
        output='gen/common.css',
        filters='cssmin'),
    'gfs_css': Bundle(
        'css/gfs.css',
        output='gen/gfs.css',
        filters='cssmin'),
    'satallites_css': Bundle(
        'css/satallites.css',
        output='gen/satallites.css',
        filters='cssmin'),
}

assets = Environment(app)

assets.register(bundles)