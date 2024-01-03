// There are n cars going to the same destination along a one-lane road. The destination is target miles away.

// You are given two integer array position and speed, both of length n, where position[i] is the position of the ith car and speed[i] is the speed of the ith car (in miles per hour).

// The faster car will slow down to match the slower car's speed. The distance between these two cars is ignored

// A car fleet is some non-empty set of cars driving at the same position and same speed. Note that a single car is also a car fleet.

function carFleet(target, position, speed) {
    // save the time until destination for each car / car fleet
  const stack = [];
  const pair = [];
    // create array of pairs
  for (let i = 0; i < position.length; i++) {
    pair.push([position[i], speed[i]]);
  }
  // sort array of pairs by the position value
  pair.sort((a, b) => a[0] - b[0]);
  // loop through every pair position-speed in reverse
  for (let i = position.length - 1; i >= 0; i--) {
    // get position
    const pos = pair[i][0];
    // get speed
    const spd = pair[i][1];
    // compute the time until we reach destination
    const time = (target - pos) / spd;
    // save the time
    stack.push(time);
    // create a fleet if the car behind catches up the car ahead
    if (
      stack.length >= 2 &&
      stack[stack.length - 1] <= stack[stack.length - 2]
    ) {
        // eliminate the faster car
      stack.pop();
    }
  }
  // returns the number of times of car fleets
  return stack.length;
}

// testing
console.log(carFleet(12, [10, 8, 0, 5, 3], [2, 4, 1, 1, 3]));
// expected output: 3
