// let filteredList = [... projectList];
let projectList = [
    {
        id:'1',
        nome: 'Sistema de Filtragem',
        Descricao: 'Sistema desenvolvido em linguagem Python, com uso do framwork Flask para integração com fronnt-end',
        orientador: 'Fernando Rodrigues',
        imagem: 'images/placeholders/Projeto-devsytem 1.svg',
        link: 'https://devsytem.herokuapp.com/',
    },
    {
        id:'2',
        nome: 'Caixa Eletrônico',
        Descricao: 'Sistema desenvolvido em linguagem C, que simula um caixa eletrônico',
        orientador: 'Fernando Rodrigues',
        imagem: 'images/placeholders/C-programming-1024x530-1.jpg',
        link: '#',
    },
    {
        id:'2',
        nome: 'Sistema Exemplo 2',
        Descricao: 'Sistema desenvolvido em linguagem Javascript, com uso da biblioteca ReactJs',
        orientador: 'Fabiano Fonseca',
        imagem: 'images/logo/FB-tech 1.svg',
        link: '#',
    }
];
let filteredList = projectList;

const projectContainer = document.querySelector(".cards-container");

const displayList = () => {
    if(filteredList.length < 1){
        projectContainer.innerHTML = `
        <h2>Sorry, no Projects matched your search</h2>`;
        return;
    }

    projectContainer.innerHTML = filteredList.map((e) => {
        const {id, nome, Descricao, orientador, link, imagem} = e;

        return `
        <article class="projetos" data-id="${id}">
            <div class="projetos-img">
            <img src="${imagem}">
            </div>
            <h3 class="nome">${nome}</h3>
            <p>Orientador: ${orientador}</p>
            <h5>Descricao: ${Descricao}</h5>
            <a href="${link}">Ver Projeto</a>
        </article>
        `;
    }).join('');
}

displayList();
    