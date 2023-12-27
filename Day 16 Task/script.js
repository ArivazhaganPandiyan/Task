let greetings = function(callback){
    setTimeout(() => {
        let num = document.getElementById('countDown');
        num.textContent='HAPPY INDEPENDENCE DAY';
        
        

        callback();
    }, 1000);
}
let one = function(callback){
    setTimeout(() => {
        let num = document.getElementById('countDown');
        num.textContent='1';

        callback();
    }, 1000);
}
let two = function(callback){
    setTimeout(() => {
        let num = document.getElementById('countDown');
        num.textContent='2';
        callback();
    }, 1000);   
    
}
let three = function(callback){
    setTimeout(() => {
        let num = document.getElementById('countDown');
        num.textContent='3';
        callback();
    }, 1000);   
}
let four = function(callback){
    setTimeout(() => {
        let num = document.getElementById('countDown');
        num.textContent='4';
        callback();
    }, 1000);   
}
let five = function(callback){
    setTimeout(() => {
        let num = document.getElementById('countDown');
        num.textContent='5';
        callback();
    }, 1000);   
}
let six = function(callback){
    setTimeout(() => {
        let num = document.getElementById('countDown');
        num.textContent='6';
        callback();
    }, 1000);   
}
let seven = function(callback){
    setTimeout(() => {
        let num = document.getElementById('countDown');
        num.textContent='7';
        callback();
    }, 1000);   
}
let eight = function(callback){
    setTimeout(() => {
        let num = document.getElementById('countDown');
        num.textContent='8';
        callback();
    }, 1000);   
}
let nine = function(callback){
    setTimeout(() => {
        let num = document.getElementById('countDown');
        num.textContent='9';
        callback();
    }, 1000);   
}
let ten = function(callback){
    setTimeout(() => {
        let num = document.getElementById('countDown');
        num.textContent='10';
        callback();
    }, 1000);   
}

ten(function(){
    nine(function(){
        eight(function(){
            seven(function(){
            six(function(){
                five(function(){
                    four(function(){
                        three(function(){
                            two(function(){
                                one(function(){
                                    greetings(function(){

                                    })
                
                                })
                
                            })
                        })
                    })
                })

            })
            })
        })
    })
})