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
    new Character(Math.floor(Math.random() * (width-50)+50),getRandomIntInclusive(0,height-20),10,10,'black',5),
new Character(Math.floor(Math.random() * (width-50)+50),getRandomIntInclusive(0,height-20),10,10,'black',4),
new Character(Math.floor(Math.random() * (width-50)+50),getRandomIntInclusive(0,height-20),10,10,'black',5),
new Character(Math.floor(Math.random() * (width-50)+50),getRandomIntInclusive(0,height-20),10,10,'black',4),
new Character(Math.floor(Math.random() * (width-50)+50),getRandomIntInclusive(0,height-20),10,10,'black',4),
new Character(Math.floor(Math.random() * (width-50)+50),getRandomIntInclusive(0,height-20),10,10,'black',4),
new Character(Math.floor(Math.random() * (width-50)+50),getRandomIntInclusive(0,height-20),10,10,'black',5),
new Character(Math.floor(Math.random() * (width-50)+50),getRandomIntInclusive(0,height-20),10,10,'black',5),
new Character(Math.floor(Math.random() * (width-50)+50),getRandomIntInclusive(0,height-20),10,10,'black',4),
new Character(Math.floor(Math.random() * (width-50)+50),getRandomIntInclusive(0,height-20),10,10,'black',5),
new Character(Math.floor(Math.random() * (width-50)+50),getRandomIntInclusive(0,height-20),10,10,'black',5),
new Character(Math.floor(Math.random() * (width-50)+50),getRandomIntInclusive(0,height-20),10,10,'black',5),
new Character(Math.floor(Math.random() * (width-50)+50),getRandomIntInclusive(0,height-20),10,10,'black',5),
new Character(Math.floor(Math.random() * (width-50)+50),getRandomIntInclusive(0,height-20),10,10,'black',5),
new Character(Math.floor(Math.random() * (width-50)+50),getRandomIntInclusive(0,height-20),10,10,'black',5),
new Character(Math.floor(Math.random() * (width-50)+50),getRandomIntInclusive(0,height-20),10,10,'black',5),
new Character(Math.floor(Math.random() * (width-50)+50),getRandomIntInclusive(0,height-20),10,10,'black',5),
new Character(Math.floor(Math.random() * (width-50)+50),getRandomIntInclusive(0,height-20),10,10,'black',5),
new Character(Math.floor(Math.random() * (width-50)+50),getRandomIntInclusive(0,height-20),10,10,'black',5),
new Character(Math.floor(Math.random() * (width-50)+50),getRandomIntInclusive(0,height-20),10,10,'black',6),
    

    // new Character(600,height - 10 ,10,10,'black',7),
    // new Character(570,20,10,10,'black',6)
]

var cha_test = new Character(10,150,10,10,'purple',0)

var cha_1 = new Character(50,50,50,50,'white',0)

var cha_2 = new Character(100,100,50,50,'white',0)

var goal = new Character(width-10,0,10,height,'red',0)


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

var draw = function(nv) {
    var nv = new Character(nv.x,nv.y,nv.width,nv.height,nv.color,nv.speed);
    

    context.fillStyle = nv.color
    context.fillRect(nv.x,nv.y,nv.width,nv.height)

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
    
    enemy.forEach(function(nv) {
        context.fillStyle = nv.color
        context.fillRect(nv.x,nv.y,nv.width,nv.height)
    })
}

var step = function() {
    clear()
    draw(cha_test)
    draw(goal)
    update_canvas()
    draw_enemy()
    
    if(running) {
        window.requestAnimationFrame(step);
    }
}


step();


//cần thêm kết quả và in kết quả ra màn hình
//các nút chạy nx 