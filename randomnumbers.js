function randomChoice(arr) {
    return arr[Math.floor(arr.length * Math.random())];
}

function randomExp(lambda) {
  return (-1/lambda)*Math.log(1-Math.random());
}

function randomExpOrd(n,lambda){
  numbers= new Array();
  for(var i=0; i<=n; i++){
    if(i==0){
      numbers[i]= randomExp(lambda)/(n+1);
    }
    else {
      numbers[i]= numbers[i-1]+randomExp(lambda)/(n-i+1);
    }
  }
  return numbers;
}
