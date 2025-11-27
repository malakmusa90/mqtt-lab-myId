const mqtt = require("mqtt");

const BROKER = "mqtt://localhost:1883";
const TOPIC = "sensors/people_counter";
const STUDENT_ID = "12113117";

const client = mqtt.connect(BROKER);

client.on("connect", () => {
  console.log("People-counter publisher connected");
  setInterval(() => {
    const payload = {
      studentId: STUDENT_ID,
      sensor: "people_counter",
      value: Math.floor(Math.random() * 10),
      timestamp: new Date().toISOString()
    };
    client.publish(TOPIC, JSON.stringify(payload));
    console.log("Published:", payload);
  }, 6000);
});
