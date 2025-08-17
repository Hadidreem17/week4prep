const trafficLight = {
  state: "green",
};

let rotations = 0;
while (rotations < 2) {
  const currentState = trafficLight.state;
  console.log("The traffic light is on", currentState);

  if (trafficLight.state === "green") {
    trafficLight.state = "orange";
  } else if (trafficLight.state === "orange") {
    trafficLight.state = "red";
  } else {
    trafficLight.state = "green";
    rotations++;
  }
}
