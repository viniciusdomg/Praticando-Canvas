let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");

//Corpo da casa
context.fillStyle = "orange";
context.fillRect(100, 200, 400, 400);
context.lineWidth = 3;
context.strokeRect(100, 200, 400, 400);

//Janela
context.fillStyle = "lightblue";
context.strokeStyle = "black";
context.lineWidth = 3;
context.strokeRect(130, 270, 100, 100);
context.fillRect(130, 270, 100, 100);
context.beginPath();
context.moveTo(130, 320);
context.lineTo(230, 320);
context.stroke();
context.closePath();
context.beginPath();
context.moveTo(180, 270);
context.lineTo(180, 370);
context.stroke();
context.closePath();

//Porta
context.fillStyle = "brown";
context.fillRect(300, 380, 120, 220);

//Telhado
context.beginPath();
context.moveTo(100, 200);
context.lineTo(300, 45);
context.lineTo(500, 200);
context.fill();
context.lineWidth = 4;
context.stroke();

//Maçaneta
context.beginPath();
context.arc(400, 500, 10, (0 * Math.PI) / 180, (360 * Math.PI) / 180, true);
context.fillStyle = "gray";
context.fill();
context.strokeStyle = "goldenrod";
context.stroke();

context.beginPath();
context.moveTo(500, 200);
context.lineTo(800, 200);
context.lineTo(650, 45);
context.lineTo(300, 45);
context.fillStyle = "brown";
context.fill();
context.strokeStyle = "black";
context.stroke();

context.fillStyle = "yellow";
context.fillRect(500, 200, 300, 400);
context.lineWidth = 3;
context.strokeRect(500, 200, 300, 400);

context.fillStyle = "lightblue";
context.strokeStyle = "black";
context.lineWidth = 3;
context.strokeRect(560, 270, 180, 100);
context.fillRect(560, 270, 180, 100);
context.beginPath();
context.moveTo(560, 320);
context.lineTo(740, 320);
context.stroke();
context.closePath();
context.beginPath();
context.moveTo(650, 270);
context.lineTo(650, 370);
context.stroke();
context.closePath();
