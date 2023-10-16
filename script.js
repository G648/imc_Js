//IMC
//1.Pegar os valores 
//2.Calcular o IMC
//3.Gerar a classificação do IMC
//4.Organizar as informações
//5.Salvar os dados na lista 
//6.Ler a lista com os dados
//7.Renderizar o conteúdo no HTML (tabela)
//8.Botão de limpar os registros

const arrPessoas = [];

function calcularImc() {
    event.preventDefault(); //capturar o evento de submit do formulário (para o envio do formulário)

    // alert("nenhum objeto cadastrado")

    //pegar os dados do form e realizar a validação dos preenchidos
    //arrumar a lógica para os valores dos campos

    let nomeForm = document.getElementById('nome').value.trim();
    let alturaForm = parseFloat(document.getElementById('altura').value);
    let pesoForm = parseFloat(document.getElementById('peso').value);

    //função trim = limpa os espaços
    if (isNaN(alturaForm) || isNaN(pesoForm) || nomeForm.length == 0) {
        alert("Todos os campos deverão ser preenchidos")
        return;
    }

    //chamar a função calcular imc

    const imc = calculoIMC(alturaForm, pesoForm);
    const situacao = retornaSituacao(imc);

    console.log(nomeForm);
    console.log(alturaForm);
    console.log(pesoForm);
    console.log(imc.toFixed(2));
    console.log(situacao);

    //criando o objeto pessoa:
    //const pq não será alterado o valor de pessoa
    const pessoa = {
        nomeForm,
        alturaForm,
        pesoForm,
        imc,
        situacao,
    };

    console.log(pessoa);

    arrPessoas.push(pessoa);

    //chamar a função (listar pessoas)

    listarPessoas();

}

function calculoIMC(altura, peso) {
    return peso / altura ** 2;
}

// menor que 18.5      magreza severa
// entre 18 e 24       peso normal
// entre 25 e 29       acima do peso
// entre 30 e 34       obesidade I
// entre 35 e 39       obesidade II
// acima de 40         Cuidado!

function retornaSituacao(imc) {

    // const imc = calcularImc();

    if (imc < 18.5) {
        return "magreza severa"
    } else if (imc <= 24) {
        return "peso normal"
    } else if (imc <= 29) {
        return "acima do peso"
    } else if (imc <= 34) {
        return "obesidade I"
    } else if (imc <= 39) {
        return "obesidade II"
    } else {
        return "Cuidado!"
    }
}

function listarPessoas() {

    const data = new Date(Date.UTC(2023, 10, 16, 10, 10, 0));

    let template = '';

    arrPessoas.forEach(pessoa => {
        template +=  `
        <tr>
            <td data-cell="nome">${pessoa.nomeForm}</td>
            <td data-cell="altura">${pessoa.alturaForm}</td>
            <td data-cell="peso">${pessoa.pesoForm}</td>
            <td data-cell="valor do IMC">${pessoa.imc.toFixed(2)}</td>
            <td data-cell="classificação do IMC">${pessoa.situacao}</td>
            <td data-cell="data de cadastro">${data.toLocaleDateString('pt-br', {timeZone: 'UTC'})}</td>
        </tr>
        `;
    })
    

    // console.log(arrPessoas.forEach(lista => {
    //     console.log(lista.nomeForm);
    // }));

    document.getElementById("corpo-tabela").innerHTML = template;
}