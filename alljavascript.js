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
  cell1.innerHTML = "<input type='text' class='' name='busca' placeholder='Produto 1' id='Produto"+i.toString()+"'/>";
  cell2.innerHTML = "<input type='text' name='quantidade' size='4' id='qtde"+i.toString()+"' onchange='multiplicar();totalizador();'/>";
  cell3.innerHTML = "<input type='text' name='valorunitario' size='8' id='valorunit"+i.toString()+"' onchange='multiplicar();totalizador();'/>";
  cell4.innerHTML = "<input type='text' name'resultadomultiplicacao' size='8' id='resultadomultiplicacao"+i.toString()+"'/>";

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
      cell1.innerHTML = "<input type='text' class='' name='busca' placeholder='Produto "+i.toString()+"' id='Produto"+i.toString()+"'/>";
      cell2.innerHTML = "<input type='text' name='quantidade' size='4' id='qtde"+i.toString()+"' onchange='multiplicar();totalizador();'/>";
      cell3.innerHTML = "<input type='text' name='valorunitario' size='8' id='valorunit"+i.toString()+"' onchange='multiplicar();totalizador();'/>";
      cell4.innerHTML = "<input type='text' name'resultadomultiplicacao' size='8' id='resultadomultiplicacao"+i.toString()+"'/>";

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

      var nomecliente= document.getElementById("nomecliente").value;
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

      csvarray.push (nomecliente, nomerua, nomebairro, nomecidade, nomeestado, dddfixo, fonefixo, dddcelular, telcelular, observacoesfinais, condicoespagto);
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
      //const xls = new xlsExport(csvarray, "Um Titulo");
      //xls.exportToCSV();

    }

    new autoComplete({
      selector: 'input[name="busca"]',
      minChars: 2,
    source: function(term, suggest){
        term = term.toLowerCase();
        var choices = ['ActionScript', 'AppleScript', 'Asp', 'C++', 'Javascript', 'Cobol', 'Python'];
        var matches = [];
        for (g=0; g<choices.length; g++)
            if (~choices[g].toLowerCase().indexOf(term)) matches.push(choices[g]);
        suggest(matches);
    }
});
