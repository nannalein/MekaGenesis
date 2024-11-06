ServerEvents.recipes(event => {

    event.shaped("2x kubejs:solenoid", [
        '  N',
        ' O ',
        'I  '
    ],{
        I: "#forge:ingots/iron",
        O: "#forge:ingots/osmium",
        N: "#forge:nuggets/iron"
    });

    event.remove({output:"mekanism:logistical_sorter"})
    event.shaped("mekanism:logistical_sorter", [
        'ISI',
        'ICI',
        'III'
    ],{
         I: "#forge:ingots/iron",
         S: "kubejs:solenoid",
         C: "#forge:circuits/basic"
    });

    event.shaped("minecraft:nether_star", [
        ' G ',
        'GSG',
        ' G '
    ],{
        G: "tombstone:grave_dust",
        S: "ae2:singularity"
    });

    event.remove({output:"mekanism:teleportation_core"});

    event.shaped("mekanism:teleportation_core", [
        'DAD',
        'GTG',
        'DAD'
    ], {
        T: "minecraft:diamond",
        G: "#forge:ingots/gold",
        D: "biomancy:exotic_dust",
        A: "mekanism:alloy_atomic"
    });

    event.remove({output:"mekanism:alloy_infused"});

    event.custom({"type":"mekanism:metallurgic_infusing",
    "chemicalInput":{"amount":10,"infuse_type":"mekanism:redstone"},
    "itemInput":{"ingredient":{"item":"kubejs:alloy_bone"}},
    "output":{"item":"mekanism:alloy_infused"}});

    //Making Diamond sharts craftable

    event.shaped("9x born_in_chaos_v1:diamond_termite_shard", ["minecraft:diamond"]);

    //Making the amnesia scroll craftable becauseeeeee I'm a lil' stinker

    //changing gunpowder recipie 

    event.remove({output: "minecraft:gunpowder", mod: "mekanism"});

    event.shapeless("4x minecraft:gunpowder",
     ["#forge:dusts/sulfur",
     "#forge:dusts/charcoal",
     "#forge:dusts/saltpeter",
       "#forge:dusts/saltpeter"]);
    
    event.custom({"type":"mekanism:injecting",
    "chemicalInput":{"amount":10,"gas":"kubejs:gas_nitrogen"},
    "itemInput":{"ingredient":{"item":"kubejs:dust_potassium"}},
    "output":{"item":"kubejs:dust_saltpeter"}});


    event.custom({
        "type": "mekanism:enriching",
        "input": {
            "ingredient": {
                "count": 4,
                "item": "mekanism:bio_fuel"
            }
        },
        "output": {
            "item": "bloodmagic:plantoil"
        }
    });

    event.custom({
        "type": "mekanism:enriching",
        "input": {
            "ingredient": {
                "count": 4,
                "tag": "forge:ash"
            }
        },
        "output": {
            "item": "kubejs:dust_potassium"
        }
    });


// Changing how tools are crafted

event.remove({output:"mekanism:configurator"})
event.custom({"type":"biomancy:bio_forging",
"bio_forge_tab":"biomancy:tools",
"ingredients":
[
{"count":18,"tag":"forge:nuggets/iron"},
{"count":3,"item":"kubejs:energy_cell"},
{"count":1,"item":"minecraft:lapis_lazuli"},
],  
"nutrientsCost":1,"result":{"count": 1, "item": "mekanism:configurator"}});


event.remove({output:"tempad:tempad"})
event.custom({"type":"biomancy:bio_forging",
"bio_forge_tab":"biomancy:tools",
"ingredients":
[
{"count":6,"tag":"forge:dusts/refined_obsidian"},
{"count":12,"tag":"forge:nuggets/refined_glowstone"},
{"count":3,"item":"mekanism:energy_tablet"},
{"count":1,"item":"mekanism:teleportation_core"}
],  
"nutrientsCost":1,"result":{"count": 1, "item": "tempad:tempad"}});


event.remove({output:"tempad:tempad"})
event.custom({"type":"biomancy:bio_forging",
"bio_forge_tab":"biomancy:tools",
"ingredients":
[
{"count":4,"tag":"mekanism:alloys/infused"},
{"count":2,"item":"mekanism:energy_tablet"},
{"count":6,"item":"minecraft:string"}
],  
"nutrientsCost":1,"result":{"count": 1, "item": "mekanism:electric_bow"}});


event.remove({output:"mekanism:dictionary"})
event.custom({"type":"biomancy:bio_forging",
"bio_forge_tab":"biomancy:tools",
"ingredients":
[
{"count":12,"tag":"forge:nuggets/iron"},
{"count":1,"item":"minecraft:book"},
{"count":1,"item":"mekanism:basic_control_circuit"},
{"count":6,"tag":"quark:shards"}
],  
"nutrientsCost":1,"result":{"count": 1, "item": "mekanism:dictionary"}});

// Replacing Bio Fuel with biotic matter

event.replaceOutput(
    {output:'mekanism:bio_fuel'},
    "mekanism:bio_fuel",
    "biomancy:organic_matter"
)



    event.custom({"type":"biomancy:bio_forging",
    "bio_forge_tab":"biomancy:components",
    "ingredients":
[

    {"count":8,"item":"biomancy:elastic_fibers"},
    {"count":2,"item":"biomancy:exotic_dust"},
    {"count":4,"item":"biomancy:gem_fragments"},
    {"count":5,"tag":"forge:nuggets/gold"}
    
],
    "nutrientsCost":1,"result":{"count": 6, "item": "kubejs:energy_cell"}});


    event.remove({output:"mekanism:energy_tablet"})
    event.custom({"type":"biomancy:bio_forging",
    "bio_forge_tab":"biomancy:components",
    "ingredients":
[
    {"count":3,"item":"kubejs:energy_cell"},
    {"count":2,"item":"mekanism:alloy_infused"},
    {"count":4,"item":"minecraft:redstone"}
],  
    "nutrientsCost":1,"result":{"count": 1, "item": "mekanism:energy_tablet"}});

    //Isolating the recipies for Factories

    event.remove({input:"mekanism:metallurgic_infuser"});
    event.remove({input:"mekanism:enrichment_chamber"});
    event.remove({input:"mekanism:energized_smelter"});
    event.remove({input:"mekanism:crusher"});
    event.remove({input:"mekanism:osmium_compressor"});
    event.remove({input:"mekanism:combiner"});
    event.remove({input:"mekanism:purification_chamber"});
    event.remove({input:"mekanism:chemical_injection_chamber"});
    event.remove({input:"mekanism:precision_sawmill"});
    event.remove({input:"mekanism:basic_infusing_factory"});
    event.remove({input:"mekanism:basic_enriching_factory"});
    event.remove({input:"mekanism:basic_smelting_factory"});
    event.remove({input:"mekanism:basic_crushing_factory"});
    event.remove({input:"mekanism:basic_compressing_factory"});
    event.remove({input:"mekanism:basic_combining_factory"});
    event.remove({input:"mekanism:basic_purifying_factory"});
    event.remove({input:"mekanism:basic_injecting_factory"});
    event.remove({input:"mekanism:advanced_sawing_factory"});
    event.remove({input:"mekanism:advanced_infusing_factory"});
    event.remove({input:"mekanism:advanced_enriching_factory"});
    event.remove({input:"mekanism:advanced_smelting_factory"});
    event.remove({input:"mekanism:advanced_crushing_factory"});
    event.remove({input:"mekanism:advanced_compressing_factory"});
    event.remove({input:"mekanism:advanced_combining_factory"});
    event.remove({input:"mekanism:advanced_purifying_factory"});
    event.remove({input:"mekanism:advanced_injecting_factory"});
    event.remove({input:"mekanism:advanced_sawing_factory"});
    event.remove({input:"mekanism:elite_infusing_factory"});
    event.remove({input:"mekanism:elite_enriching_factory"});
    event.remove({input:"mekanism:elite_smelting_factory"});
    event.remove({input:"mekanism:elite_sawing_factory"});
    event.remove({input:"mekanism:elite_crushing_factory"});
    event.remove({input:"mekanism:elite_compressing_factory"});
    event.remove({input:"mekanism:elite_combining_factory"});
    event.remove({input:"mekanism:elite_purifying_factory"});
    event.remove({input:"mekanism:elite_injecting_factory"});
    event.remove({output:"mekanism:basic_tier_installer"});
    event.remove({output:"mekanism:advanced_tier_installer"});
    event.remove({output:"mekanism:elite_tier_installer"});
    event.remove({output:"mekanism:ultimate_tier_installer"});


    event.custom({"type":"biomancy:bio_forging",
    "bio_forge_tab":"biomancy:components",
    "ingredients":
[

    {"count":4,"item":"mekanism:basic_control_circuit"},
    {"count":1,"item":"biomancy:living_flesh"},
    {"count":6,"tag":"forge:ingots/iron"},
    {"count":4,"item":"minecraft:redstone"}
    
],
    "nutrientsCost":100,"result":{"count": 1, "item": "mekanism:basic_tier_installer"}});


    event.custom({"type":"biomancy:bio_forging",
    "bio_forge_tab":"biomancy:components",
    "ingredients":
[

    {"count":4,"item":"mekanism:advanced_control_circuit"},
    {"count":3,"item":"biomancy:living_flesh"},
    {"count":6,"tag":"forge:ingots/osmium"},
    {"count":4,"item":"mekanism:alloy_infused"}
    
],
    "nutrientsCost":250,"result":{"count": 1, "item": "mekanism:advanced_tier_installer"}});


    event.custom({"type":"biomancy:bio_forging",
    "bio_forge_tab":"biomancy:components",
    "ingredients":
[

    {"count":4,"item":"mekanism:elite_control_circuit"},
    {"count":5,"item":"biomancy:living_flesh"},
    {"count":6,"tag":"forge:ingots/gold"},
    {"count":4,"item":"mekanism:alloy_reinforced"}
    
],
    "nutrientsCost":400,"result":{"count": 1, "item": "mekanism:elite_tier_installer"}});


    event.custom({"type":"biomancy:bio_forging",
    "bio_forge_tab":"biomancy:components",
    "ingredients":
[
    {"count":4,"item":"mekanism:elite_control_circuit"},
    {"count":12,"item":"biomancy:living_flesh"},
    {"count":10,"tag":"forge:gems/diamond"},
    {"count":8,"item":"mekanism:alloy_atomic"}
],
    "nutrientsCost":800,"result":{"count": 1, "item": "mekanism:ultimate_tier_installer"}});

event.remove({output:"mekanism:quantum_entangloporter"});
event.shaped("2x mekanism:quantum_entangloporter", [
    'RCR',
    'ATA',
    'RCR'
], {
    R: "mekanism:ingot_refined_obsidian",
    C: "mekanism:ultimate_control_circuit",
    A: "mekanism:alloy_atomic",
    T: "mekanism:teleportation_core"
});

event.shaped("2x mekanism:quantum_entangloporter", [
    'RCR',
    'ATA',
    'RCR'
], {
    R: "mekanism:ingot_refined_obsidian",
    C: "mekanism:ultimate_control_circuit",
    A: "mekanism:alloy_atomic",
    T: "ae2:singularity"
});

//making antimatter cheaper because yes
event.remove({output:"mekanism:pellet_antimatter"});
event.custom({"type":"mekanism:crystallizing",
"chemicalType":"gas","input":{"amount":1000,"gas":"mekanism:antimatter"},
"output":{"item":"mekanism:pellet_antimatter"}});


//more changes for stevman 
event.shapeless("irons_spellbooks:common_ink", [
    "minecraft:glass_bottle",
    "bloodmagic:plantoil",
    "supplementaries:ash",
    "irons_spellbooks:arcane_essence"
]);

event.shapeless("3x irons_spellbooks:arcane_essence", [
    "tombstone:grave_dust",
    "tombstone:grave_dust",
    "minecraft:lapis_lazuli"
]);

event.shapeless("1x irons_spellbooks:arcane_essence", [
    "minecraft:lapis_lazuli",
    "sons_of_sins:ether_ashes",
    "sons_of_sins:ether_ashes",
    "sons_of_sins:ether_ashes",
    "sons_of_sins:ether_ashes"
]);

event.remove({output: "tombstone:book_of_magic_impregnation"});
event.remove({output: "tombstone:book_of_scribe"});

event.shaped("minecraft:chest", [
    'PPP',
    'P P',
    'PPP'
],
{
    P:"#forge:planks"
})


event.custom({"type":"biomancy:bio_forging",
"bio_forge_tab":"biomancy:components",
"ingredients":
[

{"count":2,"item":"biomancy:tough_fibers"},
{"count":1,"item":"biomancy:mineral_fragment"},

],
"nutrientsCost":1,"result":{"count": 1, "item": "minecraft:feather"}});

//removing busted BS
event.remove({output:"artifacts:eternal_steak"});
event.remove({output:"mekanism:module_energy_unit"});
event.remove({output:"mekanism:qio_drive_base"});
event.remove({output:"mekanism:flamethrower" })
event.remove({output:"mekanism:qio_drive_hyper_dense"});
event.remove({output:"mekanism:qio_drive_time_dilating"});
event.remove({output:"mekanism:qio_drive_supermassive"});
event.remove({output:"mekanism:qio_drive_array"});
event.remove({output:"mekanism:qio_dashboard"});
event.remove({output:"mekanism:qio_importer"});
event.remove({output:"mekanism:qio_exporter"});
event.remove({output:"mekanism:qio_redstone_adapter"});
event.remove({output:"mekanism:portable_qio_dashboard"});
event.remove({output:"mekanism:module_inhalation_purification_unit"});
event.remove({output:"k_turrets:arrow_drone_item"});
event.remove({output:"k_turrets:brick_drone_item"});
event.remove({output:"k_turrets:gauss_drone_item"});
event.remove({output:"k_turrets:bullet_drone_item"});
event.remove({output:"k_turrets:cobble_drone_item"});
event.remove({output:"k_turrets:firecharge_drone_item"});
event.remove({output: "mekanism:dirty_netherite_scrap", mod: "bfr"});
event.remove({output: "k_turrets:titanium_ingot"}); 

//making sps cheaper

event.remove({output:"mekanism:sps_casing"})
event.shaped("2x mekanism:sps_casing", [
  'ANA',
  'NUN',
  'ANA'
], {
  A: "mekanism:hdpe_sheet",
  N: "mekanism:pellet_polonium",
  U: "mekanism:pellet_plutonium"
});

//Combiner recipes 

event.custom({
    "type": "mekanism:combining",
    "extraInput": {
        "amount": 6,
        "ingredient": {
            "item": "irons_spellbooks:arcane_essence"
        }
    },
    "mainInput": {
        "ingredient": {
            "tag": "minecraft:wool"
        }
    },
    "output": {
        "item": "irons_spellbooks:magic_cloth"
    }
});

event.custom({
    "type": "mekanism:combining",
    "extraInput": {
        "ingredient": {
            "item": "sons_of_sins:ether_ashes"
        }
    },
    "mainInput": {
        "amount": 2,
        "ingredient": {
            "tag": "forge:ingots/iron"
        }
    },
    "output": {
        "item": "2x asons_of_sins:iron_and_ether"
    }
});

//Fixing the ender pearl issue

event.replaceInput(
    { input: "minecraft:ender_pearl" }, // Arg 1: the filter
    "minecraft:ender_pearl",            // Arg 2: the item to replace
    "#forge:ender_pearls"         // Arg 3: the item to replace it with
    // Note: tagged fluid ingredients do not work on Fabric, but tagged items do.
  )

//Making Induction Providers not stupid

  event.remove({output:"mekanism:advanced_induction_provider"});
  event.remove({output:"mekanism:elite_induction_provider"});
  event.remove({output:"mekanism:ultimate_induction_provider"});

  event.shaped("mekanism:advanced_induction_provider", [
	'LCL',
	'CIC',
	'LCL'
  ], {
	L: "mekanism:dust_lithium",
	C: "mekanism:advanced_control_circuit",
	I: "mekanism:basic_induction_provider"
  });
  event.shaped("mekanism:elite_induction_provider", [
	'LCL',
	'CIC',
	'LCL'
  ], {
	L: "mekanism:dust_lithium",
	C: "mekanism:elite_control_circuit",
	I: "mekanism:advanced_induction_provider"
  });

  event.shaped("mekanism:ultimate_induction_provider", [
	'LCL',
	'CIC',
	'LCL'
  ], {
	L: "mekanism:dust_lithium",
	C: "mekanism:ultimate_control_circuit",
	I: "mekanism:elite_induction_provider"
  });

//Changing how mekanism starts

event.custom({"type":"biomancy:bio_forging",
    "bio_forge_tab":"biomancy:components",
    "ingredients":
    [
    {"count":16,"tag":"forge:nuggets/iron"},
    {"count":6,"item":"biomancy:bone_fragments"}

    ],
    "nutrientsCost":1,"result":{"count": 3, "item": "kubejs:alloy_bone"}});

//Changing Backpack

event.remove({output:"simplybackpacks:uncommonbackpack"})
event.remove({output:"simplybackpacks:rarebackpack"})
event.shaped("simplybackpacks:uncommonbackpack",[
    'GGG',
    'GBG',
    'GGG'
], {
    G:"#forge:ingots/gold",
    B:"simplybackpacks:commonbackpack"
})

event.remove({output:"simplybackpacks:commonbackpack"})
event.shaped("simplybackpacks:commonbackpack",[
    'S S',
    'WLW',
    'LCL'
], {
    W:"#minecraft:wool",
    S: "#forge:string",
    C: "#forge:chests",
    L:"#forge:leather"
})

event.shaped("simplybackpacks:rarebackpack",[
    'GGG',
    'GBG',
    'GGG'
], {
    G:"minecraft:diamond",
    B:"simplybackpacks:uncommonbackpack"
})

//Sadle

event.shaped("minecraft:saddle",[
    'LS ',
    'LLL',
    'LNL'
], {
    L: "minecraft:leather",
    S: "minecraft:string",
    N: "#forge:nuggets/iron"
})

//removing compressing recipes

  event.remove({output: "ad_astra:compressor"})
  event.remove({type: "ad_astra:compressing"})

//Making Ender Crop and Ender Tendrils craftable

event.custom({
    "type": "biomancy:bio_brewing",
    "ingredients": [
        {
            "tag": "forge:ender_pearls"
        },
        {
            "item": "minecraft:twisting_vines"
        }
    ],
    "nutrientsCost": 2,
    "processingTime": 120,
    "reactant": {
        "tag": "forge:seeds"
    },
    "result": {
        "item": "endertendril:ender_tendril_seed"
    }
});

event.custom({
    "type": "biomancy:bio_brewing",
    "ingredients": [
        {
            "tag": "biomancy:bile"
        },
        {
            "item": "biomancy:exotic_compound"
        }
    ],
    "nutrientsCost": 2,
    "processingTime": 120,
    "reactant": {
        "item": "mekanism:teleportation_core"
    },
    "result": {
        "item": "minecraft:ender_pearl"
    }
});



//Changing the early game

    event.remove({output: "mekanism:crusher"})
    event.shaped("mekanism:crusher", [
        'RSR',
        'BCB',
        'RSR'
    ],{
        R: "mekanism:alloy_infused",
        C: "mekanism:steel_casing",
        S: "kubejs:solenoid",
        B: "mekanism:basic_control_circuit"
    });

    event.remove({output: "biomancy:primordial_core"})
    event.shaped("biomancy:primordial_core", [
        'MMM',
        'MPM',
        'MMM'
    ],{
        P: "#forge:ender_pearls",
        M: "#biomancy:raw_meats"
    });

    event.shaped("mekanism:pressurized_reaction_chamber", [
        'SAS',
        'CEC',
        'TDT'
    ],{
        E: "mekanism:enrichment_chamber",
        C: "mekanism:basic_control_circuit",
        S: "#forge:ingots/steel",
        A: "mekanism:alloy_infused",
        T: "mekanism:basic_chemical_tank",
        D: "mekanism:dynamic_tank"
    });

    event.remove({output: "mekanism:energized_smelter"})
    event.shaped("mekanism:energized_smelter", [
        'RBR',
        'GCG',
        'RBR'
    ],{
        R: "mekanism:alloy_infused",
        C: "mekanism:steel_casing",
        G: "#forge:glass/silica",
        B: "mekanism:basic_control_circuit"
    });

    event.remove({output: "mekanismgenerators:bio_generator"})
    event.shaped("mekanism:crusher", [
        'RIR',
        'BFB',
        'III'
    ],{
        F: "minecraft:furnace",
        R: "minecraft:redstone",
        B: "#forge:fuels/bio",
        I: "#forge:ingots/iron"
    });

//Antiprotonic Nucleosynthisiser Recepes

    event.custom({"type":"mekanism:nucleosynthesizing",
        "duration":800,
        "gasInput":{"amount":2,"gas":"mekanism:antimatter"},
        "itemInput":{"ingredient":{"item":"minecraft:lapis_lazuli"}},
        "output":{"item":"irons_spellbooks:arcane_debris"}});

    event.custom({"type":"mekanism:nucleosynthesizing",
        "duration":5000,"gasInput":{"amount":10,"gas":"mekanism:antimatter"},
        "itemInput":{"ingredient":{"item":"minecraft:ancient_debris"}},
        "output":{"item":"irons_spellbooks:arcane_debris"}});

    event.custom({"type":"mekanism:nucleosynthesizing",
        "duration":500,"gasInput":{"amount":5,"gas":"mekanism:antimatter"},
        "itemInput":{"ingredient":{"item": "biomancy:flesh_bits"}},
        "output":{"item": "biomancy:living_flesh"}});

    event.custom({"type":"mekanism:nucleosynthesizing",
        "duration":400,"gasInput":{"amount":1,"gas":"minecraft:cobblestone"},
        "itemInput":{"ingredient":{"item": "biomancy:flesh_bits"}},
        "output":{"item": "minecraft:end_stone"}});

    event.custom({"type":"mekanism:nucleosynthesizing",
        "duration":300,"gasInput":{"amount":1,"gas":"mekanism:antimatter"},
        "itemInput":{"ingredient":{"item": "minecraft:sponge"}},
        "output":{"item": "ad_astra:cheese"}});

    event.custom({"type":"mekanism:nucleosynthesizing",
        "duration":300,"gasInput":{"amount":1,"gas": "mekanism:antimatter"},
        "itemInput":{"ingredient":{"item": "minecraft:sponge"}},
        "output":{"item": "ad_astra:cheese"}});


})

