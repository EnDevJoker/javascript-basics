let colocar = document.getElementById('taskInput')
let ul = document.getElementById('lista')


function add() {

  if (colocar.value !== "") {
    const li = document.createElement("li");
    li.textContent = colocar.value;
    

    //Criando botão de remover algo da lista

    const removerLista = document.createElement('button');
    removerLista.textContent = "Remover"
    
    removerLista.onclick = function () {

      ul.removeChild(li);

    }

    li.appendChild(removerLista)
    ul.appendChild(li)    
    colocar.value = ""

  } else {
    alert('Por favor, insira algo para tarefa!')

  }
}



/* let count = 0

function keyPress(event) {

  count++



if (event.key === "ArrowDown") {

  event.preventDefault();
  console.log("Rolagem desativada!")

  if (count >= 10){

    
    console.log('Removendo a função após 10 clicks')
    document.removeEventListener('keydown', keyPress)
  }


}
}

document.addEventListener('keydown', keyPress)

*/
