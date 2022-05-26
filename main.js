// Creating a variables that will help us create the box grid.
const container = document.querySelector('#container');
const setGridSize = document.querySelector('#gridSize');
const buttonSmall = document.querySelector('#small');
const buttonMedium = document.querySelector('#medium');
const buttonLarge = document.querySelector('#large');
const buttonExtraLarge = document.querySelector('#extraLarge');
let colorMode = '';
let colorPicker;

createBoxes(8);


//Function to create the grid
function createBoxes(numBox) {
    container.style.gridTemplateColumns = `repeat(${numBox}, 1fr)`;
    for ( let i = 0; i< numBox*numBox; i++){
        const square = document.createElement('div');
        square.classList.add('box');
        container.appendChild(square);
    }
//Adding variables for the color modes, at the time Shader was not implemented
    const cells = document.querySelectorAll('.box');
    const noir = document.querySelector('#noir');
    const shader = document.querySelector('#shader');
    const rgb = document.querySelector('#rgb');
    const eraser = document.querySelector('#eraser');
//Adding eventListeners for the buttons that will help us pick colors, using a 
// 'mode' variable that changes when we click on the button
    noir.addEventListener('click', () => {
        colorMode = 'noir';
        return colorMode;
    })
    shader.addEventListener('click', () => {
        colorMode = 'shader';
        return colorMode;
    })
    rgb.addEventListener('click', () => {
        colorMode = 'rgb';
        return colorMode;
    })
    eraser.addEventListener('click', () => {
        colorMode = 'white';
        return colorMode;
    })
//An eventListener for the hover effect.
    cells.forEach((box) => {
        box.addEventListener('touchstart', () => {
            if ( colorMode === 'noir' ) {
                box.style.backgroundColor = 'black';
            }
            else if ( colorMode === 'rgb' ) {
                const randomR = Math.floor(Math.random()*256);
                const randomG = Math.floor(Math.random()*256);
                const randomB = Math.floor(Math.random()*256);
                box.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
            }
            else if ( colorMode === 'white' ) {
                box.style.backgroundColor = 'white';
            }
        })
//Added an eventListener remover to handle the mem leak i was experiencing
        box.removeEventListener('mouseover', () => {
            if ( colorMode === 'noir' ) {
                box.style.backgroundColor = 'black';
            }
            else if ( colorMode === 'rgb' ) {
                const randomR = Math.floor(Math.random()*256);
                const randomG = Math.floor(Math.random()*256);
                const randomB = Math.floor(Math.random()*256);
                box.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
            }
            else if ( colorMode === 'white' ) {
                box.style.backgroundColor = 'white';
            }
        })
    })
}

//Adding a reset function that will set the number of cells in the grid to 0
//if there are already cells in the grid.
function reset() {
    while ( container.firstChild ) {
        container.removeChild(container.lastChild);
    }
}

//A button for manual input, limited at 64x64 grid size (to save on computing
//ressources)
/*setGridSize.addEventListener('click', () => {
    reset();
    let userInput = prompt("How big should the grid be?");
        if ( userInput > 64) {
            alert('The grid is way too big, reducing in order to save resources');
            userInput === 64;
            return createBoxes(userInput);
        } else if ( userInput <= 64 ) {
            return createBoxes(userInput);
        } else { 
            alert('Please type a number, preferably up to 64. Thank you!');
            return;
        }
})*/

//4 buttons that sets the grid in 8x8, 16x16, 32x32 or 64x64 size
buttonSmall.addEventListener('click', () => {
    reset();
    createBoxes(8);
});
buttonMedium.addEventListener('click', () => {
    reset();
    createBoxes(16);
});
buttonLarge.addEventListener('click', () => {
    reset();
    createBoxes(32);
});
buttonExtraLarge.addEventListener('click', () => {
    reset();
    createBoxes(64);
});


//- Maybe put a slider instead of the S M L XL buttons(?)
//- Bring back the manual grid size button(?)
//- Shader mode, i.e. everytime you hover a specific cell the color get 10% darker

