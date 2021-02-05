from setuptools import setup, find_packages
setup(
    name='noaa-images',
    packages=find_packages(),
)
from util import assets
from .views import app
