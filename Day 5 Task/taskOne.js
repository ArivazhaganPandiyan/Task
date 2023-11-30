
console.log("*************for loop****************");

let jsonString = '{"author":"Arivu","name":"Full_stack_development","pages":72,"price":692}';
let js = JSON.parse(jsonString);

let keys = Object.keys(js);
 for ( let i=0;i<keys.length;i++){

     let key = keys[i];
     let value = js[key];
     console.log(key,value);
     
 }



console.log("*************for...in loop****************");

for ( let key in js){

    console.log(key, js[key]);
}

console.log("*************for...off loop****************");

 for( let [key,value] of Object.entries(js)){

    console.log(key,value);
 }

 console.log("*************forEach loop****************");

 Object.entries(js).forEach(([key, value]) => {
    console.log(key, value);
});