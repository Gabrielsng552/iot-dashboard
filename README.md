# IoT Monitoring Dashboard using AWS IoT Core

A real-time IoT monitoring system developed using **ESP32**, **AWS IoT Core**, **Amazon DynamoDB**, **Node.js (Express)**, and a **web-based dashboard**.

This project was developed as part of the Cloud Computing course to demonstrate the implementation of an end-to-end IoT system, from sensor data acquisition to cloud storage and real-time visualization.

---

## Features

* 🌡️ Real-time monitoring of temperature, humidity, and light intensity.
* ☁️ Data transmission using MQTT protocol through AWS IoT Core.
* 🗄️ Sensor and learning activity data stored in Amazon DynamoDB.
* 🔗 REST API built using Node.js and Express.
* 💻 Web dashboard for monitoring sensor data and managing learning activities.

---

## System Architecture

```
ESP32 + Sensors
        │
        │ MQTT
        ▼
AWS IoT Core
        │
        ▼
IoT Rule
        │
        ▼
Amazon DynamoDB
        │
        ▼
Node.js + Express REST API
        │
        ▼
HTML • CSS • JavaScript Dashboard
```

---

## Technologies Used

| Technology          | Description                   |
| ------------------- | ----------------------------- |
| ESP32               | IoT Device                    |
| DHT22               | Temperature & Humidity Sensor |
| BH1750              | Light Intensity Sensor        |
| MQTT                | Communication Protocol        |
| AWS IoT Core        | IoT Cloud Platform            |
| Amazon DynamoDB     | NoSQL Database                |
| Node.js             | Backend Runtime               |
| Express.js          | REST API Framework            |
| HTML/CSS/JavaScript | Frontend Dashboard            |

---

## Project Structure

```
iot-dashboard
│
├── backend
│   ├── server.js
│   ├── package.json
│   └── ...
│
├── frontend
│   ├── index.html
│   ├── style.css
│   ├── app.js
│   └── ...
│
└── README.md
```

---

## Dashboard Preview

### Sensor Monitoring

<img width="975" height="665" alt="image" src="https://github.com/user-attachments/assets/89067189-1cf5-4803-8b40-0dedc22ec356" />


### Learning Activity

<img width="975" height="224" alt="image" src="https://github.com/user-attachments/assets/4bd2644e-2434-4097-933e-951628632635" />




