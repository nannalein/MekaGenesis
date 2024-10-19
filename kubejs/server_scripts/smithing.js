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

  event.remove({output: "kubejs:refined_obsidian_boots"});
  event.smithing(
    "kubejs:refined_obsidian_boots",
    "kubejs:refined_obsidian_smithing_template",
    "minecraft:netherite_boots",
    "mekanism:ingot_refined_obsidian"
  );

  event.remove({output: "kubejs:refined_obsidian_chestplate"});
  event.smithing(
    "kubejs:refined_obsidian_chestplate",
    "kubejs:refined_obsidian_smithing_template",
    "minecraft:netherite_chestplate",
    "mekanism:ingot_refined_obsidian"
  );

  event.remove({output: "kubejs:refined_obsidian_helmet"});
  event.smithing(
    "kubejs:refined_obsidian_helmet",
    "kubejs:refined_obsidian_smithing_template",
    "minecraft:netherite_helmet",
    "mekanism:ingot_refined_obsidian"
  );

  event.remove({output: "kubejs:refined_obsidian_leggings"});
  event.smithing(
    "kubejs:refined_obsidian_leggings",
    "kubejs:refined_obsidian_smithing_template",
    "minecraft:netherite_leggings",
    "mekanism:ingot_refined_obsidian"
  );
})