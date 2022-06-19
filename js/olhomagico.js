//olho magico
let form = document.querySelector ('div');
let input = document. getElementById ('senha');
let icon = document. querySelector ('.olhomagico');

icon.addEventListener('click', function () {
    form.classList.toggle('visible')
    if (form.classList.contains('visible')){
        icon.src = 'images/eye.svg';
        input.type = 'text';
    } else {
        icon.src = 'images/eye-off.svg';
        input.type = 'password';
    }
}) 
// fim

// hover login
var hover = window.document.getElementById('entrar');
hover.addEventListener('click', clicar);
hover.addEventListener('mouseenter', entrar);
hover.addEventListener('mouseout', sair);


function clicar (){

hover.innerText = 'Clicou!';
hover.style.background = 'wheat'};

function entrar () {
    hover.style.background = 'wheat'};

    function sair () {
        hover.style.background = ''};
// fim          
// mascara cnpj
function formatarCampo(campoTexto) {
            if (campoTexto.value.length <= 14); {
                campoTexto.value = mascaraCnpj(campoTexto.value);
            }
        }
      
        function mascaraCnpj(valor) {
            return valor.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/g,"\$1.\$2.\$3\/\$4\-\$5")}
// fim
// guabiarra de validação kkkk
function login(){

                var login = document.getElementById('cnpj').value
                var senha = document.getElementById('senha').value
            
                if(login == "00.000.000/0000-00" && senha == "00000000"){
                    location.href = "https://github.com/ClevertonCodev"
                }else{
                    alert('Usuario ou senha incorretos')
                }
            
            }   
// fim            
            