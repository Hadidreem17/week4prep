import { modules, students, mentors, classes } from "./hyf.js";

const possibleMentorsForModule = (moduleName) => {
  return mentors
    .filter((mentor) => mentor.canTeach.includes(moduleName))
    .map((mentor) => mentor.name);
};

const findMentorForModule = (moduleName) => {
  const possible = possibleMentorsForModule(moduleName);
  const randomIndex = Math.floor(Math.random() * possible.length);
  return possible[randomIndex];
};

// console.log(possibleMentorsForModule('using-apis'));
// console.log(findMentorForModule('javascript'));
