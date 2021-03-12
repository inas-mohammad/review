// pulse check
//==1==
const myFunction = function(_parameter){};
const mySecondFunction = function(_parameter){};
const function1 =function(_parameter){};
const functionName= function (_param1,_param2){};
    
//==2==
const sayHello =function() {
   return sayHello; 
};

//==3==
const myAge = function (age) {
    return age;
};

//==4==
const incrementOne =function(number) {
    return(number++);
    
};

//==5==
const greet= function (name) {
    return "Hello"+ name;
};


//practice 
//==1==
const double = function (number) {
return number+2;    
};

//==2==
const fullName = function (firstName,lastName) {
    return firstName+lastName;
};

//==3==
const average = function(a,b){
    return (a+b)/2;
};

//==4==
cube (25)+20;==> 15645
squre (5)+ cube (2); ==>33
square (10/5)+cube (2+1);==>31
average (square(average(6,2),cube(4)));==> 40

//==5==
const calculateTotalBillAmount = function (total,taxPercentage,tip){
    let newTotal=total*taxPercentage+tip;
    return newTotal;
};

//==6==
const ageInHour=function (ageInYear){
    return ageInYear*360*24;
};

//==7==
const calculateProfit=function(unitSold,unitCost,unitPrice){
    let profit=(unitPrice-unitCost)*unitSold;
    return profit;
};

//==8==
const floor = function (number) {
    return Math.floor(number);  
};

//==9==
const totalPowerOf=function (base,exponent) {
    return Math.pow(base,exponent);
};

//==10==
const upperCase=function(string){
    return string.toUpperCase();
};