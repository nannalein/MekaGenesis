ServerEvents.recipes(event => {

    event.shapeless("ae2:fluix_covered_cable", [
        "#forge:ingots/plastic",
        "ae2:fluix_glass_cable",
    ]);

    event.remove({input: "minecraft:glowstone", output: "ae2:fluix_smart_cable"})
    event.shaped("8x ae2:fluix_smart_cable", [
        'CCC',
        'CBC',
        'CCC'
    ],{
        C: "ae2:fluix_covered_cable",
        B: "mekanism:basic_control_circuit"
    });

    event.remove({input: "minecraft:glowstone", output: "ae2:fluix_smart_dense_cable"})
    event.shaped("8x ae2:fluix_smart_dense_cable", [
        'CCC',
        'CBC',
        'CCC'
    ],{
        C: "ae2:fluix_covered_dense_cable",
        B: "mekanism:basic_control_circuit"
    });

    event.remove({output: "ae2:inscriber"})
    event.shaped("ae2:inscriber", [
        'CSC',
        'C  ',
        'CSC'
    ],{
        C: "#forge:ingots/iron",
        S: "kubejs:solenoid"
    });

    event.remove({output: "ae2:import_bus"})
    event.shaped("ae2:import_bus", [
        'ICI',
        ' S ',
        '   '
    ],{
        I: "#forge:ingots/iron",
        C: "ae2:annihilation_core",
        S: "kubejs:solenoid"
    });

    event.remove({output: "ae2:export_bus"})
    event.shaped("ae2:export_bus", [
        'ICI',
        ' S ',
        '   '
    ],{
        I: "#forge:ingots/iron",
        C: "ae2:formation_core",
        S: "kubejs:solenoid"
    });

    event.remove({output: "ae2:storage_bus"})
    event.shaped("ae2:storage_bus", [
        'FCF',
        '   ',
        '   '
    ],{
        F: "kubejs:solenoid",
        C: "#ae2:interface"
    });


})