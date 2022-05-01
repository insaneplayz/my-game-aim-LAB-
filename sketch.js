var bg,bgimg;
var gun,gimg;
var aim,aimg;     
var shots;             
var silent;         
var enemy,eimg;
var check ;
var score;
var timer = 0
var am,am2,am3,atext = 7,amimg;
var rl,hd;
var nam,nami,rst,sm,big,rst2;
function preload(){
 bgimg = loadImage("map.jpg")
 gimg = loadImage("gn.png")
 aimg = loadImage("aimm.png")
 eimg = loadImage("enemy.png")
 e2 = loadImage("en2.png")
 e3 = loadImage("en3.png")
 ovi = loadImage("go.png")
 amimg = loadImage("ammo.png")
 nami = loadImage("name.PNG")

 shots = loadSound("shot.mp3")

}
function setup(){
 createCanvas(2000,1000)
    bg = createSprite(630,350,500,500)
    bg.addImage(bgimg)
    bg.scale = 3.3
    bg.width=500
    
    gun = createSprite(650,580);
    gun.addImage(gimg,"gunimg")
    gun.scale = 2

    aim = createSprite(500,300)
    aim.addImage(aimg)
    aim.scale = 0.5         

    enemy = createSprite(500,400);
    enemy.addImage(eimg)
    enemy.scale = 1.1
    enemy.setCollider('rectangle',-17,0,50,170)
 

    ov = createSprite(1650,300)
    ov.addImage(ovi)
   
    am = createSprite(1200,600)
    am.addImage(amimg)
    am.scale = 0.3
    am2 = createSprite(1250,600)
    am2.addImage(amimg)
    am2.scale = 0.3
    am3 = createSprite(1150,600)
    am3.addImage(amimg)
    am3.scale = 0.3

    rl = createSprite(1150,300,60,50)
    hd = createSprite(1150,360,60,50)
    rst = createSprite(1150,420,60,50)
    sm = createSprite(1150,480,60,50)
    big = createSprite(1150,540,60,50)
    rst2 = createSprite(1150,100,60,50)

    nam = createSprite(1200,600)
    nam.addImage(nami)
  
    check = createSprite(500,350,5,20)
    check.visible = false
    //////////////////////////////////////
   score = 0

  enemy.debug = true

   console.log(localStorage);
 

 }

function draw(){
    background("black")
   
    text("time played = " + Math.round(timer) + " seconds",1100,150)
    timer += 0.033
   
    textSize = 50
    text("score = "+ score,1100,200)

    text("press the button to reload",1200,300)
   
    text(" play headshots only?",1200,350)
    text(" play bodyshots?",1200,420)
    text(" small target?",1200,480)
    text(" big target??",1200,540)
    text("reset time?",1200,100)

    textSize = 50
    text("bullets left = "+ atext,1200,200)
    
    aim.x = World.mouseX
    aim.y = World.mouseY
   
    if (mouseWentDown("leftButton")){
        shots.play()
        atext -= 1

    }
    if(atext < 0){
        atext = 0
        aim.visible = false
        enemy.visible = false
    }
    if(atext > 0){
        aim.visible = true
        enemy.visible = true
    }
    if(mousePressedOver(rl)){
        atext = 7
    }
    if(mousePressedOver(hd)){
        enemy.setCollider('rectangle',-17,-70,25,25)
    }
    if(mousePressedOver(rst)){
        enemy.setCollider('rectangle',-17,0,50,170)
 
        }
        if(mousePressedOver(rst2)){
            timer = 0
     
            }
    
        if(mousePressedOver(sm)){
            enemy.scale = 0.6
     
            }

            if(mousePressedOver(big)){
                enemy.scale = 1.1
         
                }
    if(mousePressedOver(enemy)){
        enemy.x = Math.round((random(250,1050)))
        enemy.y = Math.round(random(350,200))
        score += 5
    }
  drawSprites();
}
