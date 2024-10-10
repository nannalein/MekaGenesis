ServerEvents.recipes(event => {

event.shaped(
    Item.of("kubejs:refined_obsidian_smithing_template", 1), // arg 1: output
    [
        'OOO',
        'OSO', // arg 2: the shape (array of strings)
        'ONO'
    ],
    {
        O: "mekanism:ingot_refined_obsidian",
        S: "ae2:singularity",  //arg 3: the mapping object
        N: "minecraft:netherite_upgrade_smithing_template"
    }
    )

  event.remove({output: "mekanismtools:refined_obsidian_axe"});
  event.smithing(
      "mekanismtools:refined_obsidian_axe",                     // arg 1: output
      "kubejs:refined_obsidian_smithing_template", // arg 2: the smithing template
      "minecraft:netherite_axe",                          // arg 3: the item to be upgraded
      "mekanism:ingot_refined_obsidian"                           // arg 4: the upgrade item
    );

  event.remove({output: "mekanismtools:refined_obsidian_boots"});
  event.smithing(
    "mekanismtools:refined_obsidian_boots",
    "kubejs:refined_obsidian_smithing_template",
    "minecraft:netherite_boots",
    "mekanism:ingot_refined_obsidian"
  );

  event.remove({output: "mekanismtools:refined_obsidian_chestplate"});
  event.smithing(
    "mekanismtools:refined_obsidian_chestplate",
    "kubejs:refined_obsidian_smithing_template",
    "minecraft:netherite_chestplate",
    "mekanism:ingot_refined_obsidian"
  );

  event.remove({output: "mekanismtools:refined_obsidian_helmet"});
  event.smithing(
    "mekanismtools:refined_obsidian_helmet",
    "kubejs:refined_obsidian_smithing_template",
    "minecraft:netherite_helmet",
    "mekanism:ingot_refined_obsidian"
  );

  event.remove({output: "mekanismtools:refined_obsidian_leggings"});
  event.smithing(
    "mekanismtools:refined_obsidian_leggings",
    "kubejs:refined_obsidian_smithing_template",
    "minecraft:netherite_leggings",
    "mekanism:ingot_refined_obsidian"
  );

  event.remove({output: "mekanismtools:refined_obsidian_hoe"});
  event.smithing(
    "mekanismtools:refined_obsidian_hoe",
    "kubejs:refined_obsidian_smithing_template",
    "minecraft:netherite_hoe",
    "mekanism:ingot_refined_obsidian"
  );

  event.remove({output: "mekanismtools:refined_obsidian_paxel"});
  event.smithing(
    "mekanismtools:refined_obsidian_paxel",
    "kubejs:refined_obsidian_smithing_template",
    "mekanismtools:netherite_paxel",
    "mekanism:ingot_refined_obsidian"
  );

  event.remove({output: "mekanismtools:refined_obsidian_pickaxe"});
  event.smithing(
    "mekanismtools:refined_obsidian_pickaxe",
    "kubejs:refined_obsidian_smithing_template",
    "minecraft:netherite_pickaxe",
    "mekanism:ingot_refined_obsidian"
  );

  event.remove({output: "mekanismtools:refined_obsidian_shield"});

  event.remove({output: "mekanismtools:refined_obsidian_shovel"});
  event.smithing(
    "mekanismtools:refined_obsidian_shovel",
    "kubejs:refined_obsidian_smithing_template",
    "minecraft:netherite_shovel",
    "mekanism:ingot_refined_obsidian"
  );

  event.remove({output: "mekanismtools:refined_obsidian_sword"});
  event.smithing(
    "mekanismtools:refined_obsidian_sword",
    "kubejs:refined_obsidian_smithing_template",
    "minecraft:netherite_sword",
    "mekanism:ingot_refined_obsidian"
  );

})