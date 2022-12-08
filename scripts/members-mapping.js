// let filteredMembers = [...membersList]
let membersList = [
    {
        id: '1',
        nome: "Gabriel Cunha",
        titulo:"Front-end",
        descrição: "<h2>Olá! Me chamo Gabriel Vilela, faço Programação e Direito, e meu objetivo aqui, é te orientar sobre as questões deontológicas concomitantimente a uma práxis do mundo da programação.</h2>",
        imagem: "images/integrantes/VILELA.png",
        portifolio: "https://vilelasite.netlify.app/",
    },
    {
        id: '2',
        nome: 'Gabriel Souza',
        titulo:'Front-end',
        descrição: '<h2>Achando seu site morto? Ultrapassado? Não se preocupe, eu posso te ajudar!<br> <br>Convido-lhes a acessar meus links abaixo para conhecer mais sobre mim e minha trajetória.</h2>',
        imagem: 'images/integrantes/SOUZA.png',
        portifolio: "https://resumee-digital.netlify.app/",
    },
    {
        id: '3',
        nome: 'João Vitor',
        titulo:'Full Stack',
        descrição: '<h2>Entrei no mundo da programação em 2016. Apesar de todas as dificuldades que encontrei pelo caminho, sigo perseguindo meus objetivos na área! <br> <br> Lhe convido a acessar meus links abaixo para conhecer mais sobre mim e meus trabalhos!</h2>',
        imagem: 'images/integrantes/JOAOVITOR.png',
        portifolio: "https://jvsaresumee.netlify.app/"
    },
    {
        id: '4',
        nome: 'Jonathan Júlio',
        titulo:'Back-end',
        descrição: '<h2>Olá!! Me chamo Jonathan Júlio, comecei a ter contato com a tecnologia desde os meus 8 anos de ideda. <br>No momento sou militar e estou adentrando no mercado da programação. Meu objetivo aqui é ter agilidade e eficiência em soluções. <br><br>Para saber mais sobre mim, clique nos links abaixo!</h2>',
        imagem: 'images/integrantes/JONATHAN.png',
        portifolio: 'https://jonathanj-resumee.netlify.app/'
    },
    {
        id: '5',
        nome: 'Matheus Monteiro',
        titulo:'UI e Designer',
        descrição: '<h2>Desde a minha infância, sempre tive uma conexão muito forte com o mundo da arte, sobretudo, foi a área de design gráfico que mais me fascinou com o decorrer dos anos.<br><br> Eu vos convido a saber mais sobre a minha trajetória</h2>',
        imagem: 'images/integrantes/MATHEUS.png',
        portifolio: 'https://mm-resumee.netlify.app/'
    },
];
let filteredMembers = membersList;

const membersContainer = document.querySelector(".secao-card");

const displayMembers = () => {
    if(filteredMembers.length < 1){
        membersContainer.innerHTML = `
        <h2>Sorry, no Members matched your search</h2>`;
        return;
    }

    membersContainer.innerHTML = filteredMembers.map((e) => {
        const {id, nome, titulo, descrição, imagem, portifolio} = e;

        return `
                <div class="card data-id="${id}"">
                    <div class="img">
                        <img src="${imagem}">
                    </div>
                    <div class="content">
                        <h1 class="title">${nome}</h1>
                        <div class="content-desc">${descrição}</div>
                    </div>       
                    <h1 class="title">${nome}</h1>
                    <div class="arrow"> 
                        
                        <span>${titulo}</span>
                        <div class="rede">
                            <a target="_blank" rel="noopener noreferrer" href="${portifolio}" title="Portifólio"><ion-icon name="terminal"></ion-icon></a>
                            <a href="#" title="Instagram"><ion-icon name="logo-instagram"></ion-icon></a>
                            <a href="#" title="LinkedIn"><ion-icon name="logo-linkedin"></ion-icon></a>
                            <a href="#" title="GitHub"><ion-icon name="logo-github"></ion-icon></a>
                        </div>
                    </div>
                </div>
        `;
    }).join('');
}

displayMembers();

