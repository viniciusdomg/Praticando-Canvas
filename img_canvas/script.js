let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");
let anterior  = new Date().getTime();;
let imagem = new Image();
imagem.src = 'idle_right.png';
let i=0;
let interval = 200; 
let xx = 100, xy = 100;

// link para spritesheet de pokemon
//https://stackoverflow.com/questions/45555491/unable-to-animate-sprite-in-phaser-js



function perderCabeca(){

        context.clearRect(0, 0, canvas.width, canvas.height);
        if(i===10){
            i=0;
        }
        if(i===0){
            context.drawImage(imagem, 0,0,49,52, xx,xy, 100,100);
        }else if(i===1){
            context.drawImage(imagem, 49,0, 49,50, xx,xy, 100,100);
        }else if(i===2){
            context.drawImage(imagem, 49*2,0, 49,50, xx,xy, 100,100);
        }else if(i===3){
            context.drawImage(imagem, 49*3,0, 49,50, xx,xy, 100,100);
        }else if(i===4){
            context.drawImage(imagem, 0,52, 49,50, xx,xy, 100,100);
        }else if(i===5){
            context.drawImage(imagem, 49,52, 49,50, xx,xy, 100,100);
        }else if(i===6){
            context.drawImage(imagem, 49*2,52, 49,50, xx,xy, 100,100);
        }else if(i===7){
            context.drawImage(imagem, 49*3,52, 49,50, xx,xy, 100,100);
        }else if(i===8){
            context.drawImage(imagem, 0,52*2-1.5, 49,50, xx,xy, 100,100);
        }else if(i===9){
            context.drawImage(imagem, 49,52*2-1.5, 49,50, xx,xy, 100,100);
        }else if(i===10){
            context.drawImage(imagem, 49*2,52*2-1.5, 49,50, xx,xy, 100,100);
        }
            i++;
    
            setTimeout(perderCabeca, interval);
}

imagem.onload = perderCabeca;

