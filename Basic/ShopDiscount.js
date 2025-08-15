// Find the Payable amount if you purchase 0-5000 rs discount will be 0% , 5000 - 7000 rs discount will be 5% ,7001 - 9000 discount will be 10% and 9000 above discount will 20% 

let amount = 6000;
if(amount>0 && amount<=5000){
    console.log(amount);
}else if(amount>5001 && amount<=7000){
    console.log(amount- Math.floor((5*amount)/100))
}else if(amount>7001 && amount<=9000){
    console.log(amount - Math.floor((10*amount)/100))
}else if(amount>= 9001)
    console.log(amount - Math.floor((20*amount)/100))
