document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('translate').addEventListener('click', function(event) {
        event.preventDefault(); 
        translate();
    });
});

function translate(){
    const anchor = document.getElementById("translate");
    const img = document.getElementById("translateimg");

    isEnglish = !isEnglish;

    anchor.innerHTML = isEnglish ? 'Traduzir' : 'Translate';
    img.src = isEnglish ? 'https://raw.githubusercontent.com/lipis/flag-icons/29edfe0288970b77976024832f1f3cf0a8667357/flags/1x1/br.svg' 
                        : 'https://raw.githubusercontent.com/lipis/flag-icons/29edfe0288970b77976024832f1f3cf0a8667357/flags/1x1/us.svg';

    fetch('archives.json')
    .then(r => r.json())
    .then(data => {
        processJson(data);
    })
    .catch(e => {
        console.log('Erro ao carregar JSON', e);
    });
}
