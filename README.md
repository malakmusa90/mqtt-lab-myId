# MQTT Lab Project 

## Description
This project demonstrates the use of MQTT with multiple publishers and subscribers using Node.js and Paho MQTT library.  
The project includes:
- Temperature publisher & subscriber
- Humidity publisher & subscriber
- People counter publisher & subscriber

---

## Prerequisites
- Node.js installed
- Mosquitto MQTT broker installed and running

---

## How to Run

### 1. Install dependencies
After downloading or cloning the project, run:

npm install //This will install all required Node.js packages.

2. Start Mosquitto broker
   
 mosquitto -c mosquitto.conf -v

3. Run Subscribers
 Open 3 separate terminals and run:

node subscribers/sub_temp.js
node subscribers/sub_humidity.js
node subscribers/sub_people.js

4. Run Publishers
 Open 3 separate terminals and run:

node publishers/pub_temp.js
node publishers/pub_humidity.js
node publishers/pub_people.js

Student ID:
12113117

Screenshots:
See screenshots/ folder for message examples.
