// let filteredList = [... startupList];
let startupList = [

    {
        id: '1',
        nome: 'FB1T',
        Ano: '2020',
        orientador: 'Fabiano Fonseca',
        imagem: 'images/logo/logoFB1T.png',
    },
    
    {
        id: '2',
        nome: 'LogSystem',
        Ano: '2021',
        orientador: 'Fernando Rodrigues',
        imagem: 'images/logo/system-logo.png',
    },

    {
        id: '3',
        nome: 'On-Livery',
        Ano: '2022',
        orientador: 'Leonardo Brandão',
        link: 'on-livery.html',
        imagem: 'images/logo/LOGO-ON-LIVERY.png',
    },

];
let filteredList = startupList;

const startupsContainer = document.querySelector(".cards-container");

const displayList = () => {
    if(filteredList.length < 1){
        startupsContainer.innerHTML = `
        <h2>Sorry, no Startups matched your search</h2>`;
        return;
    }

    startupsContainer.innerHTML = filteredList.map((e) => {
        const {id, nome, Ano, orientador, link, imagem} = e;

        return `
        <article class="startups" data-id="${id}">
          <img src="${imagem}">
          <h3 class="nome">${nome}</h3>
          <p>Orientador: ${orientador}</p>
          <p>Ano: ${Ano}</p>
          <a href="${link}">Acessar</a>
        </article>
        `;
    }).join('');
}

displayList();

const form = document.querySelector(".buscar");
const searchInput = document.querySelector("#busca-txt");

form.addEventListener("keyup", () => {

    orientadorList.value = "Todos"; 
    anoList.value = "Todos"; 

    const inputValue = searchInput.value;
    filteredList = startupList.filter((startups) => {
        return startups.nome.toLowerCase().includes(inputValue);
    });

    displayList();
});

const orientadorList = document.querySelector("#Orientador");
const anoList = document.querySelector("#Ano");

const displayOptions = () => {
    const Orientadoroptions = [
        'Todos',
        ...new Set(startupList.map((startup) => startup.orientador)),
    ];

    orientadorList.innerHTML = Orientadoroptions
    .map((orientador) => {
        return `<option value="${orientador}" data-id="${orientador}" class="opcao">${orientador}</option>`
    }).join('');

    const dateOptions = [
        'Todos',
        ...new Set(startupList.map((startup) => startup.Ano)),
    ];

    anoList.innerHTML = dateOptions
    .map((ano) => {
        return `<option value="${ano}" data-id="${ano}" class="opcao">${ano}</option>`
    }).join('');
}

displayOptions();

const orientadorOpt = document.querySelector('#Orientador');

orientadorList.addEventListener("change", () => {

    anoList.value = "Todos"; 
    let optValue = orientadorOpt.options[orientadorOpt.selectedIndex].value;        
    
    if(optValue === 'Todos'){
        filteredList = startupList;
    }

    else{
        for(i = 0; i < startupList.length; i++){
            if(startupList[i].orientador === optValue){
                filteredList = startupList.filter((s) => {
                    return s.orientador.includes(optValue);
                });
                
            }
        }
    }
    searchInput.value =  '';
    displayList();
});

const anoOpt = document.querySelector('#Ano');

anoList.addEventListener("change", () => {

    orientadorList.value = "Todos"; 
    let dataValue = anoOpt.options[anoOpt.selectedIndex].value;        
    
    if(dataValue === 'Todos'){
        filteredList = startupList;
    }
    else{
        for(i = 0; i < startupList.length; i++){
            if(startupList[i].Ano === dataValue){
                filteredList = startupList.filter((s) => {
                    return s.Ano.includes(dataValue);
                });
                
            }
        }
    }
    searchInput.value =  '';
    displayList();
});