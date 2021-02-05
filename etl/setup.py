from setuptools import setup, find_packages

setup(
    name='Cocoa_Clouds_ETL',
    version='1.0',
    long_description=__doc__,
    packages=find_packages(),
    include_package_data=True,
    zip_safe=False,
    install_requires=['certifi>=2019.9.11',
                      'chardet>=3.0.4',
                      'Click>=7.0',
                      'cssmin>=0.2.0',
                      'Flask>=1.1.1',
                      'Flask-Assets>=0.12',
                      'idna>=2.8',
                      'itsdangerous>=1.1.0',
                      'Jinja2>=2.10.3',
                      'jsmin>=2.2.2',
                      'MarkupSafe>=1.1.1',
                      'Pillow>=6.2.1',
                      'pyScss>=1.3.5',
                      'six>=1.12.0',
                      'urllib3>=1.25.6',
                      'webassets>=0.12.1',
                      'Werkzeug>=0.16.0', ]
)
