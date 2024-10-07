#!/bin/bash

until nc -z db 3306; do
  echo "Esperando a que la base de datos esté lista..."
  sleep 2
done

python manage.py makemigrations

python manage.py migrate

python manage.py collectstatic --clear --noinput

python manage.py createsuperuser --noinput

exec gunicorn --bind 0.0.0.0:8000 backend.wsgi:application