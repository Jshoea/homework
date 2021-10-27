function countDown(time){
    let timer = setInterval(function(){
      time--;
      //this will make the timer count down
      if(time <= 0){
        clearInterval(timer);
        console.log('done');
      }
      else {
        console.log(time);
        //this will keep console logging the timer and run until we reach zero per 1000 ms
      }
  
    },1000)
    //this is the function and will the countdown will happen every second (counted in ms)
  }
  
  function randGame(){
    let num;
    let times = 0;
    let timer = setInterval(function(){
      num = Math.random();
      times++
      //from the random number we will count up
      if(num > .75) {
        clearInterval(timer);
        console.log("It took " + times + " try/tries.");
      }
    },1000)
  }