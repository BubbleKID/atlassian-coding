const findBadgedEmployee = (logs) => {
  let map = {};
  const res = [];
  const list = new Set();
  logs.sort((a, b) => a[1] - b[1]);

  const isBadgedMoreThanThreeTimes = (timeArr) => {
    let stack = [];

    for (let i = 0; i < timeArr.length; i++) {
      let time = timeArr[i];
      let startTime = time - 100;
      
      stack.push(time);
      let newStack = stack.filter(s => s > startTime);
      stack = newStack;

      if (stack.length >= 3) {
        return true;
      }
    }
    return false;
  }

  for (let i = 0; i < logs.length; i++) {
    const [employee, time] = logs[i];
    if (list.has(employee)) continue;

    if (!map[employee]) {
      map[employee] = [Number(time)];
    } else {
      map[employee].push(Number(time));
    }

    if (isBadgedMoreThanThreeTimes(map[employee])) {
      list.add(employee);
    }
  }

  return Array.from(list);
};

const logs = [
  ["Paul", "1355"],
  ["Jennifer", "1910"],
  ["John", "835"],
  ["John", "830"],
  ["Paul", "1315"],
  ["John", "1615"],
  ["John", "1640"],
  ["Paul", "1405"],
  ["John", "855"],
  ["John", "930"],
  ["John", "915"],
  ["John", "730"],
  ["John", "940"],
  ["Jennifer", "1335"],
  ["Jennifer", "730"],
  ["John", "1630"],
  ["Jennifer", "835"],
];

console.log(findBadgedEmployee(logs));

// https://leetcode.com/discuss/interview-experience/1504226/indeed-karat-interview