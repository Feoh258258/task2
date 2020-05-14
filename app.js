function validateForm() {
  let x = document.forms["myForm"]["fname"].value;
  let y = document.forms["myForm"]["fname1"].value;
  let z = document.forms["myForm"]["fname2"].value;
  let resTT = document.getElementById('resQuantity');
  const kub2kvadrat = 0.33/*коефициент для просчета: кубический метр в квадратный метр */
  const odnaBanka = 16;
  if (x >1000, y >1000, z >1000) {
    alert("Числа не должны быть больше 1000");
    return false;
  }
  else {
  
  let sum = x * y * z / kub2kvadrat / odnaBanka; /* x * y * z - умножаем меду собой для получения общей площади в кубических метрах; / kub2kvadrat - высчитываем введенные данные в квадратный метр; / odnaBanka - узнаем сколько банок необходимо */
  let quantity = Math.floor(sum * 1) / 1; /* избавляемся от остатка */  

  alert("Минимальное количество банок краски: " + quantity);
  }
}
//end task1

//task2
function validateForm2() {
  var x = document.forms["myForm2"]["fname11"].value;
  var y = document.forms["myForm2"]["fname22"].value;
  var z = document.forms["myForm2"]["fname33"].value;
  var w = document.forms["myForm2"]["fname44"].value;
  var v = document.forms["myForm2"]["fname55"].value;
  var s = document.forms["myForm2"]["fname66"].value;
  if (x > 100 || y > 100 || z > 100 || w > 100 || v > 100 || s > 100 ) {
    alert("Все числа должны быть менее 100");
    return false;
  }
  else {
 x = parseInt(x);
 y = parseInt(y);
 z = parseInt(z);
 w = parseInt(w);
 v = parseInt(v);
 s = parseInt(s);

 /* Логика просчета: за каждым ведром закрепляется цена (A1+B1,A2+B2,A3+B3) меня дико раздражает, что я не могу придумать, как сделать это умнее.*/
  	let sumPerOneBucket = (x * w) + (y * v) + (z * s);
    alert("Вы заработаете " + sumPerOneBucket + " рубля(ей)");
  }
}


//task3
document.addEventListener("DOMContentLoaded", function() {

  const happyBtn = document.getElementById('happyBtn');
  happyBtn.onclick = function() {
    const yourNum = document.getElementById('yourNum').value;
    numToStr = String(yourNum);
    firstTreeSymbols = numToStr.substring(0, 3);
    lastTreeSymbols = numToStr.substring(3, 6);
    console.log(lastTreeSymbols);
    if(numToStr.length == 6) {
      firstPartSymbols = firstTreeSymbols;
      secondPartSymbols = lastTreeSymbols;
      let firstPart = 0;
      let secondPart = 0;
      for (i = 0; i<firstPartSymbols.lenght; i++){
        firstPart += parseInt(firstPartSymbols[i]);
        secondPart += parseInt(secondPartSymbols[i]);
      }
      if(firstPart == secondPart){
        alert('Yes');
      }else{
        alert('No');
      }
    }
    else {
      alert('Введите 6-ти значное число');
    }
  }
  
  const ageBtn = document.getElementById('ageBtn');
  ageBtn.onclick = function() {
    const enterAge = document.getElementById('enterAge').value;
    console.log(enterAge);
    if(enterAge <= 1, enterAge <=12){
      alert('ребенок');
    }else if(enterAge<= 13, enterAge<=18){
      alert('подросток');
    }else if(enterAge <= 19, enterAge <= 60){
      alert('взрослый');
    }else{
      alert('пенсионер');
    }
    
  }  
  //закончить с таском!!!

  const oneToNineBtn = document.getElementById('oneToNineBtn')
  oneToNineBtn.onclick = function() {
    const enterNum = document.getElementById('enterNum').value;
    enterNumRewriteToNum = parseInt(enterNum);
    console.log("NUM:"+enterNumRewriteToNum);
    switch (enterNumRewriteToNum){
      case 0:
      alert(')');
      break;

      case 1:
      alert('!');
      break;
      
      case 2:
      alert('"');
      break; 

      case 3:
      alert('№');
      break;
      
      case 4:
      alert('%');
      break; 

      case 5:
      alert(':');
      break;
      
      case 6:
      alert(',');
      break; 
      case 7:
      alert('.');
      break;
      
      case 8:
      alert(';');
      break; 

      case 9:
      alert('(');
      break; 
      
      default:
      alert( "Введите число от 1 до 9!" );
    };
  }
  const yearBtn = document.getElementById('yearBtn');
  yearBtn.onclick = function() {
    const yearNum = document.getElementById('yearNum').value;
    let year = yearNum;
    if(year%400 && !year%100 || year%4){
      alert("Не высокосный");
    }else{
    alert("Высокосный");}

  };
  
  
  const dollarBtn = document.getElementById('dollarBtn');
  dollarBtn.onclick = function() {
    let select = document.getElementById('selectCur');
    let input = document.getElementById('dollarNum').value;
    input = parseInt(input);
    let converted = document.getElementById('converted');
    const rates = {
      eur: 1.09,
      uah: 27.99,
      azn: 1.7
    };
    converted = input * rates[select.value];
    alert((converted.toFixed(2)));
  };








});//End DOMContentLoaded