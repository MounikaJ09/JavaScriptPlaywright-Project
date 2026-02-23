let a=2;
for(a=1;a<=100;a++){
    //console.log(a);
    if(a%3==0)
        {
            console.log("Fizz");
        } else if(a%5==0){
            console.log("Buzz");
        }
        if(a%3==0 && a%5==0){
            console.log("FizzBuzz");
        }else{
            console.log(a);
        }
}
