ServerEvents.recipes(event => {

event.shapeless("2x kubejs:crystal_seed_nether", [
    "#forge:dusts/quartz",
    "#forge:sand"
]);

event.shapeless("2x kubejs:crystal_seed_certus", [
    "#forge:dusts/certus_quartz",
    "#forge:sand"
]);

event.shapeless("2x kubejs:crystal_seed_fluix", [
    "#forge:dusts/fluix",
    "#forge:sand"
]);

event.custom({
    "type": "mekanism:reaction",
    "duration": 50,
    "fluidInput": {
        "amount": 500,
        "tag": "minecraft:water"
    },
    "gasInput": {
        "amount": 100,
        "gas": "mekanism:water_vapor"
    },
    "gasOutput": {
        "amount": 10,
        "gas": "mekanism:steam"
    },
    "itemInput": {
        "ingredient": {
            "item": "kubejs:crystal_seed_nether"
        }
    },
    "itemOutput": {
        "item": "kubejs:crystal_seed_nether2"
    }
});

event.custom({
    "type": "mekanism:reaction",
    "duration": 50,
    "fluidInput": {
        "amount": 500,
        "tag": "minecraft:water"
    },
    "gasInput": {
        "amount": 100,
        "gas": "mekanism:water_vapor"
    },
    "gasOutput": {
        "amount": 10,
        "gas": "mekanism:steam"
    },
    "itemInput": {
        "ingredient": {
            "item": "kubejs:crystal_seed_nether2"
        }
    },
    "itemOutput": {
        "item": "kubejs:crystal_seed_nether3"
    }
});

event.custom({
    "type": "mekanism:reaction",
    "duration": 50,
    "fluidInput": {
        "amount": 500,
        "tag": "minecraft:water"
    },
    "gasInput": {
        "amount": 100,
        "gas": "mekanism:water_vapor"
    },
    "gasOutput": {
        "amount": 10,
        "gas": "mekanism:steam"
    },
    "itemInput": {
        "ingredient": {
            "item": "kubejs:crystal_seed_nether3"
        }
    },
    "itemOutput": {
        "item": "minecraft:quartz"
    }
});

event.custom({
    "type": "mekanism:reaction",
    "duration": 50,
    "fluidInput": {
        "amount": 500,
        "tag": "minecraft:water"
    },
    "gasInput": {
        "amount": 100,
        "gas": "mekanism:water_vapor"
    },
    "gasOutput": {
        "amount": 10,
        "gas": "mekanism:steam"
    },
    "itemInput": {
        "ingredient": {
            "item": "kubejs:crystal_seed_certus"
        }
    },
    "itemOutput": {
        "item": "kubejs:crystal_seed_certus2"
    }
});

event.custom({
    "type": "mekanism:reaction",
    "duration": 50,
    "fluidInput": {
        "amount": 500,
        "tag": "minecraft:water"
    },
    "gasInput": {
        "amount": 100,
        "gas": "mekanism:water_vapor"
    },
    "gasOutput": {
        "amount": 10,
        "gas": "mekanism:steam"
    },
    "itemInput": {
        "ingredient": {
            "item": "kubejs:crystal_seed_certus2"
        }
    },
    "itemOutput": {
        "item": "kubejs:crystal_seed_certus3"
    }
});

event.custom({
    "type": "mekanism:reaction",
    "duration": 50,
    "fluidInput": {
        "amount": 500,
        "tag": "minecraft:water"
    },
    "gasInput": {
        "amount": 100,
        "gas": "mekanism:water_vapor"
    },
    "gasOutput": {
        "amount": 10,
        "gas": "mekanism:steam"
    },
    "itemInput": {
        "ingredient": {
            "item": "kubejs:crystal_seed_certus3"
        }
    },
    "itemOutput": {
        "item": "ae2:certus_quartz_crystal"
    }
});

event.custom({
    "type": "mekanism:reaction",
    "duration": 50,
    "fluidInput": {
        "amount": 500,
        "tag": "minecraft:water"
    },
    "gasInput": {
        "amount": 100,
        "gas": "mekanism:water_vapor"
    },
    "gasOutput": {
        "amount": 10,
        "gas": "mekanism:steam"
    },
    "itemInput": {
        "ingredient": {
            "item": "kubejs:crystal_seed_fluix"
        }
    },
    "itemOutput": {
        "item": "kubejs:crystal_seed_fluix2"
    }
});

event.custom({
    "type": "mekanism:reaction",
    "duration": 50,
    "fluidInput": {
        "amount": 500,
        "tag": "minecraft:water"
    },
    "gasInput": {
        "amount": 100,
        "gas": "mekanism:water_vapor"
    },
    "gasOutput": {
        "amount": 10,
        "gas": "mekanism:steam"
    },
    "itemInput": {
        "ingredient": {
            "item": "kubejs:crystal_seed_fluix2"
        }
    },
    "itemOutput": {
        "item": "kubejs:crystal_seed_fluix3"
    }
});

event.custom({
    "type": "mekanism:reaction",
    "duration": 50,
    "fluidInput": {
        "amount": 500,
        "tag": "minecraft:water"
    },
    "gasInput": {
        "amount": 100,
        "gas": "mekanism:water_vapor"
    },
    "gasOutput": {
        "amount": 10,
        "gas": "mekanism:steam"
    },
    "itemInput": {
        "ingredient": {
            "item": "kubejs:crystal_seed_fluix3"
        }
    },
    "itemOutput": {
        "item": "ae2:fluix_crystal"
    }
});

})