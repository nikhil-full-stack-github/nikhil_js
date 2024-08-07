let num = prompt("Please Enter the Number");
num =parseInt(num)

if( num > 0 && num < 1000000){
let sum = 0

 for(let i = 1; i<= num ; i++){

    sum = i+sum
  }
  document.write("Your sum of the number upto the given number =")
document.write(sum)
}
else{
  
    document.write("Please check the number you entered.")

}