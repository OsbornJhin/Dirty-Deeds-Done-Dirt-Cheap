const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Quais são as principais fontes de emissão de gases de efeito estufa?",
        alternativas: [
            {
                texto: "Combustíveis fósseis, desmatamento e atividades industriais;",
                afirmacao: "No início ficou com medo do que essa tecnologia pode fazer. "
            },
            {
                texto: "Desmatamento, fenômenos naturais e poluição das águas;",
                afirmacao: "Quis saber como usar IA no seu dia a dia."
            },
            {
                texto: "Pecúaria, seca e mineração;",
                afirmacao: "No início ficou com medo do que essa tecnologia pode fazer. "

            }

        ]
    },
    {
        enunciado: "Oque as mudaças climáticas podem causar no corpo humano?",
        alternativas: [
            {
                texto: "Alterações reprodutivas, bom humor e maior risco de surgimentos de pandemias;",
                afirmacao: "Conseguiu utilizar a IA para buscar informações úteis."
            },
            {
                texto: "Depressão, doenças infecciosas e fome;",
                afirmacao: "Sentiu mais facilidade em utilizar seus próprios recursos para escrever seu trabalho."
            },
            {
                texto: " Doenças respiratórias, alterações comportamentais e doenças infecciosas;",
                afirmacao: "Sentiu mais facilidade em utilizar seus próprios recursos para escrever seu trabalho."
            }
        ]
    },
    {
        enunciado: "Que consequências as mudanças climáticas podem causar?",
        alternativas: [
            {
                texto: " Oceanos aquecidos e subindo, aumento de espécies e benefícios a saúde;",
                afirmacao: "Vem impulsionando a inovação na área de IA e luta para abrir novos caminhos profissionais com IA."
            },
            {
                texto: "Temperaturas mais quentes, tempestades severas e perda de espécies;",
                afirmacao: "Sua preocupação com as pessoas motivou a criar um grupo de estudos entre trabalhadores para discutir meios de utilização de IA de forma ética."
            },
            {
                texto: "Comida insuficiente, aumento das secas e melhora no estilo de vida;",
                afirmacao: "Sua preocupação com as pessoas motivou a criar um grupo de estudos entre trabalhadores para discutir meios de utilização de IA de forma ética."
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
