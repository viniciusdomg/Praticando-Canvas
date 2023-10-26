let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");

context.fillStyle = "red";
 context.fillRect(10, 300, 200,200);
 context.lineWidth = 6; // aumenta o tamano da linha de contorno
 context.strokeStyle = "black"; 
 context.strokeRect(10,300,200,200);

 context.beginPath();
 context.moveTo(75,250);//Ponto inicial, onde começará a escrever
 context.lineTo(150,50); 
 context.lineTo(225,250); 
 context.lineTo(50,120); 
 context.lineTo(250,120); 
 context.lineTo(75,250);
 context.lineWidth = 3;
 context.stroke();
 context.closePath();

 context.beginPath();
 context.arc(90, 600, 50, 0*Math.PI/180, 360*Math.PI/180, true); //Circulo completo
 //esse calculo usando MATH.PI é para transformar em radianos
 context.strokeStyle = "gray";
 context.fillStyle = "cyan";
 context.fill();
 context.stroke();
 
 context.beginPath();
 context.moveTo(42, 585);
 context.lineTo(120, 640);
 context.lineTo(90, 550);
 context.lineTo(65, 640);
 context.lineTo(136, 585);
 context.lineTo(42, 585);
 context.stroke();
