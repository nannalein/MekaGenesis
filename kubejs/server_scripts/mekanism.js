

ServerEvents.recipes(event => {
    event.remove({input: "#forge:ingots/steel", mod: "mekanismtools", not: {output: "mekanismtools:steel_shield"}})
})