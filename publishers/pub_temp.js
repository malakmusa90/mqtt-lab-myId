const mqtt = require("mqtt");

const BROKER = "mqtt://localhost:1883";
const TOPIC = "sensors/temperature";
const STUDENT_ID = "12113117";

const client = mqtt.connect(BROKER);

client.on("connect", () => {
  console.log("Temperature publisher connected");
  setInterval(() => {
    const payload = {
      studentId: STUDENT_ID,
      sensor: "temperature",
      value: (20 + Math.random() * 10).toFixed(2),
      timestamp: new Date().toISOString()
    };
    client.publish(TOPIC, JSON.stringify(payload));
    console.log("Published:", payload);
  }, 5000);
});
