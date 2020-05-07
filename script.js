window.addEventListener("load", function () {

    const rowCount = document.getElementById('row');
    const colCount = document.getElementById('col');
    const cellSize = document.getElementById('cell');
    const containerDiv = document.getElementById("container");
    const btnReiniciar = document.getElementById('reiniciar');


    function dibujar() {
    
        containerDiv.style.gridTemplateColumns = `repeat(${colCount.value}, 1fr)`;
        containerDiv.style.gridTemplateRows = `repeat(${rowCount.value}, 1fr)`;
    
        for (let i = 0; i < rowCount.value * colCount.value; i++) {
            const newDiv = document.createElement("div");
            newDiv.classList.add("grid-item");
    
            newDiv.style.width = `${cellSize.value}px`;
            newDiv.style.height = `${cellSize.value}px`;
    
            newDiv.addEventListener('click', () => {
                newDiv.style.backgroundColor = "black";
            });
    
            newDiv.addEventListener('mouseover', () => {
                newDiv.style.backgroundColor = "white";
            });
    
            containerDiv.appendChild(newDiv);
        }
    }

    dibujar();

    // Borra el contenido del div y vuelve a dibujar con los valores de los inputs
    btnReiniciar.addEventListener('click', () => {
        containerDiv.innerHTML = '';
        dibujar();
    })

    //this.console.log(containerDiv.children)
    cellSize.addEventListener('change', () => {
        for (let i = 0; i < rowCount.value * colCount.value; i++) {
            

            containerDiv.children[i].style.width = `${cellSize.value}px`;
            containerDiv.children[i].style.height = `${cellSize.value}px`;
        }
    });

});


