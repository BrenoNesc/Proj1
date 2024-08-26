function calcularPesoIdeal() {
    var nome = document.getElementById('nome').value;
    var altura = parseFloat(document.getElementById('altura').value);
    var sexo = document.querySelector('input[name="sexo"]').value;

    var pesoIdeal;
    if (sexo === 'masculino') {
        pesoIdeal = (72.7 * altura) - 58;
    } else if (sexo === 'feminino') {
        pesoIdeal = (62.1 * altura) - 44.7;
    }

    
    var resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = '<p>O peso ideal para ' + nome + ' é ' + pesoIdeal.toFixed(2) + ' kg.</p>';

    
    var dados = JSON.parse(localStorage.getItem('dadosPesoIdeal')) || [];

    
    if (!Array.isArray(dados)) {
        dados = [];
    }

    dados.push({
        nome: nome,
        altura: altura,
        sexo: sexo,
        pesoIdeal: pesoIdeal.toFixed(2)
    });

    localStorage.setItem('dadosPesoIdeal', JSON.stringify(dados));

    
    console.log('Dados armazenados:', dados);
}

function consultarDados() {
    var dados = JSON.parse(localStorage.getItem('dadosPesoIdeal'));

    
    if (!Array.isArray(dados)) {
        dados = [];
    }

    if (dados.length > 0) {
        var resultadoDiv = document.getElementById('resultado');
        var html = '<h2>Dados Armazenados:</h2>';
        for (var i = 0; i < dados.length; i++) {
            var dado = dados[i];
            html += '<p>Nome: ' + dado.nome + ' - Altura: ' + dado.altura + ' m - Sexo: ' + dado.sexo + ' - Peso Ideal: ' + dado.pesoIdeal + ' kg</p>';
        }
        resultadoDiv.innerHTML = html;
    } else {
        alert('Nenhum dado armazenado.');
    }
}

