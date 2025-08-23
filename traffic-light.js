"use strict";

function getCurrentState(trafficLight) {
  return trafficLight.possibleStates[trafficLight.stateIndex];
}

function getNextStateIndex(trafficLight) {
  let nextIndex = trafficLight.stateIndex + 1;

  if (nextIndex >= trafficLight.possibleStates.length) {
    nextIndex = 0;
  }

  return nextIndex;
}

function waitSync(secs) {
  const start = Date.now();
  while (Date.now() - start < secs * 1000) {
    // do nothing
  }
}

function main() {
  const trafficLight = {
    possibleStates: ["green", "orange", "red"],
    stateIndex: 0,
  };

  for (let cycle = 0; cycle < 6; cycle++) {
    const currentState = getCurrentState(trafficLight);
    console.log(cycle, "The traffic light is now", currentState);

    waitSync(1);
    trafficLight.stateIndex = getNextStateIndex(trafficLight);
  }
}

main();
