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