const trafficLight = {
  possibleStates: ["green", "orange", "red"],
  stateIndex: 0,
};

for (let i = 0; i < trafficLight.possibleStates.length * 2; i++) {
  const currentState = trafficLight.possibleStates[trafficLight.stateIndex];
  console.log("The traffic light is on", currentState);
  trafficLight.stateIndex = (trafficLight.stateIndex + 1) % trafficLight.possibleStates.length;
}
