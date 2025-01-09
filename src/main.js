import k from "./kaplayCtx"
import mainMenu from "./scenes/mainMenu"
import game from "./scenes/game"
import gameOver from "./scenes/gameOver"
k.loadSprite("chemical-bg","/graphics/chemical-bg.png")
k.loadSprite("platforms","/graphics/platforms.png")
k.loadSprite("sonic","/graphics/sonic.png",{
  sliceX:8,
  sliceY:2,
  anims:{
    run:{from:0,to:7,loop:true,speed:30},
    jump:{from:8,to:15,loop:true,speed:100},
  }
})
k.loadSprite("ring","/graphics/ring.png",{
  sliceX:16,
  sliceY:1,
  anims:{
    spin:{from:0,to:15,loop:true,speed:30}
  }
})
k.loadSprite("motobug","/graphics/motobug.png",{
  sliceX:5,
  sliceY:1,
  anims:{
    run:{from:0,to:4,loop:true,speed:8}
  }
})
k.loadFont("mania","fonts/mania.ttf")

k.loadSound("city","sounds/city.mp3")
k.loadSound("Destroy","sounds/Destroy.wav")
k.loadSound("Hurt","sounds/Hurt.wav")
k.loadSound("HyperRing","sounds/HyperRing.wav")
k.loadSound("Jump","sounds/Jump.wav")
k.loadSound("Ring","sounds/Ring.wav")

k.scene("main-menu",mainMenu)
k.scene("game",game)
k.scene("gameover",gameOver)

k.go("main-menu")