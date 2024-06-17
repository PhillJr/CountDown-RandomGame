function countDown(num){
//create a second function to allow use of num since its a local variable only available in this funcition
//attempted to make the timeLog() function outside the countDown() scope and failed to do so.
//having the function inside the function works better
    let timer = setInterval(function(){
        //setInteral method repeatedly calls a function or executes a code snippet, with a fixed time delay in milliseconds.
        //we can clean the method using clearInterval()
        num--;
        if(num <= 0 ){
            clearInterval(timer);
            console.log("Done");
        } else{
            console.log(num);
        }
    }, 1000)  
    return console.log(num);  //by adding this line I am able to print the starting number instead of starting at 9 if I input 10
} 
countDown(10);