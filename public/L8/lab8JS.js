function swapNumber(obj){
    var num = document.getElementById('number').value
    let result = 0;
  while (num) {
    result = result * 10 + num % 10;
    num = Math.floor(num / 10);
  }
  document.getElementById('sol1').value = result
  console.log(result)
}
function countTickets(obj){
    var digits = {},
        i, tmp;
   for (i = 0; i <= 999; i += 1) {
        tmp = i % 10 + ((i % 100) - (i % 10)) / 10 + (i / 100) ^ 0; 
        if (digits[tmp] === undefined) {
            digits[tmp] = 1;
        } else {
            digits[tmp] += 1;
        }
   }
   tmp = 0;
   for (i in digits) {
       tmp += digits[i] * digits[i];
   }
   obj.sol2.value = tmp
}
function getDivision(obj){
    var num = Number(obj.number2.value)
    for(var i = num;i>0;i--){
        if(num%i==0)
        obj.sol3.append(i + " ")
    }
}