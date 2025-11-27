const mqtt = require("mqtt");

const BROKER = "mqtt://localhost:1883";
const TOPIC = "sensors/people_counter";

const client = mqtt.connect(BROKER);

client.on("connect", () => {
  console.log("Connected to broker, subscribing to", TOPIC);
  client.subscribe(TOPIC);
});

client.on("message", (topic, message) => {
  console.log("Message arrived:", message.toString());
});
