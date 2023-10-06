let un = document.querySelector('#un');
let deux = document.querySelector('#deux');
let trois = document.querySelector('#trois');



let screen = "";

function miseAjour() {
    document.querySelector('#screen').value = screen;
}


function number(a) {
   screen += a;
   miseAjour();
}

function signe(b) {
    screen +=b;
    miseAjour();
}

function reset() {
    screen = "";
    miseAjour();
}

function del() {
    screen = screen.slice(0, -1);
    miseAjour(); 
}

function egal() {
    try {
        screen = eval(screen)
        miseAjour();
    } catch (error) {
        screen = 'ERROR';
        miseAjour();
    }
};
const body = document.body;
// partie des themes de couleurs

deux.addEventListener('click', function(){
    let cercle = document.querySelector('#cercle');
    body.classList.add('active1');
    body.classList.remove('active2');
    cercle.style.left= '40%';
   
})

un.addEventListener('click', function(){
    let cercle = document.querySelector('#cercle');
    body.classList.remove('active1');
    body.classList.remove('active2');
    cercle.style.left= '0';
})

trois.addEventListener('click', function(){
    let cercle = document.querySelector('#cercle');
    body.classList.add('active2');
    body.classList.add('active1');
    cercle.style.left= '75%';
})