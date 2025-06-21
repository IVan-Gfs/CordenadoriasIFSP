
function optSelected(btn, info) {

    document.querySelectorAll(".btn").forEach(btn => btn.style.backgroundColor = "#FFF")
    document.querySelectorAll(".content_info").forEach( info => info.style.display = "none")

    

    btn.style.backgroundColor = "#CDEACD"
    info.style.display = "block"

    
}

const btns = document.querySelectorAll('button[data-info]');
const info = document.querySelectorAll(".content_info")



btns.forEach((btn) => {
    btn.addEventListener('click', () => {
     
      let infoSelected =  document.getElementById(btn.dataset.info);
      
      optSelected(btn, infoSelected)

    });
  });

 optSelected(btns[0], info[0]);