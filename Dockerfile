FROM python:3.7.4
COPY ./etl/src /etl/src
COPY ./etl/requirements.txt /etl
COPY ./etl/app.py /etl
WORKDIR /etl
RUN pip install -r requirements.txt
CMD gunicorn --bind 0.0.0.0:$PORT src:app

