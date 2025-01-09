import k from "../kaplayCtx"

export function makeSonic(pos){
 const sonic = k.add([
    k.sprite("sonic",{anim:"run"}),
    k.pos(pos),
    k.scale(4),
    k.anchor("center"),
    k.area(),
    k.body({jumpForce:1700}),
    {
      setControls(){
         k.onButtonPress("jump",()=>{
            if(this.isGrounded()){
               this.play("jump"),
               this.jump(),
               k.play("Jump")
            }
         });
      },
      setEvents(){
         this.onGround(()=>{
            this.play("run")
         })
      }
    }
 ])
 sonic.ringCollectUI = sonic.add([
   k.text("",{font:"mania",size:24}),
   k.color(255,255,0),
   k.anchor("center"),
   k.pos(30,-10)
 ])
 return sonic;
}