StartupEvents.registry("mob_effect", event =>{
    event.create("uber_high")
    .color(0xaef8f9)
    .beneficial()
    .effectTick(ctx => {
    ctx.modifyAttribute("minecraft:generic.movement_speed", "003458c6-eb68-4329-8051-68caf6361e60", 0.06, "addition")
    ctx.modifyAttribute("minecraft:generic.attack_speed", "bacda10a-7d5c-4031-ade5-e884762cad50", 0.2, "addition")
    })
  
  })
  

  StartupEvents.registry("mob_effect", event =>{
    event.create("high")
    .color(0xffffff)
    .beneficial()
    .effectTick(ctx => {
    ctx.modifyAttribute("minecraft:generic.movement_speed", "11149c1a-3454-4edd-9e90-95262e5a4b27", 0.04, "addition")
    ctx.modifyAttribute("minecraft:generic.attack_speed", "e9d673dd-3557-40c0-b1f3-bfdcb09286d1", 0.1, "addition")
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

