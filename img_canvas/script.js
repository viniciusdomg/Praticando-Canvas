let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");
let imagem = new Image();
imagem.src = 'idle_right.png';
 
// link para spritesheet de pokemon
//https://stackoverflow.com/questions/45555491/unable-to-animate-sprite-in-phaser-js

imagem.onload = function(){
    context.drawImage(imagem, 0,0,49,52, 100,100, 100,100);
    context.drawImage(imagem, 49,0, 49,50, 180,150, 100,100);
    context.drawImage(imagem, 49*2,0, 49,50, 260,200, 100,100);
    context.drawImage(imagem, 49*3,0, 49,50, 340,250, 100,100);
    context.drawImage(imagem, 0,52, 49,50, 420,300, 100,100);
    context.drawImage(imagem, 49,52, 49,50, 500,350, 100,100);
    context.drawImage(imagem, 49*2,52, 49,50, 580,400, 100,100);
    context.drawImage(imagem, 49*3,52, 49,50, 660,450, 100,100);
    context.drawImage(imagem, 0,52*2-1.5, 49,50, 740,500, 100,100);
    context.drawImage(imagem, 49,52*2-1.5, 49,50, 820,550, 100,100);
    context.drawImage(imagem, 49*2,52*2-1.5, 49,50, 900,600, 100,100);
}
