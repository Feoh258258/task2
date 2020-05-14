// //   //task1





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
function validateForm3() {
  let x = document.forms["myForm3"]["fname12"].value;
  for (let i = 100000; i <= 999999; i++) {
    if (isLucky(i)) {
      console.log(i);
    }
  }
  
  function isLucky(num) {
    let str = String(num);
	
    let sum1 = Number(str[0]) + Number(str[1]) + Number(str[2]);
    let sum2 = Number(str[3]) + Number(str[4]) + Number(str[5]);
    
    return sum1 == sum2;  }
}
