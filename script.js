const player1 = document.getElementById('player1');
const obstacle1 = document.getElementById('obstacle1')

const jump = () => {
    if(player1.classList != 'animate') {
        player1.classList.add('animate');
    }
    
    setTimeout(function(){
        player1.classList.remove('animate')
    },500)
}

const checkDeath = setInterval(function() {
    const player1Top =  
    parseInt(window.getComputedStyle(player1).
     getPropertyValue('top'));
     const obstacle1Left =
     parseInt(window.getComputedStyle(obstacle1).getPropertyValue('left'));
     if(obstacle1Left<20 && obstacle1Left>0 && player1Top>=130) {
         obstacle1.style.animation = 'none'
         obstacle1.style.display = 'none'
          alert('you dead')
     };
}, 10)