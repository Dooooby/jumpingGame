let canvas = document.getElementById('canvas')
let ctx = canvas.getContext('2d')

canvas.width = window.innerWidth - 100;
canvas.height = window.innerHeight - 100;

var img1 = new Image();
img1.src = 'cactus.png'
var img2 = new Image();
img2.src = 'dinosaur.png'


let dino = { //캐릭터 정보
    x : 10,
    y : 200,
    width : 50,
    height : 50,
    draw() {
        ctx.fillStyle = 'skyblue',
        // ctx.fillRect(this.x,this.y,this.width,this.height)  
        ctx.drawImage(img2, this.x, this.y)      
    }
}

// dino.draw()

class Cactus { //장애물 생성, class생성 일반적
    constructor() {
        this.x = 500;
        this.y = 200;
        this.width = 50;
        this.height = 50;
    }
    draw() {
        ctx.fillStyle = 'pink'
        // ctx.fillRect(this.x, this.y, this.width, this.height)
        ctx.drawImage(img1, this.x, this.y)
    }   
}

let timer = 0;
let cactuses = []; //장애물 여러개일때 array 담아 관리
let jumpingTimer = 0;

 let cactus = new Cactus();
//  cactus.draw()

 function frameA() { //애니메이션, 1초에 60번 실행 내장함수
    requestAnimationFrame(frameA);
    timer++;
    
    ctx.clearRect(0,0, canvas.width, canvas.height)

    if (timer % 100 === 0) { //100프레임마다 한번씩 그려줌
        let cactus = new Cactus();
        cactuses.push(cactus);
        cactus.draw();
    }
    // dino.x++;

    cactuses.forEach((a, i, o) => {
        if (a.x < 0) {
            o.splice(i,1)
        }//x좌표가 0미만이면 제거
        a.x--;
        a.draw();
    }) //반복문으로 장애물 돌려

    if (jumping == true) {
        dino.y--;
        jumpingTimer++;
    }

    if (jumping == false) {
        if(dino.y < 200) {
            dino.y++;
        }
    }

    if (jumpingTimer > 100) {
        jumping = false;
        jumpingTimer = 0;
    }
    // cactus.draw();
    dino.draw();
 }

 frameA(); //함수실행필수!!!!

 var jumping = false;

 document.addEventListener('keydown', function(e) {
    if(e.code === 'Space') {
        jumping = true;
    }
 })