const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Assim que saiu da escola você se depara com novos equipamentos eletrônicos avançados que facilitam a vida no campo. O que você sente?",
        alternativas: [
            {
                texto: "Isso atrapalharia os agricultures",
                afirmacao: "No início ficou com medo do que essa tecnologia pode fazer. "
            },
            {
                texto: "Isso é maravilhoso! Era tudo que faltava",
                afirmacao: "Quis saber como usar funciona no seu dia a dia."
            }
        ]
    },
    {
        enunciado: "Com a descoberta destas tecnologias, você resolve contar a seus familiares sobre as novidades e seus benefícios. O que eles fazem?",
        alternativas: [
            {
                texto: "Acreditariam na novidade e pensariam sobre procurar esses equipamentos e pensar em investir",
                afirmacao: "Conseguiu utilizar as ferramentas para buscar melhorias no campo."
            },
            {
                texto: "Ficam pensativo na ideia, porém guarda na gaveta e não tocam mais no assunto ",
                afirmacao: "Pensou que seria ruim arriscar."
            }
        ]
    },
    {
        enunciado: "Ao pesquisar sobre esses equipamentos tecnológicos, descobre que são preços elevados para sua família. Qual caminho seguir?",
        alternativas: [
            {
                texto: "Defende a ideia, e pensa em algum emprestimo ou financiamento para contar com o equipamento",
                afirmacao: "Vem impulsionando a ideia para seguí-la."
            },
            {
                texto: "Deixa a ideia quieta, pois sabe que a família não tem dinheiro para isso",
                afirmacao: "Sua preocupação com as pessoas vale mais que a novidade."
            }
        ]
    },
    {
        enunciado: "Ao final da história, com equipamentos tecnológicos ou não, sua família continuou no campo. Isso altera sua essência?",
        alternativas: [
            {
                texto: "De modo algum, só aumentou o conhecimento",
                afirmacao: "Não"
            },
            {
                texto: "Um pouco, pois sei que avanços tecnológicos sempre são para ajudar",
                afirmacao: "Pouco, mas segue normal"
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
