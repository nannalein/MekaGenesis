ServerEvents.recipes(event => {

    event.custom({
        "type": "mekanism:reaction",
        "duration": 100,
        "fluidInput": {
            "amount": 1000,
            "tag": "minecraft:water"
        },
        "gasInput": {
            "amount": 500,
            "gas": "mekanism:nuclear_waste"
        },
        "gasOutput": {
            "amount": 500,
            "gas": "mekanism:spent_nuclear_waste"
        },
        "itemInput": {
            "ingredient": {
                "tag": "forge:dusts/fluorite"
            }
        },
        "itemOutput": {
            "item": "kubejs:depleted_uranium"
        }
    });


        event.custom({"type":"mekanism:metallurgic_infusing",
        "chemicalInput":{"amount":10,"infuse_type":"mekanism:refined_obsidian"},
        "itemInput":{"ingredient":{"item":"kubejs:depleted_uranium"}},
        "output":{"item":"kubejs:alloy_super"}});

        event.custom({"type":"mekanism:metallurgic_infusing",
        "chemicalInput":{"amount":10,"infuse_type":"mekanism:tin"},
        "itemInput":{"ingredient":{"tag":"forge:ingots/lead"}},
        "output":{"item":"kubejs:alloy_lead"}});

        event.custom({
            "type": "mekanism:crushing",
            "input": {
                "ingredient": {
                    "tag": "forge:ingots/zinc"
                }
            },
            "output": {
                "item": "createbb:crushed_zinc"
            }
        });

        event.custom({
            "type": "mekanism:infusion_conversion",
            "input": {
                "ingredient": {
                    "item": "createbb:crushed_zinc"
                }
            },
            "output": {
                "amount": 10,
                "infuse_type": "kubejs:infuse_zinc"
            }
        });

        event.custom({"type":"mekanism:metallurgic_infusing",
            "chemicalInput":{"amount":10,"infuse_type":"kubejs:infuse_zinc"},
            "itemInput":{"ingredient":{"tag":"forge:ingots/copper"}},
            "output":{"count": 2,
                "item":"create:brass_ingot"}});
    
})