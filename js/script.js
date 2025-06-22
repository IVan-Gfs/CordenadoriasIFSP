// função para alterar a cor do botão e o conteúdo
function optSelected(btn, info) {

    document.querySelectorAll(".btn").forEach(btn => btn.style.backgroundColor = "#FFF")
    document.querySelectorAll(".content_info").forEach( info => info.style.display = "none")

    

    btn.style.backgroundColor = "#CDEACD"
    info.style.display = "block"

    
}

const btns = document.querySelectorAll('button[data-info]');
const info = document.querySelectorAll(".content_info")



btns.forEach((btn) => { //adicionando o evento em todos os elementos
    btn.addEventListener('click', () => {
     
      let infoSelected =  document.getElementById(btn.dataset.info);
      
      optSelected(btn, infoSelected)

    });
  });


 optSelected(btns[0], info[0]); // Já selecionar por padrão o primeiro elemento

//função para abrir o menu
function Abremenu() {
  const menu = document.getElementById('Menuaberto');
  menu.classList.toggle('active');
}