ServerEvents.tags('item', event => {
    event.add("forge:fuels/bio", "biomancy:organic_matter")
    event.add("forge:salt", "meadow:alpine_salt")
    event.add("forge:wires/copper", "create_new_age:copper_wire")
    event.add("forge:wires/iron", "create_new_age:overcharged_iron_wire")
    event.add("forge:wires/gold", "create_new_age:overcharged_golden_wire")
    event.add("forge:wires/diamond", "create_new_age:overcharged_diamond_wire")
    event.add("forge:ingots/plastic", "mekanism:hdpe_sheet")
    event.add("forge:ingots/plastic", "alexscaves:polymer_plate")
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
    event.add("forge:holds_items", "ae2:portable_fluid_cell_1k")
    event.add("forge:holds_items", "appmek:portable_chemical_storage_cell_1k")
    event.add("forge:holds_items", "ae2:portable_item_cell_1k")
    event.add("forge:holds_items", "ae2:portable_fluid_cell_4k")
    event.add("forge:holds_items", "appmek:portable_chemical_storage_cell_4k")
    event.add("forge:holds_items", "ae2:portable_item_cell_4k")
    event.add("forge:holds_items", "ae2:portable_fluid_cell_16k")
    event.add("forge:holds_items", "appmek:portable_chemical_storage_cell_16k")
    event.add("forge:holds_items", "ae2:portable_item_cell_16k")
    event.add("forge:holds_items", "ae2:portable_fluid_cell_64k")
    event.add("forge:holds_items", "appmek:portable_chemical_storage_cell_64k")
    event.add("forge:holds_items", "ae2:portable_item_cell_64")
    event.add("forge:holds_items", "ae2:portable_fluid_cell_256k")
    event.add("forge:holds_items", "appmek:portable_chemical_storage_cell_256k")
    event.add("forge:holds_items", "ae2:portable_item_cell_256k")
    event.add("forge:holds_items", "simplybackpacks:commonbackpack")
    event.add("forge:holds_items", "simplybackpacks:uncommonbackpack")
    event.add("forge:holds_items", "simplybackpacks:rarebackpack")
    event.add("forge:holds_items", "simplybackpacks:epicbackpack")
    event.add("forge:holds_items", "simplybackpacks:ultimatebackpack")
    event.add("forge:holds_items", "create:red_toolbox")
    event.add("forge:holds_items", "create:blue_toolbox")
    event.add("forge:holds_items", "create:cyan_toolbox")
    event.add("forge:holds_items", "create:lime_toolbox")
    event.add("forge:holds_items", "create:gray_toolbox")
    event.add("forge:holds_items", "create:pink_toolbox")
    event.add("forge:holds_items", "create:black_toolbox")
    event.add("forge:holds_items", "create:green_toolbox")
    event.add("forge:holds_items", "create:brown_toolbox")
    event.add("forge:holds_items", "create:white_toolbox")
    event.add("forge:holds_items", "create:orange_toolbox")
    event.add("forge:holds_items", "create:purple_toolbox")
    event.add("tombstone:enchanted_grave_key_ingredients", "biomancy:exotic_dust")
    event.add("tombstone:enchanted_grave_key_ingredients", "tombstone:grave_dust")
    event.add("tombstone:enchanted_grave_key_ingredients", "irons_spellbooks:arcane_essence")
    event.add("tombstone:enchanted_grave_key_ingredients", "sons_of_sins:ether_ashes")
    event.add("tombstone:enchanted_grave_key_ingredients", "sons_of_sins:ether_ashes")
    event.remove("forge:bones/wither", "architects_palette:withered_bone")

})  

ServerEvents.tags('fluid', event => {
    event.add("forge:oil", "tfmg:crude_oil")
    event.add("forge:oil", "ad_astra:oil")
})

ServerEvents.tags('block', event => {
    event.add("mekanism:miner_blacklist", "minecraft:ancient_debris")
    event.add("mekanism:miner_blacklist", "irons_spellbooks:arcane_debris")
})