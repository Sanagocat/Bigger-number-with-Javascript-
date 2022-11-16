
var num_a = document.getElementById('num_A');
var num_b = document.getElementById('num_B');
var result = document.getElementById('result');
var check_button = document.getElementById('check_btn');
check_button.addEventListener('click',compare);

function compare()
{
  var a = Number(num_a.value);
  var b = Number(num_b.value);
    
  if( a < b )
  {  
    console.log("b is bigger");
    result.value = "b is bigger";
  }
  else if(a == b )
  {
    console.log("a is equal to b");
   result.value = "a is equal to b";
  }
  else
  {
    console.log("a is bigger");
    result.value = "a is bigger";
  }
}
  


