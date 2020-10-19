function randomChoice(arr) {
    return arr[Math.floor(arr.length * Math.random())];
}

function randomExp(lambda) {
  return (-1/lambda)*Math.log(1-Math.random());
}
