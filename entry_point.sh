#!/bin/bash
cd backend && \

source build.sh && \

cd ../frontend/site && \

source build.sh && \

cd ../../deployment && \

docker-compose up -d db && \

docker-compose up --force-recreate entry backend frontend