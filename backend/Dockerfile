FROM python:3.12-slim

RUN apt-get update
RUN apt-get install -y --no-install-recommends netcat-traditional pkg-config gcc python3-dev libpq-dev default-libmysqlclient-dev
RUN apt-get clean 
RUN rm -rf /var/lib/apt/lists/*

RUN pip install --upgrade pip

WORKDIR /app

COPY requirements.txt requirements.txt

RUN pip install --no-cache-dir -r requirements.txt

COPY backend ./

COPY entrypoint.sh /usr/local/bin/entrypoint.sh

RUN chmod +x /usr/local/bin/entrypoint.sh

EXPOSE 8000

ENTRYPOINT ["/usr/local/bin/entrypoint.sh"]