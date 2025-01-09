import k from "../kaplayCtx";

export function makeHyperRing(pos){
     return k.add([
        k.sprite("ring",{anim:"spin"}),
        k.pos(pos),
        k.scale(4),
        k.offscreen(),
        k.anchor("center"),
        k.area(),
        "ring",
     ])
}