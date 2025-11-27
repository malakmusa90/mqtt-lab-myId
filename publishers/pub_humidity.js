const mqtt = require("mqtt");

const BROKER = "mqtt://localhost:1883";
const TOPIC = "sensors/humidity";
const STUDENT_ID = "12113117";

const client = mqtt.connect(BROKER);

client.on("connect", () => {
  console.log("Humidity publisher connected");
  setInterval(() => {
    const payload = {
      studentId: STUDENT_ID,
      sensor: "humidity",
      value: (30 + Math.random() * 50).toFixed(2),
      timestamp: new Date().toISOString()
    };
    client.publish(TOPIC, JSON.stringify(payload));
    console.log("Published:", payload);
  }, 7000);
});
