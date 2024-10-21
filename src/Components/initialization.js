let isEnglish = false;

fetch('archives.json')
    .then(r => r.json())
    .then(data => {
        processJson(data);
    })
    .catch(e => {
        console.log('Erro ao carregar JSON', e);
    });

function processJson(data){
    populaCabecalho(data.secoes[0]);
    populaProficional(data.secoes[1]);
    populaEducacao(data.secoes[2]);
    populaProjetos(data.secoes[3]);
    populaHabilidades(data.secoes[4]);
    populaConhecimentos(data.secoes[5]);
    populaBiblioteca(data.secoes[6]);
    populaFooter(data.secoes[7]);
}

function populaCabecalho(data){
    const titulo = document.getElementById("Name")
    const conteudo = document.getElementById("welcome");

    titulo.innerHTML = data.titulo;
    conteudo.innerHTML = isEnglish ? data.textoEn : data.textoBr;
}


function populaProficional(data){
    const titulo = document.getElementById("titleExperience");
    const conteudo = document.getElementById("roles");

    conteudo.innerHTML = `<label class="cardInsidetitle">${isEnglish ? 'Job titles' : 'Cargos'}</label>`;

    if(isEnglish){
        titulo.innerHTML = data.tituloEn
        data.components.forEach(component => {
            component.textoEn.forEach(texto => {
                conteudo.innerHTML += `
                    <li>${texto.item}</li>
                `;
            });
        });
    }
    else{
        titulo.innerHTML = data.tituloBr
        data.components.forEach(component => {
            component.textoBr.forEach(texto => {
                conteudo.innerHTML += `
                    <li>${texto.item}</li>
                `;
            });
        });
    }
}


function populaEducacao(data){
    const titulo = document.getElementById("certificationsTitle");
    const formation = document.getElementById("formation");
    const certification = document.getElementById("certification");

    formation.innerHTML = `<label class="cardInsidetitle">${isEnglish ? 'Education' : 'Formação'}</label>`;
    certification.innerHTML = `<label class="cardInsidetitle">${isEnglish ? 'Certifications' : 'Certificados'}</label>`;

    titulo.innerHTML = isEnglish ? data.tituloEn : data.tituloBr;
    if(isEnglish){
        data.components[0].textoEn.forEach(texto => {
            if(texto.link !== "")
                formation.innerHTML += `
                    <li><a href="${texto.link}" target="_blank">${texto.item}</a></li>
                `
            else
                formation.innerHTML += `
                    <li>${texto.item}</li>
                `;
        });
    }
    else{
        data.components[0].textoBr.forEach(texto => {
            if(texto.link !== "")
                formation.innerHTML += `
                    <li><a href="${texto.link}" target="_blank">${texto.item}</a></li>
                `
            else
                formation.innerHTML += `
                    <li>${texto.item}</li>
                `;
        });
    }
    
    data.components[1].textoBr.forEach(texto => {
        if(texto.link !== "")
            certification.innerHTML += `
                <li><a href="${texto.link}" target="_blank">${texto.item}</a></li>
            `
        else
            certification.innerHTML += `
                <li>${texto.item}</li>
            `;
    });

}


function populaProjetos(data){
    const titulo = document.getElementById("projectTitle");
    const conteudo = document.getElementById("projects");

    conteudo.innerHTML = '';

    if(isEnglish){
        titulo.innerHTML = data.tituloEn;
        data.components[0].textoEn.forEach(texto => {
            conteudo.innerHTML += `
                <li><a href="${texto.link}" target="_blank">${texto.item}</a></li>
            `
        });
    }
    else{
        titulo.innerHTML = data.tituloBr;
        data.components[0].textoBr.forEach(texto => {
            conteudo.innerHTML += `
                <li><a href="${texto.link}" target="_blank">${texto.item}</a></li>
            `
        });
    }
}

function populaHabilidades(data){
    const titulo = document.getElementById("skillTitle");
    const conteudo = document.getElementById("skills");

    conteudo.innerHTML = '';

    if(isEnglish){
        titulo.innerHTML = data.tituloEn;
        data.components[0].textoEn.forEach(texto => {
            conteudo.innerHTML += `
                <li>${texto.item}</li>
            `
        });
    }
    else{
        titulo.innerHTML = data.tituloBr;
        data.components[0].textoBr.forEach(texto => {
            conteudo.innerHTML += `
                <li>${texto.item}</li>
            `
        });

    }
}

function populaConhecimentos(data){
    const titulo = document.getElementById("tecno");
    const languages = document.getElementById("Languages");
    const database = document.getElementById("database");
    const tools = document.getElementById("tools");

    languages.innerHTML = `<label class="cardInsidetitle">${isEnglish ? 'Languages' : 'Linguagens'}</label>`;
    database.innerHTML = `<label class="cardInsidetitle">Databases</label>`;
    tools.innerHTML = `<label class="cardInsidetitle">${isEnglish ? 'Tools' : 'Ferramentas'}</label>`;

    titulo.innerHTML = isEnglish ? data.tituloEn : data.tituloBr;
    if(isEnglish){
        data.components[0].textoEn.forEach(texto => {
            languages.innerHTML += `
                    <li>${texto.item}</li>
                `;
        });
    }
    else{
        data.components[0].textoBr.forEach(texto => {
            languages.innerHTML += `
                    <li>${texto.item}</li>
                `;
        });
    }
    
    data.components[1].textoBr.forEach(texto => {
        database.innerHTML += `
                <li>${texto.item}</li>
            `;
    });
    data.components[2].textoBr.forEach(texto => {
        tools.innerHTML += `
                <li>${texto.item}</li>
            `;
    });
}

function populaBiblioteca(data){
    const titulo = document.getElementById("libTitle");
    const languages = document.getElementById("lang");
    const computing = document.getElementById("comp");
    const games = document.getElementById("games");
    const belongings = document.getElementById("belongs");

    languages.innerHTML = `<label class="cardInsidetitle">${isEnglish ? 'Programming' : 'Programação'}</label>`;
    computing.innerHTML = `<label class="cardInsidetitle">${isEnglish ? 'Computing' : 'Computação'}</label>`;
    games.innerHTML = `<label class="cardInsidetitle">${isEnglish ? 'Game development' : 'Desenvolvimento de jogos'}</label>`;
    belongings.innerHTML = `<label class="cardInsidetitle">${isEnglish ? 'belongings' : 'Posses'}</label>`;

    titulo.innerHTML = isEnglish ? data.tituloEn : data.tituloBr;
        data.components[0].textoBr.forEach(texto => {
            languages.innerHTML += `
                <li><a href="${texto.link}" target="_blank">${texto.item}</a></li>
            `;
        });
        data.components[1].textoBr.forEach(texto => {
            computing.innerHTML += `
                <li><a href="${texto.link}" target="_blank">${texto.item}</a></li>
            `;
        });
        data.components[2].textoBr.forEach(texto => {
            games.innerHTML += `
                <li><a href="${texto.link}" target="_blank">${texto.item}</a></li>
            `;
        });
        data.components[3].textoBr.forEach(texto => {
            belongings.innerHTML += `
                <li><a href="${texto.link}" target="_blank">${texto.item}</a></li>
            `;
        });
}

function populaFooter(data){
    const footerImg = document.getElementById("footerImg");
    const copyrights = document.getElementById("copyrights");


    footerImg.innerHTML = '';
    data.components.forEach(item => {
        footerImg.innerHTML += `
            <img align="center" height="40" width="40" alt="${item.alt}" src="${item.src}" />
        `;
    });

    copyrights.innerHTML = isEnglish ? `create & copyrights by Leonardo Vinicius de Gasperin,
                                        <br>
                                        The information on this site may be updated`
                                        : `create & copyrights by Leonardo Vinicius de Gasperin,
                                        <br>
                                        As informações deste site podem ser atualizadas.`;
    footerImg.innerHTML += `<a href="https://github.com/leonardoGasperin" align="center" height="30" width="40" alt="Leonardo-Github">
                                <img style="background-color: white; border-radius: 40%;" align="center" height="40" width="40" alt="Leonardo-GitHub" src="../../../src/img/footerIcons/github-original.svg" />
                            </a>`;
}
