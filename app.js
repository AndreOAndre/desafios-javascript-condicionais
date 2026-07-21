// Desafios

// 1- Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".
let diaUsuario = prompt ('que dia da semana é hoje?' + '\n' + 'seg, ter, qua, qui, sex, sab ou dom?').toLowerCase();

if (
    diaUsuario === 'seg' ||
    diaUsuario === 'ter' ||
    diaUsuario === 'qua' ||
    diaUsuario === 'qui' ||
    diaUsuario === 'sex' ||
    diaUsuario === 'sab' ||
    diaUsuario === 'dom'
) {
    if(diaUsuario === 'sab' || diaUsuario === 'dom'){
        alert('Bom fim de semana!');
    }else{
        alert('Boa semana!')
    }
}else{
    alert('Dia da semana inválido!')
}

//-----------------------------------------------------------------------------------------------------------------------------

// 2 - Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.
let numero = (prompt('Digite um número:'));
if(numero > 0){
    alert('O número é positivo!');
}else if(numero < 0){
    alert('O número é negativo!');
}else if(numero == 0){
    alert('O número é zero!');
}else {
    alert('O valor digitado não é um número válido!');
}

//-----------------------------------------------------------------------------------------------------------------------------

// 3 - Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!". Caso contrário, mostre "Tente novamente para ganhar.".
let pontuacao = prompt ('Digite sua pontuação:');

if(pontuacao >= 100){
    alert('Parabéns, você venceu!');
}else if(pontuacao < 100){
    alert('Tente novamente para ganhar.');
}else{
    alert('Pontuação inválida!');
}

//-----------------------------------------------------------------------------------------------------------------------------

// 4 - Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo.
let saldo = 150.75;
alert("Dê OK para ver o saldo da sua conta.");
alert(`O saldo da sua conta é: R$ ${saldo.toFixed(2)}`);

//-----------------------------------------------------------------------------------------------------------------------------

// 5 - Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome.
let nomeUsuario = prompt('Digite seu nome:');
alert ('Bem Vindo ' + nomeUsuario + '!');