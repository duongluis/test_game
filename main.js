var canvas = document.getElementById("canvas")
var context = canvas.getContext("2d")

const width = 1000
const height = 300

class Character {
    constructor(x,y , width , height , color, speed) {
        this.x =x
        this.y=y
        this.width=width
        this.height=height
        this.color=color
        this.speed =speed
        this.max_speed=10
    }

    move_width () {
        this.x+=this.speed

        // if(this.x > width - this.width || this.x == width-this.width ) {
        //     this.speed = -this.speed 
        // }

        if(cha_test.x >= width - cha_test.width) {
            cha_test.x = width-cha_test.width
        }

        if(cha_test.x <= 0) {
            cha_test.x=0
        }

        
    }    
    
    move_height () {
        this.y+=this.speed
        
        if(this.y > height - this.height || this.y <= 0 || this.y == height-this.height) {
            this.speed = -this.speed 
        }

        if(cha_test.y >= height - cha_test.height) {
            cha_test.y = height-cha_test.height
        }

        if(cha_test.y <= 0) {
            cha_test.y=0
        }
    }
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

var enemy = [
    new Character(Math.floor(Math.random() * ((width-800)-100 +1)+100),getRandomIntInclusive(0,height-20),20,20,'black',6),
    new Character(Math.floor(Math.random() * ((width-700)-(width-800)+1)+(width-800)),getRandomIntInclusive(0,height-20),20,20,'black',6),
    new Character(Math.floor(Math.random() * ((width-600)-(width-700)+1)+(width-700)),getRandomIntInclusive(0,height-20),20,20,'black',6),
    new Character(Math.floor(Math.random() * ((width-500)-(width-600)+1)+(width-600)),getRandomIntInclusive(0,height-20),20,20,'black',6),
    new Character(Math.floor(Math.random() * ((width-400)-(width-500)+1)+(width-500)),getRandomIntInclusive(0,height-20),20,20,'black',6),
    new Character(Math.floor(Math.random() * ((width-300)-(width-400)+1)+(width-400)),getRandomIntInclusive(0,height-20),20,20,'black',6),
    new Character(Math.floor(Math.random() * ((width-200)-(width-300)+1)+(width-300)),getRandomIntInclusive(0,height-20),20,20,'black',6),
    new Character(Math.floor(Math.random() * ((width-100)-(width-200)+1)+(width-200)),getRandomIntInclusive(0,height-20),20,20,'black',6),

    // new Character(600,height - 10 ,20,20,'black',7),
    // new Character(570,20,20,,20'black',6)
]

var cha_test = new Character(10,150,20,20,'purple',0)

var cha_1 = new Character(50,50,50,50,'white',0)

var cha_2 = new Character(100,100,50,50,'white',0)

var goal = new Character(width-50,130,50,50,'red',0)

var start = new Character(50,0,10,height,'green',0)

document.onkeydown = function(event) {
    switch(event.key){
        case 'ArrowRight' :
            cha_test.speed=cha_test.max_speed
            cha_test.move_width()
            break;
        case 'ArrowLeft' :
            cha_test.speed=-cha_test.max_speed
            cha_test.move_width()
            break; 
        // case'ArrowUp' :
        //     cha_test.speed=-cha_test.max_speed
        //     cha_test.move_height()
        //     break;   
        // case'ArrowDown' :
        //     cha_test.speed=cha_test.max_speed
        //     cha_test.move_height()
        //     break;
    }
}

document.onkeyup = function(event) {
    cha_test.speed=0
}

var clear = function() {
    context.clearRect(0,0,width,height)
}

var draw = function() {
    // var nv = new Character(nv.x,nv.y,nv.width,nv.height,nv.color,nv.speed);
    

    // context.fillStyle = nv.color
    // context.fillRect(nv.x,nv.y,nv.width,nv.height)
        context.drawImage(img.goal,goal.x,goal.y)
        context.drawImage(img.cha_test,cha_test.x,cha_test.y)
    // 
    // }
}

var update_canvas = function() {
    
    enemy.forEach(function(element) {
        element.move_height()
        if(crash(cha_test,element)) {
           result('Lose') // alert('Crash')
            
        }
    });

    if(crash(cha_test,goal)){
        result('Winner')
    }
}

var running=true;



var img ={}

var upload_img = function() {
    img.cha_test = new Image();
    img.cha_test.src = "player.png";

    img.goal = new Image();
    img.goal.src = "finish.png";

    img.enemy_1 = new Image();
    img.enemy_1.src = "player.png";

    img.enemy_2 = new Image();
    img.enemy_2.src = "G.png";

    img.enemy_3 = new Image();
    img.enemy_3.src = "A.png";

    img.enemy_4 = new Image();
    img.enemy_4.src = "M.png";

    img.enemy_5 = new Image();
    img.enemy_5.src = "O.png";

    img.enemy_6 = new Image();
    img.enemy_6.src = "T.png";

    img.enemy_7 = new Image();
    img.enemy_7.src = "A (2).png";

}



var result = function(text) {
    running = false;
    alert(text);
    window.location="";
}

var crash= function (obj_1,obj_2) {

    var con_1 = obj_1.x < obj_2.x + obj_2.width && obj_2.x < obj_1.x + obj_1.width 

    var con_2 = obj_1.y < obj_2.y + obj_2.height && obj_2.y < obj_1.y + obj_1.height  

    return con_1 && con_2;
}

var draw_enemy = function() {   
    var count=0;
    enemy.forEach(function(nv) {

        count++;
        // context.fillStyle = nv.color
        // context.fillRect(nv.x,nv.y,nv.width,nv.height)
        if(count==1){context.drawImage(img.enemy_1,nv.x,nv.y)}
        else if(count==2){context.drawImage(img.enemy_2,nv.x,nv.y)}
        else if(count==3){context.drawImage(img.enemy_3,nv.x,nv.y)}
        else if(count==4){context.drawImage(img.enemy_4,nv.x,nv.y)}
        else if(count==5){context.drawImage(img.enemy_5,nv.x,nv.y)}
        else if(count==6){context.drawImage(img.enemy_6,nv.x,nv.y)}
        else if(count==7){context.drawImage(img.enemy_7,nv.x,nv.y)}
        

    
    })
}

var step = function() {
    clear()
    draw()
    // draw(start)
    update_canvas()
    draw_enemy()
    
    if(running) {
        window.requestAnimationFrame(step);
    }
}

upload_img();
step();


//cần thêm kết quả và in kết quả ra màn hình
//các nút chạy nx 