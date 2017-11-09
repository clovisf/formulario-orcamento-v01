var i = 1;
var somatotal= 0.00;

var table;
var row;
var cell1;
var cell2;
var cell3;
var cell4;

window.onload = function(){

document.getElementById("resultadofinal").value = somatotal;

  table = document.getElementById("tabelaorc");
  row = table.insertRow(1);
  cell1 = row.insertCell(0);
  cell2 = row.insertCell(1);
  cell3 = row.insertCell(2);
  cell4 = row.insertCell(3);
  cell1.innerHTML = "<input type='text' class='produtodinamico' name='busca' placeholder='Produto 1' id='Produto"+i.toString()+"'/>";
  cell2.innerHTML = "<input type='text' class='qtdedinamica' name='quantidade' size='4' id='qtde"+i.toString()+"' onchange='multiplicar();totalizador();'/>";
  cell3.innerHTML = "<input type='text' class='valorunitdinamico' name='valorunitario' size='8' id='valorunit"+i.toString()+"' onchange='multiplicar();totalizador();'/>";
  cell4.innerHTML = "<input type='text' class='resultmultiplicdinamico' name'resultadomultiplicacao' size='8' id='resultadomultiplicacao"+i.toString()+"'/>";

};



function multiplicar()
    {
      j = i;
      for (j; j > 0; j--) {
        // Capture the entered values of two input boxes
        var valor1 = document.getElementById('qtde'+j.toString()).value;
        var valor2 = document.getElementById('valorunit'+j.toString()).value;


        //console.log(multiplicacao);
        // Add them together and display
        var multiplicacao = ((parseInt(valor1*10).toFixed(2) * parseInt(valor2*10).toFixed(2))/100).toFixed(2);
        //document.write(multiplicacao);
        document.getElementById('resultadomultiplicacao'+j.toString()).value = multiplicacao;
      }
    }





    function adicionarlinha()
    {
      i = i + 1;
      var table = document.getElementById("tabelaorc");
      if( i == 2){
        var row = table.insertRow(2);
      } else{
        var row = table.insertRow(i);
      }
      //console.log("Valor de i= "+i.toString());
      cell1 = row.insertCell(0);
      cell2 = row.insertCell(1);
      cell3 = row.insertCell(2);
      cell4 = row.insertCell(3);
      cell1.innerHTML = "<input type='text' class='produtodinamico' name='busca' placeholder='Produto "+i.toString()+"' id='Produto"+i.toString()+"'/>";
      cell2.innerHTML = "<input type='text' class='qtdedinamica' name='quantidade' size='4' id='qtde"+i.toString()+"' onchange='multiplicar();totalizador();'/>";
      cell3.innerHTML = "<input type='text' class='valorunitdinamico' name='valorunitario' size='8' id='valorunit"+i.toString()+"' onchange='multiplicar();totalizador();'/>";
      cell4.innerHTML = "<input type='text' class='resultmultiplicdinamico' name'resultadomultiplicacao' size='8' id='resultadomultiplicacao"+i.toString()+"'/>";

      totalizador();
    }

    function totalizador()
    {
        j = i;
        somatotal = 0.00;
        for (j;j > 0; j--) {

        // Capture the entered values of two input boxes
        var valor = document.getElementById("resultadomultiplicacao"+j.toString()).value;

        somatotal = (Number(valor) + Number(somatotal)).toFixed(2);

        //var valor2 = document.getElementById('resultadomultiplicacao2').value;

        // Add them together and display
        //var somatotal = parseInt(valor);
        //document.write(multiplicacao);

      }
      document.getElementById("resultadofinal").value = somatotal;
    }
    function imprimirpagina()
    {
      window.print();
    }
    function gerarcsv(){
      var j = i;
      var csvarray = [];



      //var contagemdelinhas = (csvarray.length) + (j * 4);
      var contagemdelinhas = (j * 4);
      console.log("Inicial= "+csvarray.length+", posicoes a mais= "+contagemdelinhas);
      var m= j;
      var oproduto;
      var aqtde;
      var ovalorunit;
      var oresultadomultiplicacao;

      var tratamento = document.getElementById("tratamento").value;
      var nomecliente= document.getElementById("nomecliente").value;
      var emailcliente = document.getElementById("emailcliente").value;
      var nomerua= document.getElementById("nomerua").value;
      var nomebairro= document.getElementById("nomebairro").value;
      var nomecidade= document.getElementById("nomecidade").value;
      var nomeestado= document.getElementById("nomeestado").value;
      var dddfixo= document.getElementById("dddfixo").value;
      var fonefixo= document.getElementById("fonefixo").value;
      var dddcelular= document.getElementById("dddcelular").value;
      var telcelular= document.getElementById("telcelular").value;
      var observacoesfinais= document.getElementById("observacoesfinais").value;
      var condicoespagto= document.getElementById("condicoespagto").value;

      csvarray.push (tratamento, nomecliente, emailcliente, nomerua, nomebairro, nomecidade, nomeestado, dddfixo, fonefixo, dddcelular, telcelular, observacoesfinais, condicoespagto);
      console.log("valor de J= ", j);

      for(; m > 0; m--){
        oproduto = document.getElementById('Produto'+m.toString()).value;
        aqtde = document.getElementById('qtde'+m.toString()).value;
        ovalorunit = document.getElementById('valorunit'+m.toString()).value;
        oresultadomultiplicacao = document.getElementById('resultadomultiplicacao'+m.toString()).value;

        csvarray.push (oproduto, aqtde, ovalorunit, oresultadomultiplicacao);
        //csvarray.push (aqtde, ovalorunit, oresultadomultiplicacao);
      }


      console.log(csvarray);
	download(document.getElementById("nomedoarquivo").value+'.csv', csvarray);


    }

function nomeandoarquivo(month, day, year, nomecliente, nomebairro){

  // Return today's date and time
  var currentTime = new Date();
  // returns the month (from 0 to 11)
  var month = currentTime.getMonth() + 1;
  // returns the day of the month (from 1 to 31)
  var day = currentTime.getDate();
  // returns the year (four digits)
  var year = currentTime.getFullYear();

  switch(month){
    case 1:
      month = "Janeiro";
      break;
    case 2:
      month = "Fevereiro";
      break;
    case 3:
      month = "Marco";
      break;
    case 4:
      month = "Abril";
      break;
    case 5:
      month = "Maio";
      break;
    case 6:
      month = "Junho";
      break;
    case 7:
      month = "Julho";
      break;
    case 8:
      month = "Agosto";
      break;
    case 9:
      month = "Setembro";
      break;
    case 10:
      month = "Outubro";
      break;
    case 11:
      month = "Novembro";
      break;
    case 12:
      month = "Dezembro";
      break

  }

  var nomedoclientesemespacos = document.getElementById("nomecliente").value.replace(/\s/g,'');
  var bairrosemespacos = document.getElementById("nomebairro").value.replace(/\s/g,'');
  var tipodeorcamento = document.getElementById("tipodeproduto").value.replace(/\s/g,'');

  var novonome = year.toString()+month.toString()+day.toString()+"-"+nomedoclientesemespacos.toString() + "-" + bairrosemespacos.toString()+"-"+tipodeorcamento.toString();
  document.getElementById("nomedoarquivo").value = novonome;

}
function download(filename, csvarray) {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/csv;charset=utf-8,' + encodeURIComponent(csvarray));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}

/* content-width fitting textbox from here: https://stackoverflow.com/questions/17772260/textarea-auto-height */
function auto_grow(element) {
    element.style.width = "auto";
    element.style.width = (element.scrollWidth)+'px';
}
