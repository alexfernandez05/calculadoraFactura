function myFunction() {
    // Get the value of the input field with id="numb"
    let total = document.getElementById("total").value;
    let diasFactura = document.getElementById("diasFactura").value;

    // If x is Not a Number or less than one or greater than 10
    let text;

    // if (isNaN(total) || total < 1 || total > 100) {
    //   text = "Input not valid";
    // } else {
    //   text = "Input OK";
    // }


    let pers1 = document.getElementById("pers1").value;
    let pers2 = document.getElementById("pers2").value;

    let dias1 = document.getElementById("dias1").value;
    let dias2 = document.getElementById("dias2").value;

    let diasxpers = ((dias1 - dias2) + (dias2 * 2));
    let ppd = total / diasxpers;
     

    text =  'totaldias = ' + diasxpers + '<br>' +
            'precio/pers/dia = ' + ppd + '<br>' +
            pers1 + ' '+dias1 + 'dias ' + ppd*dias1 + '€<br>' +
            pers2 + ' '+dias2 + 'dias ' + ppd*dias2 + '€<br>' +
            ((ppd*dias1) + (ppd*dias2)) + '€';

    document.getElementById("demo").innerHTML = text;
  }