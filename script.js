// console.log("Foi!");

// let texto = "texto";
// let numero = 1;
// let booleano = true;

// let nome = prompt("Qual seu nome?");
// let valor = prompt("Qual valor do seu empréstimo?");

// alert(`Olá ${nome}`);
// alert(`Você gostaria de emprestar R$${valor}, certo?`);
// let pretendePagar = confirm("Você pretende pagar o seu empréstimo?");

// alert("Ok! Obrigado por nos visitar!");

// let lista = [1,2,3,4,5,"Olá","Felipe",55,true];
// console.log(lista);

let objeto = {
    nome : ['Dora','San','Mon']
};

let joaozinho = {
    nome: "joao",
    idade: 11,
    namorada: undefined,
    gatos : [
        {
            nome:"Claudio",
            raca: "SRD"
        }, 
        {
            nome:"Gustavo",
            raca:"Tomba-latas",
        }
    ]
}

let mariazinha = {
    nome: "Maria",
    idade: 16,
    namorado: undefined,
    cachorro: [
        {
            nome: "Bart",
            raca: "Goldem"
        }
    ]
}

joaozinho.namorada = mariazinha;
mariazinha.namorado = joaozinho;