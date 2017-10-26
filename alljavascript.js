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