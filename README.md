# twilio_to_telegram

Twilio -> Phone Numbers - > Manage - > Active Numbers -> Configure


git clone https://github.com/unanimity/twilio_to_telegram.git

cd twilio_to_telegram/

cp .env.example .env

nano .env 

sudo  docker-compose up -d

docker-compose down && docker-compose rm && docker-compose build && docker-compose up -d
