import { modules, students, mentors, classes } from "./hyf.js";

const getPeopleOfClass = (className) => {
  const cls = classes.find((c) => c.name === className);
  if (!cls) return [];

  const studentPeople = students
    .filter((s) => s.class === className)
    .map((s) => ({ name: s.name, role: "student" }));

  const mentorPeople = mentors
    .filter((m) => Array.isArray(m.nowTeaching) && m.nowTeaching.includes(cls.currentModule))
    .map((m) => ({ name: m.name, role: "mentor" }));

  return [...studentPeople, ...mentorPeople];
};

// console.log(getPeopleOfClass('class34'));

const getActiveClasses = () => {
  const active = classes.filter((c) => c.active === true);
  const result = {};
  for (const c of active) {
    result[c.name] = getPeopleOfClass(c.name);
  }
  return result;
};

// console.log(getActiveClasses());
