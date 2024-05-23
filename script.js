var input = document.getElementById('input');
var key = document.getElementById('key');
var button = document.getElementById('button');


function keyDeleter() { 
  var Arrkey = key.value.split('');
  var ArrValue = input.value.split(' ');
  for(var i = 0; i < ArrValue.length; i++) {
    console.log(ArrValue);
    var newArr = ArrValue[i].split(''); // Расщепление на буквы 
    console.log(newArr); 
    for(var j = 0; j < newArr.length; j++) {
       if(newArr[j] == Arrkey[0]) {
          console.log('Совпадение');
       }
    }
  }
} 