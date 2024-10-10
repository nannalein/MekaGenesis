ServerEvents.tags('item', event => {
    event.add("forge:fuels/bio", "biomancy:organic_matter")
    event.add("forge:ingots/plastic", "mekanism:hdpe_sheet")
    event.add("forge:dusts/saltpeter", "kubejs:dust_saltpeter")
    event.add("sons_of_sins:is_osseous", "born_in_chaos_v1:nightmare_scythe")
    event.add("sons_of_sins:is_osseous", "mcdw:scythe_skull_scythe")
    event.add("sons_of_sins:is_osseous", "mcdw:hammer_bone_cudgel")
    event.add("sons_of_sins:is_osseous", "mcdw:hammer_boneclub")
    event.add("forge:swords", "mcdw:scythe_skull_scythe")
    event.add("forge:ingots/steel", "stabxmodernguns:gun_steel_ingot")
    event.add("forge:dusts/sulfur", "tfmg:sulfur_dust")
    event.add("forge:ingots/titanium", "k_turrets:titanium_ingot")
    event.add("forge:raw_materials/titanium", "k_turrets:raw_titanium")
    event.add("forge:ores/titanium", "k_turrets:titanium_ore")
    event.add("forge:dusts/sulfur", "stabxmodernguns:sulphur")
})  

ServerEvents.tags('fluid', event => {

})

ServerEvents.tags('block', event => {
    event.add("mekanism:miner_blacklist", "minecraft:ancient_debris")
    event.add("mekanism:miner_blacklist", "irons_spellbooks:arcane_debris")
})