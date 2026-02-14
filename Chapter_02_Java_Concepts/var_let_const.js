var a=10;
console.log(a); // Output: 10

a=20;
console.log(a); // Output: 20
//Definition of the function    
function myFunction() {
    console.log("Hello, World!");
    var a=20;
    console.log(a); // Output: 20
    if(true){
        var a=30;
        console.log(a); // Output: 30
    }
    console.log("F -> ", a); // Output: 30
}
//let-block scope
let b=20;
console.log(b); // Output: 20
//definition of the function
function myFunction2() {
    console.log("Hello, World!");
    let b=30;
    console.log(b); // Output: 30
    if(true){
        let b=40;
        console.log(b); // Output: 40
    }
    console.log("F -> ", b); // Output: 30
}
//const-block scope and cannot be reassigned
const c=30;     
console.log(c); // Output: 30
//definition of the function
function myFunction3() {   
    console.log("Hello, World!");
    const c=40;
    console.log(c); // Output: 40
    if(true){
        const c=50;
        console.log(c); // Output: 50
    }   
    console.log("F -> ", c); // Output: 40
}     
// difference between var, let and const
// var is function-scoped and can be redeclared and updated. It is hoisted to the top of its scope.
// let is block-scoped and can be updated but not redeclared. It is also hoisted but not initialized.
// const is block-scoped and cannot be updated or redeclared. It must be initialized at the time of declaration.