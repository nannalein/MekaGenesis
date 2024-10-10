StartupEvents.registry("mob_effect", event =>{
    event.create("uber_high")
    .color(0xaef8f9)
    .beneficial()
    .effectTick(ctx => {
    ctx.modifyAttribute("minecraft:generic.movement_speed", "identifier", 1, "addition")
    ctx.modifyAttribute("minecraft:generic.attack_speed", "identifier", 0.75, "addition")
    })
  
  })
  

  StartupEvents.registry("mob_effect", event =>{
    event.create("high")
    .color(0xffffff)
    .beneficial()
    .effectTick(ctx => {
    ctx.modifyAttribute("minecraft:generic.movement_speed", "identifier", 0.5, "addition")
    ctx.modifyAttribute("minecraft:generic.attack_speed", "identifier", 0.25, "addition")
    })
  
  })

  
  ItemEvents.modification(event => {
    event.modify("createbb:blue_meth", item => {
      item.foodProperties = food => {
        food.fastToEat(true)
      }
    })
  })
  
    ItemEvents.modification(event => {
      event.modify("ae2:singularity", item => {
        item.foodProperties = food => {
          food.hunger(1000)
          food.saturation(1000)
        }
      })
    })

