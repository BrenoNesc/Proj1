function calcularPesoIdeal() {

    if(sexo === "M") {
        pesoIdeal = (72.7 * altura) - 58;
        } else if (sexo === 'F') {
            pesoIdeal = (62.1 * altura) - 44.7;
        }

        const resultado = {
            nome: nome,
            pesoIdeal: pesoIdeal.toFixed(2)
        };

        localStorage.setItem('dadosPesoIdeal',JSON.stringify(resultado));

        document.getElementById('resultados').innerHTML = `Peso ideal de ${nome}: ${pesoIdeal.toFixed(2)}kg`;
    }

    functionconsultarDados(); {
        var dadosArmazenados = JSON.parse(localStorage.getItem('dadosPesoIdeal'));

        if (!dadosArmazenados) {
            document.getElementById('resultados').innerHTML = 'Nenhum dado armazenado.';
            return;
        }

        var resultadoHTML = `<ul><li>${dadosArmazenados.nome}: ${dadosArmazenados.pesoIdeal} kg</li></ul>`;
        document.getElementById('resultados').innerHTML = resultadHTML;
    }