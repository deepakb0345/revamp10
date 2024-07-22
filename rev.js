/*1.Javascript is a scripting language that uses interpreter instaed of compiler and it is also called as language of web as most of the browsers understands javascript easily and it is also used to make a web page dynamic.*/

/*2.variable and types*/
var userAge = 26
var userName = "Ravi"
console.log(userAge,userName)

/*3.comments in js*/
/*The purpose of the next step is to perform
operatins using arithmetic operators.*/

/*5.Data types*/
var a = "string"
//any characters inside the double quotes are called as string//
var b = 5
//variables containing numbers//
var c = true
//variables containing true or false//

/*6.Functions in javascript*/
function greetuser (name) {
   var a = `happy birthday ${name}`//tempalte literal//
   return a
}
var b = greetuser("ravi")
console.log(b)

/*7.if else in js*/
var temperature = 5
if(temperature>30){
    console.log("temperture is greater than 30")
}
else{
    console.log("temperture is lesser than 30")
}

/*8.for loop*/
for(i=1;i<6;i++){
    console.log(i)
}

/*9.loose vs strict equality*/
//loose equality compares after converting the types here string 5 is coverted into num//
var a = 5
var b = "5"
console.log(a==b)

//strict equality compares without converting types//
var a = 5
var b = "5"
console.log(a===b)