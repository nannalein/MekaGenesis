ServerEvents.recipes(event => {
    event.remove({output: "bloodmagic:reagentbinding"})
    event.recipes.bloodmagic.alchemytable("bloodmagic:reagentbinding", ["#forge:dusts/steel", "minecraft:gold_nugget", "biomancy:living_flesh", "bloodmagic:sand_hellforged"]).syphon(250000).ticks(400).upgradeLevel(5)
    event.recipes.bloodmagic.soulforge("2x irons_spellbooks:arcane_essence", ["#bloodmagic:crystals/demon"], ["minecraft:lapis_lazuli"] ).minimumDrain(500.0).drain(40.0)
})