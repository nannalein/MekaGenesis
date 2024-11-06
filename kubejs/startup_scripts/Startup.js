  //1.20.1 Fabric FLuid
  //In Startup script
  const $EventBuses = Java.loadClass('dev.architectury.platform.forge.EventBuses')
const $GasDeferredRegister = Java.loadClass('mekanism.common.registration.impl.GasDeferredRegister')
const $SlurryDeferredRegister = Java.loadClass('mekanism.common.registration.impl.SlurryDeferredRegister')
const $InfuseTypeDeferredRegister = Java.loadClass('mekanism.common.registration.impl.InfuseTypeDeferredRegister')

const GASES = new $GasDeferredRegister('kubejs')
const SLURRY = new $SlurryDeferredRegister('kubejs')
const INFUSETYPE = new $InfuseTypeDeferredRegister('kubejs')

GASES.register('gas_living_flesh', 0xe25960)
INFUSETYPE.register('infuse_living_flesh', 0xe25960)
INFUSETYPE.register('infuse_nutrient_paste', 0xadb169)
INFUSETYPE.register('infuse_potassium', 0xfdc2a4)
GASES.register('gas_nitrogen', 0x87d1fe)



GASES.register($EventBuses.getModEventBus('kubejs').get())
SLURRY['register(net.minecraftforge.eventbus.api.IEventBus)']($EventBuses.getModEventBus('kubejs').get())
INFUSETYPE.register($EventBuses.getModEventBus('kubejs').get())

  StartupEvents.registry('fluid', event => {
    
    
    // Basic "thick" (looks like lava) fluid with red tint
    event.create('fluid_living_flesh') // ('') contains the fluid id
        //sets the texture to thick
      .thickTexture(0xe25960) // () conatins the hex code, prefixed by 0x, of the color of the fluid
      .bucketColor(0xe25960) //  () conatins the hex code, prefixed by 0x, of the color of the fluid in the bucket, usually the same 
      .displayName('§dCrude Living Flesh') //in  game name of fluid
      .rarity("epic")


    })


StartupEvents.registry('item', event => {
  event.create("alloy_bone").texture("kubejs:item/alloy_bone").displayName("Bone Alloy")
  event.create("energy_cell").texture("kubejs:item/energy_cell").displayName("§eEnergy Cell")
  event.create("energy_cell_charged").texture("kubejs:item/energy_cell_charged").displayName("§eCharged Energy Cell")
  event.create("dust_saltpeter").texture("kubejs:item/dust_saltpeter").displayName("Saltpeter")
  event.create("dust_potassium").texture("kubejs:item/dust_potassium").displayName("Potassium")
  event.create("depleted_uranium").texture("kubejs:item/depleted_uranium").displayName("Depleted Uranium")
  event.create("kubejs:alloy_super").texture("kubejs:item/alloy_super").displayName("Super Alloy")
  event.create("kubejs:alloy_lead").texture("kubejs:item/alloy_lead").displayName("Lead Alloy")
  event.create("kubejs:crystal_seed_nether").texture("kubejs:item/crystal_seed_nether").displayName("Nether Quartz Seed")
  event.create("kubejs:crystal_seed_fluix").texture("kubejs:item/crystal_seed_fluix").displayName("Fluix Seed")
  event.create("kubejs:crystal_seed_certus").texture("kubejs:item/crystal_seed_certus").displayName("Certus Quartz Seed")
  event.create("kubejs:crystal_seed_nether2").texture("kubejs:item/crystal_seed_nether2").displayName("Nether Quartz Seed")
  event.create("kubejs:crystal_seed_fluix2").texture("kubejs:item/crystal_seed_fluix2").displayName("Fluix Seed")
  event.create("kubejs:crystal_seed_certus2").texture("kubejs:item/crystal_seed_certus2").displayName("Certus Quartz Seed")
  event.create("kubejs:crystal_seed_nether3").texture("kubejs:item/crystal_seed_nether3").displayName("Nether Quartz Seed")
  event.create("kubejs:crystal_seed_fluix3").texture("kubejs:item/crystal_seed_fluix3").displayName("Fluix Seed")
  event.create("kubejs:crystal_seed_certus3").texture("kubejs:item/crystal_seed_certus3").displayName("Certus Quartz Seed")
  event.create("kubejs:refined_obsidian_smithing_template").texture("kubejs:item/refined_obsidian_smithing_template").displayName("Refined Obsidian Smithing Template")
  event.create("kubejs:solenoid").texture("kubejs:item/solonoid").displayName("Solenoid")
  event.create('kubejs:refined_obsidian_boots', 'boots').tier('obsidian')
  event.create('kubejs:refined_obsidian_leggings', 'leggings').tier('obsidian')
  event.create('kubejs:refined_obsidian_chestplate', 'chestplate').tier('obsidian')
  event.create('kubejs:refined_obsidian_helmet', 'helmet').tier('obsidian')
})

ItemEvents.armorTierRegistry(event => {
  event.add('refined_obsidian', tier => {
    tier.durabilityMultiplier = 112 // Each slot will be multiplied with [13, 15, 16, 11]
    tier.slotProtections = [6, 12, 8, 4] // Slot indicies are [FEET, LEGS, BODY, HEAD]
    tier.enchantmentValue = 4
    tier.equipSound = 'minecraft:item.armor.equip_iron'
    tier.repairIngredient = "#forge:ingots/refined_obsidian"
    tier.toughness = 4.0 // diamond has 2.0, netherite 3.0
    tier.knockbackResistance = 0.1
  })
})


