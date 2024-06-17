function randomGame(){
    let rndNum;
    let counter = 0;
    let timer = setInterval(function(){
        rndNum = Math.random();
        //console.log(rndNum);
        counter++;
        //timer++;  if I add this line the code contiunes to run infinitely I don't understand why.
        if(rndNum > .75){
            clearInterval(timer);
            console.log(`Number of tries game took to be greater than .75 is: ${counter}`);
            
            
        }
    },1000)
}

randomGame();