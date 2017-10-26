function multiplicar()
    {
        // Capture the entered values of two input boxes
        var valor1 = document.getElementById('qtde').value;
        var valor2 = document.getElementById('valorunit').value;

        // Add them together and display
        var multiplicacao = parseInt(valor1) * parseInt(valor2);
        //document.write(multiplicacao);
        document.getElementById("resultadomultiplicacao").value = multiplicacao;

        // Capture the entered values of two input boxes
        var valor3 = document.getElementById('qtde2').value;
        var valor4 = document.getElementById('valorunit2').value;

        // Add them together and display
        var multiplicacao2 = parseInt(valor3) * parseInt(valor4);
        //document.write(multiplicacao);
        document.getElementById("resultadomultiplicacao2").value = multiplicacao2;
    }
    function adicionarlinha()
    {
      var table = document.getElementById("tabelaorc");
      var row = table.insertRow(2);
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      var cell4 = row.insertCell(3);
      cell1.innerHTML = "Descricao";
      cell2.innerHTML = "Quantidade";
      cell3.innerHTML = "R$ unitario";
      cell4.innerHTML = "R$ total";

    }
    function totalizador()
    {
        // Capture the entered values of two input boxes
        var valor1 = document.getElementById('resultadomultiplicacao').value;
        var valor2 = document.getElementById('resultadomultiplicacao2').value;

        // Add them together and display
        var somatotal = parseInt(valor1) + parseInt(valor2);
        //document.write(multiplicacao);
        document.getElementById("resultadofinal").value = somatotal;

    }
    function imprimirpagina()
    {
      window.print();
    }
