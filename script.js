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
                afirmacao: "1-Correta. "
            },
            {
                texto: "Desmatamento, fenômenos naturais e poluição das águas;",
                afirmacao: "1-Incorreta."
            },
            {
                texto: "Pecúaria, seca e mineração;",
                afirmacao: "1-Incorreta. "

            }

        ]
    },
    {
        enunciado: "Oque as mudaças climáticas podem causar no corpo humano?",
        alternativas: [
            {
                texto: "Alterações reprodutivas, bom humor e maior risco de surgimentos de pandemias;",
                afirmacao: "2-Incorreta."
            },
            {
                texto: "Depressão, doenças infecciosas e fome;",
                afirmacao: "2-Incorreta."
            },
            {
                texto: " Doenças respiratórias, alterações comportamentais e doenças infecciosas;",
                afirmacao: "2-Correta."
            }
        ]
    },
    {
        enunciado: "Que consequências as mudanças climáticas podem causar?",
        alternativas: [
            {
                texto: " Oceanos aquecidos e subindo, aumento de espécies e benefícios a saúde;",
                afirmacao: "3-Incorreta."
            },
            {
                texto: "Temperaturas mais quentes, tempestades severas e perda de espécies;",
                afirmacao: "3-Correta."
            },
            {
                texto: "Comida insuficiente, aumento das secas e melhora no estilo de vida;",
                afirmacao: "3-Incorreta."
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
    caixaPerguntas.textContent = "Mudança climática se refere a transformações de longo prazo nos padrões de temperatura e clima. Essas alterações podem ser naturais, mas desde o século 18 as atividades humanas têm sido a principal causa das mudanças climáticas, principalmente por causa da queima de combustíveis fósseis (como carvão, petróleo e gás), que produzem gases que retêm o calor. -Resultados:";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
