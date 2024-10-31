const itensMenu = [
    {nome: 'Início', url: 'index.html'},
    { nome: 'Sobre', url: 'sobre.html'},
    {nome: 'Contato', url: 'contato.html'}   
];
function menu(){
    const body = document.querySelector('body');
    const header = document.createElement('header');
    const nav = document.createElement('nav');
    const ul = document.createElement('ul')
    body.prepend(header);
    header.appendChild(nav);
    nav.appendChild(ul);
};

function percorrer(){
    const ul = document.querySelector('ul')
    itensMenu.forEach(item => {
        let itens = document.createElement('li');
        let ancora = document.createElement('a');
        ancora.setAttribute('href', item.url);
        ancora.textContent = item.nome.toUpperCase();
        itens.appendChild(ancora);
        // ancora.style.textTransform = 'uppercase';
        ancora.style.textDecoration = 'none';
        ancora.style.color = 'white';
        ul.appendChild(itens);       
    })
};
function estilizar(){
    const header = document.querySelector('header');
    const ul = document.querySelector('ul');
    header.style.backgroundColor = '#071D41';
    header.style.fontFamily = 'Arial';
    ul.style.display = 'flex';
    ul.style.flexDirection = 'row';
    ul.style.justifyContent = 'center';
    ul.style.alignItems = 'center';
    ul.style.height = '40px';
    ul.style.gap = '20px';
    ul.style.listStyleType = 'none';
    
}
menu();
percorrer();
estilizar();