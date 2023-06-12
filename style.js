console.log('this is drag and drop utility');

const imagebox = document.querySelector('.imagebox');

const whiteBoxes = document.getElementsByClassName('whitebox');

imagebox.addEventListener('dragstart', (e) => {
    console.log('drag start');
    e.target.className += ' hold';

    setTimeout(() => {
        e.target.className += 'hide';

    }, 0);

});

imagebox.addEventListener('dragend', (e) => {
    console.log('drag end');
    e.target.className='imagebox';

});


for (const whitebox of whiteBoxes) {

    whitebox.addEventListener('dragover', (e) => {
        console.log('drag_over');
        e.preventDefault();
    });

    whitebox.addEventListener('dragenter', (e) => {
        console.log('drag_enter');
        e.target.className += ' dashed';
    });

    whitebox.addEventListener('dragleave', (e) => {
        console.log('drag_leave');
        e.target.className = 'whitebox';
    });

    whitebox.addEventListener('drop', (e) => {
        console.log('drag_drop');
        e.target.append(imagebox);

    });
}

