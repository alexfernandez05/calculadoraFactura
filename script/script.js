function myFunction() {
        let total = document.getElementById("total").value;
        let diasFactura = document.getElementById("diasFactura").value;

        let text;

        let pers1 = document.getElementById("pers1").value;
        let pers2 = document.getElementById("pers2").value;
        let pers3 = document.getElementById("pers3").value;
        let pers4 = document.getElementById("pers4").value;

        let dias1 = document.getElementById("dias1").value;
        let dias2 = document.getElementById("dias2").value;
        let dias2 = document.getElementById("dias3").value;
        let dias2 = document.getElementById("dias4").value;

        //let diasxpers = parseInt(dias1 - dias2) + (dias2 * 2);
        let diasxpers = parseInt(dias1 + dias2 + dias3 + dias4);
        let ppd = (total / diasxpers);  //Precio x persona día

        let ppdRound = Math.round(((ppd) + Number.EPSILON) * 100) / 100;

        p1 = Math.round(((ppd * dias1) + Number.EPSILON) * 100) / 100;
        p2 = Math.round(((ppd * dias2) + Number.EPSILON) * 100) / 100;
        p3 = Math.round(((ppd * dias3) + Number.EPSILON) * 100) / 100;
        p4 = Math.round(((ppd * dias4) + Number.EPSILON) * 100) / 100;

        //tot = Math.round((((ppd * dias1) + (ppd * dias2)) + Number.EPSILON) * 100) / 100;
        tot = Math.round((((ppd * dias1) + (ppd * dias2) + (ppd * dias3) + (ppd * dias4)) + Number.EPSILON) * 100) / 100;

        text = 'precio/pers/dia = ' + ppdRound + '€<br>' +
                pers1 + ' ' + dias1 + 'dias ' + p1 + '€<br>' +
                pers2 + ' ' + dias2 + 'dias ' + p2 + '€<br>' +
                pers3 + ' ' + dias3 + 'dias ' + p3 + '€<br>' +
                pers4 + ' ' + dias4 + 'dias ' + p4 + '€<br>' +
                tot + '€';

        document.getElementById("demo").innerHTML = text;
}