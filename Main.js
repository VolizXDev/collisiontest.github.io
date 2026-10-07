import kaplay from "https://unpkg.com/kaplay@3001.0.19/dist/kaplay.mjs";
kaplay();
let LinearGravityGrowth = 0
loadBean();

function CollisionCheck(sp1,sp2) {
   let CollideResult = null
   let CollideType = null
   if (sp1.width || sp1.height || sp2.width || sp2.height) {
    let MinxCollidesp1 = sp1.pos.x
    let MaxxCollidesp1 = sp1.pos.x + sp1.width
    let MinxCollidesp2 = sp2.pos.x
    let MaxxCollidesp2 = sp2.pos.x + sp2.width
    if (MinxCollidesp1 <= MaxxCollidesp2 && MinxCollidesp2 <= MaxxCollidesp1) {
        CollideResult = true
        CollideType = true
        return CollideResult,CollideType
   } else {
    return CollideResult,CollideType
   }
   }
}

const player = add([
  sprite("bean"),
  pos(screen.width, screen.height / 2),
  area(),
]);


const FloorTile = add([
    rect(screen.width,100),
    pos(0,screen.height - 100),
    color(255,0,0),
    area(),
])

onUpdate(() => {
    CollisionCheck(player,FloorTile)
    setCamPos(player.pos)
})

//onUpdate(() => {
//  LinearGravityGrowth = LinearGravityGrowth - 1
//  player.pos.y = player.pos.y - LinearGravityGrowth
//})