document.addEventListener('DOMContentLoaded', () => {

    const gridContainer = document.getElementById('grid');
    gridContainer.classList.add('gridContainer');

    // Boxes of grid
    const boxes = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

    // Arrya to hold the current Active boxes
    const active = [];

    const parentBox = document.createElement('div');
    parentBox.classList.add('parentbox');

    //creating boxes to show active/inactive state of that particular tile
    boxes.flat().forEach((data) => {
        const box = document.createElement('div');
        box.classList.add('box')
        box.setAttribute('id', 's' + data);
        box.onclick = function () {
            if (!active.includes(data)) {   
            active.push(data);
            console.log(active);
            if (active.includes(data)) {
                box.style.backgroundColor = 'green'
            }
            if (active.length >= 9) {
                offTheGrid(active);
            }
        }
     }


        const offTheGrid = (active) => {

            const timer = setInterval(() => {
                const current = active[active.length - 1];
                active.pop();
                const currentBox = document.getElementById(`s${current}`)
                currentBox.style.backgroundColor = 'white';

                if (active.length == 0) {
                    clearInterval(timer);
                }

            }, 500)

        }

        parentBox.appendChild(box);
    })
    gridContainer.appendChild(parentBox);

})