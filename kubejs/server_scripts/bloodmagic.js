ServerEvents.recipes(event => {
    event.remove({output: "bloodmagic:reagentbinding"})
    event.recipes.bloodmagic.alchemytable("bloodmagic:reagentbinding", ["#forge:dusts/steel", "minecraft:gold_nugget", "biomancy:living_flesh", "bloodmagic:sand_hellforged"]).syphon(500000).ticks(400).upgradeLevel(5)
})