#!/usr/bin/env python
"""Django's command-line utility for administrative tasks."""
import os
import sys
import MySQLdb
from decouple import config

def fix():

    DB_NAME = config('DB_NAME', default='demo')

    DB_USER = config('DB_USER', default='admin')

    DB_USER_ROOT = config('DB_USER_ROOT', default='root')
    DB_PASSWORD_ROOT = config('DB_PASSWORD_ROOT', default='root')

    DB_HOST = config('DB_HOST', default='localhost')
    
    db = MySQLdb.connect(
        host=DB_HOST,       
        user=DB_USER_ROOT,            
        passwd=DB_PASSWORD_ROOT,  
        db=DB_NAME             
    )

    cursor = db.cursor()

    try:

        cursor.execute(f"GRANT ALL PRIVILEGES ON test_{DB_NAME}.* TO '{DB_USER}'@'%';")

        print("Permisos otorgados correctamente.")

        db.commit()
    except MySQLdb.Error as e:
        print(f"Error al ejecutar la consulta: {e}")
        
        db.rollback()

    cursor.close()

    db.close()


def main():
    """Run administrative tasks."""
    os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'backend.settings')

    if ('test' in sys.argv):
        fix()

    try:
        from django.core.management import execute_from_command_line
    except ImportError as exc:
        raise ImportError(
            "Couldn't import Django. Are you sure it's installed and "
            "available on your PYTHONPATH environment variable? Did you "
            "forget to activate a virtual environment?"
        ) from exc
    execute_from_command_line(sys.argv)    

if __name__ == '__main__':
    main()