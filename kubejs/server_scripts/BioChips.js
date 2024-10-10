ServerEvents.recipes(event => {

    event.custom({"type":"mekanism:oxidizing",
    "input":{"ingredient":{ "item": "biomancy:living_flesh"}},
    "output":{"amount":100,"gas":"kubejs:gas_living_flesh"}
});

    event.custom({"type":"mekanism:rotary",
    "fluidInput":{"amount":1,"fluid":"kubejs:fluid_living_flesh"},
    "fluidOutput":{"amount":1,"fluid":"kubejs:fluid_living_flesh"},
    "gasInput":{"amount":1,"gas":"kubejs:gas_living_flesh"},
    "gasOutput":{"amount":1,"gas":"kubejs:gas_living_flesh"}
    });

    event.custom({"type":"mekanism:infusion_conversion",
    "input":{"ingredient":{"item":"biomancy:living_flesh"}},
    "output":{"amount":100,"infuse_type":"kubejs:infuse_living_flesh"}});

    event.custom({"type":"mekanism:crystallizing",
    "chemicalType":"gas","input":{"amount":100,"gas":"kubejs:gas_living_flesh"},
    "output":{"item":"biomancy:living_flesh"}});

    event.remove({output:"mekanism:basic_control_circuit"})

    event.custom({"type":"mekanism:metallurgic_infusing",
    "chemicalInput":{"amount":10,"infuse_type":"kubejs:infuse_living_flesh"},
    "itemInput":{"ingredient":{"item":"mekanism:ingot_osmium"}},
    "output":{"item":"mekanism:basic_control_circuit"}});

    event.custom({"type":"mekanism:metallurgic_infusing",
    "chemicalInput":{"amount":750,"infuse_type":"kubejs:infuse_nutrient_paste"},
    "itemInput":{"ingredient":{"item":"biomancy:living_flesh"}},
    "output":{"item":"biomancy:living_flesh", "count": 2}});

    event.custom({
        "type": "mekanism:infusion_conversion",
        "input": {
            "ingredient": {
                "item": "biomancy:nutrient_paste"
            }
        },
        "output": {
            "amount": 5,
            "infuse_type": "kubejs:infuse_nutrient_paste"
        }
    });

    event.custom({
        "type": "mekanism:infusion_conversion",
        "input": {
            "ingredient": {
                "item": "biomancy:nutrient_bar"
            }
        },
        "output": {
            "amount": 45,
            "infuse_type": "kubejs:infuse_nutrient_paste"
        }
    });

    event.remove({output:"mekanism:advanced_control_circuit"});
    event.remove({output:"mekanism:elite_control_circuit"});
    event.remove({output:"mekanism:ultimate_control_circuit"});

    event.shaped("mekanism:advanced_control_circuit", [
        'NNN',
        'ACA',
        'NNN'
    ], {    
        N: "biomancy:nutrient_paste",
        A: "mekanism:alloy_infused",
        C: "mekanism:basic_control_circuit"
    });

    event.shaped("mekanism:elite_control_circuit", [
        'NNN',
        'ACA',
        'NNN'
    ], {    
        N: "biomancy:nutrient_paste",
        A: "mekanism:alloy_reinforced",
        C: "mekanism:advanced_control_circuit"
    });

    event.shaped("mekanism:ultimate_control_circuit", [
        'NNN',
        'ACA',
        'NNN'
    ], {    
        N: "biomancy:nutrient_paste",
        A: "mekanism:alloy_atomic",
        C: "mekanism:elite_control_circuit"
    });

})