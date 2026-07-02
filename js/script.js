/* ==========================================
   ANIMAÇÃO AO ROLAR
========================================== */

const reveals = document.querySelectorAll('.reveal');

function revealElements() {

    reveals.forEach((element) => {

        const top =
            element.getBoundingClientRect().top;

        if (top < window.innerHeight - 100) {

            element.classList.add('active');

        }

    });

}

window.addEventListener('scroll', revealElements);
revealElements();

/* ==========================================
   MENU MOBILE
========================================== */

const menuMobile =
document.querySelector('.menu-mobile');

const nav =
document.querySelector('nav');

menuMobile.addEventListener('click', () => {

    nav.classList.toggle('ativo');

});

/* ==========================================
   CONTADORES ANIMADOS
========================================== */

const contadores =
document.querySelectorAll('.contador');

const observerContadores =
new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            const contador =
            entry.target;

            const alvo =
            +contador.dataset.target;

            let valor = 0;

            const incremento =
            Math.ceil(alvo / 100);

            const atualizar = () => {

                valor += incremento;

                if (valor >= alvo) {

                    contador.innerText =
                    alvo + '+';

                    return;

                }

                contador.innerText = valor;

                setTimeout(atualizar, 20);

            };

            atualizar();

            observerContadores.unobserve(contador);

        }

    });

});

contadores.forEach(contador => {

    observerContadores.observe(contador);

});

/* ==========================================
   ODS
========================================== */

const ods = [

{
numero:"ODS 1",
titulo:"Erradicação da Pobreza",
cor:"#E5243B",
descricao:"Acabar com a pobreza em todas as suas formas, em todos os lugares."
},

{
numero:"ODS 2",
titulo:"Fome Zero e Agricultura Sustentável",
cor:"#DDA63A",
descricao:"Acabar com a fome, alcançar a segurança alimentar e promover agricultura sustentável."
},

{
numero:"ODS 3",
titulo:"Saúde e Bem-Estar",
cor:"#4C9F38",
descricao:"Garantir vida saudável e promover o bem-estar para todos."
},

{
numero:"ODS 4",
titulo:"Educação de Qualidade",
cor:"#C5192D",
descricao:"Garantir educação inclusiva, equitativa e de qualidade."
},

{
numero:"ODS 5",
titulo:"Igualdade de Gênero",
cor:"#FF3A21",
descricao:"Alcançar igualdade de gênero e empoderar mulheres e meninas."
},

{
numero:"ODS 6",
titulo:"Água Potável e Saneamento",
cor:"#26BDE2",
descricao:"Garantir disponibilidade e gestão sustentável da água."
},

{
numero:"ODS 7",
titulo:"Energia Limpa e Acessível",
cor:"#FCC30B",
descricao:"Garantir acesso à energia confiável, sustentável e moderna."
},

{
numero:"ODS 8",
titulo:"Trabalho Decente e Crescimento Econômico",
cor:"#A21942",
descricao:"Promover crescimento econômico sustentável e trabalho decente."
},

{
numero:"ODS 9",
titulo:"Indústria, Inovação e Infraestrutura",
cor:"#FD6925",
descricao:"Construir infraestrutura resiliente e fomentar inovação."
},

{
numero:"ODS 10",
titulo:"Redução das Desigualdades",
cor:"#DD1367",
descricao:"Reduzir desigualdades dentro dos países e entre eles."
},

{
numero:"ODS 11",
titulo:"Cidades e Comunidades Sustentáveis",
cor:"#FD9D24",
descricao:"Tornar cidades inclusivas, seguras e sustentáveis."
},

{
numero:"ODS 12",
titulo:"Consumo e Produção Responsáveis",
cor:"#BF8B2E",
descricao:"Garantir padrões sustentáveis de consumo e produção."
},

{
numero:"ODS 13",
titulo:"Ação Contra a Mudança Global do Clima",
cor:"#3F7E44",
descricao:"Adotar medidas urgentes para combater as mudanças climáticas."
},

{
numero:"ODS 14",
titulo:"Vida na Água",
cor:"#0A97D9",
descricao:"Conservar oceanos, mares e recursos marinhos."
},

{
numero:"ODS 15",
titulo:"Vida Terrestre",
cor:"#56C02B",
descricao:"Proteger ecossistemas terrestres e biodiversidade."
},

{
numero:"ODS 16",
titulo:"Paz, Justiça e Instituições Eficazes",
cor:"#00689D",
descricao:"Promover sociedades pacíficas e inclusivas."
},

{
numero:"ODS 17",
titulo:"Parcerias e Meios de Implementação",
cor:"#19486A",
descricao:"Fortalecer os meios de implementação dos ODS."
}

];

let odsAtual = 0;

const odsCard =
document.getElementById('odsCard');

const odsNumero =
document.getElementById('odsNumero');

const odsTitulo =
document.getElementById('odsTitulo');

const odsDescricao =
document.getElementById('odsDescricao');

const odsImg =
document.getElementById('odsImg');

function atualizarODS(){

    const atual = ods[odsAtual];

    odsNumero.innerText =
    atual.numero;

    odsTitulo.innerText =
    atual.titulo;

    odsDescricao.innerText =
    atual.descricao;

    odsCard.style.background =
    atual.cor;

    document.documentElement
    .style.setProperty(
        '--ods-color',
        atual.cor
    );

    odsImg.src =
    `assets/ods/ods${odsAtual + 1}.png`;

}

atualizarODS();

document
.getElementById('nextODS')
.addEventListener('click', () => {

    odsAtual++;

    if(odsAtual > 16){

        odsAtual = 0;

    }

    atualizarODS();

});

document
.getElementById('prevODS')
.addEventListener('click', () => {

    odsAtual--;

    if(odsAtual < 0){

        odsAtual = 16;

    }

    atualizarODS();

});

/* AUTO PLAY */

setInterval(() => {

    odsAtual++;

    if(odsAtual > 16){

        odsAtual = 0;

    }

    atualizarODS();

}, 8000);

/* ==========================================
   MODAL ODS
========================================== */

const modal =
document.getElementById('modalODS');

document
.getElementById('saibaMais')
.addEventListener('click', () => {

    modal.style.display = 'block';

    document
    .getElementById('modalTitulo')
    .innerText =
    ods[odsAtual].titulo;

    document
    .getElementById('modalTexto')
    .innerText =
    ods[odsAtual].descricao;

});

document
.getElementById('fecharModal')
.addEventListener('click', () => {

    modal.style.display = 'none';

});

window.addEventListener('click', (e) => {

    if(e.target === modal){

        modal.style.display = 'none';

    }

});

/* ==========================================
   DESAFIO ECOs
========================================== */

const residuos = [

{
nome:"🥤 Garrafa PET",
categoria:"reciclavel",
explicacao:"Garrafas PET são recicláveis."
},

{
nome:"📦 Caixa de Papelão",
categoria:"reciclavel",
explicacao:"Papelão limpo deve ser reciclado."
},

{
nome:"🧻 Guardanapo Sujo",
categoria:"comum",
explicacao:"Guardanapos contaminados não podem ser reciclados."
},

{
nome:"☕ Copo Descartável Sujo",
categoria:"comum",
explicacao:"Materiais contaminados devem ser descartados no lixo comum."
},

{
nome:"🍌 Casca de Banana",
categoria:"organico",
explicacao:"Pode ser compostada."
},

{
nome:"☕ Borra de Café",
categoria:"organico",
explicacao:"Resíduo orgânico ideal para compostagem."
},

{
nome:"🔋 Pilha Alcalina",
categoria:"papapilhas",
explicacao:"Pilhas devem ser descartadas no Papa Pilhas."
},

{
nome:"📱 Celular Quebrado",
categoria:"papapilhas",
explicacao:"Equipamentos eletrônicos devem ser destinados ao Papa Pilhas."
},

{
nome:"💉 Seringa",
categoria:"descarpack",
explicacao:"Perfurocortantes devem ser descartados no Descarpack."
},

{
nome:"💊 Medicamento Vencido",
categoria:"medicamentos",
explicacao:"Medicamentos possuem descarte específico."
}

];

let indice = 0;
let pontos = 0;
let itemAtual = null;

const dragItem =
document.getElementById("dragItem");

const feedback =
document.getElementById("feedback");

const resultadoFinal =
document.getElementById("resultadoFinal");

function carregarItem(){

if(indice >= residuos.length){

finalizarJogo();
return;

}

itemAtual = residuos[indice];

dragItem.innerHTML =
itemAtual.nome;

document
.getElementById("currentItem")
.innerText =
indice + 1;

document
.getElementById("gameProgressBar")
.style.width =
((indice / residuos.length) * 100) + "%";

}

if(dragItem){

carregarItem();

dragItem.addEventListener("dragstart", (e)=>{

e.dataTransfer.setData(
"text/plain",
itemAtual.nome
);

});

document
.querySelectorAll(".drop-zone")
.forEach(zone => {

zone.addEventListener("dragover", (e)=>{

e.preventDefault();

});

zone.addEventListener("drop", ()=>{

const correta =
itemAtual.categoria;

const marcada =
zone.dataset.zone;

const acertou =
correta === marcada;

if(acertou){

pontos++;

feedback.innerHTML = `

<div class="feedback-certo">

<h3>✅ Correto!</h3>

<p>${itemAtual.explicacao}</p>

</div>

`;

}else{

feedback.innerHTML = `

<div class="feedback-errado">

<h3>❌ Resposta incorreta</h3>

<p>${itemAtual.explicacao}</p>

</div>

`;

}

indice++;

setTimeout(()=>{

feedback.innerHTML = "";

carregarItem();

},1500);

});

});

}

function finalizarJogo(){

dragItem.style.display = "none";

const zonas =
document.querySelector(".dropzones");

if(zonas){

zonas.style.display = "none";

}

document
.getElementById("gameProgressBar")
.style.width = "100%";

resultadoFinal.innerHTML = `

<h2>🏆 Resultado Final</h2>

<h3>${pontos}/10 acertos</h3>

<p>
Obrigado por participar do
Desafio ECOs.
</p>

${

pontos >= 8 ?

`

<div class="certificado">

🎓 CERTIFICADO ECOs

<br><br>

Parabéns!

Você demonstrou conhecimento
sobre descarte correto de resíduos.

</div>

`

:

''

}

<button
class="btn-reiniciar"
onclick="reiniciarJogo()">

🔄 Jogar Novamente

</button>

`;

}
