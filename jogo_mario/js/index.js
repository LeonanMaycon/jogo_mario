const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const cloud = document.querySelector('.cloud');

let count = 0;
let recorde = 0;

const jump = () => {

    mario.classList.add('jump');
    setTimeout(()=>{

        mario.classList.remove('jump')
    
    },500);
}

const loop = setInterval(()=>{

    const pipePosition = pipe.offsetLeft;
    const cloudPosition = cloud.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');


    if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 110){

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        cloud.style.animation = 'none';
        cloud.style.left = `${cloudPosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;


        mario.src = '../img/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';

        clearInterval(loop);
        count = 0;
    }else{
        count++;
        document.getElementById('count').value = count;

        if(recorde == 0){
            recorde = count;
        }else{
            if(count > recorde){
                recorde = count;
            }
        }

        document.getElementById('recorde').value = recorde;

    }


},10)

document.addEventListener('keydown', jump);