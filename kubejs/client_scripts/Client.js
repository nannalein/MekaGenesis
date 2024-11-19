// priority: 0

console.info('Hello, World! (You will see this line every time client resources reload)')

REIEvents.hide('item', event => {
	// Hide items in REI here
	event.hide("mekanism:module_energy_unit")
	event.hide("mekanism:qio_drive_base")
	event.hide("mekanism:qio_drive_hyper_dense")
	event.hide("mekanism:qio_drive_time_dilating")
	event.hide("mekanism:qio_drive_supermassive")
	event.hide("mekanism:qio_drive_array")
	event.hide("mekanism:qio_dashboard")
	event.hide("mekanism:qio_importer")
	event.hide("mekanism:qio_exporter")
	event.hide("mekanism:flamethrower")
	event.hide("mekanism:qio_redstone_adapter")
	event.hide("mekanism:portable_qio_dashboard")
	event.hide("k_turrets:arrow_drone_item");
	event.hide("k_turrets:brick_drone_item");
	event.hide("k_turrets:gauss_drone_item");
	event.hide("k_turrets:bullet_drone_item");
	event.hide("k_turrets:cobble_drone_item");
	event.hide("k_turrets:firecharge_drone_item");
	event.hide("refinedstorage:raw_basic_processor");
	event.hide("refinedstorage:raw_improved_processor");
	event.hide("refinedstorage:raw_advanced_processor");
	event.hide("refinedstorage:processor_binding");
	event.hide("mekanism:module_inhalation_purification_unit");
	event.hide("k_turrets:titanium_ingot");
})

ItemEvents.tooltip( event => {

	// Add tooltips to items here
	event.add("compactmachines:tunnel", "For a less confusing alternitive use a Quantum Entangloporter");
	event.add(["kubejs:refined_obsidian_boots", "kubejs:refined_obsidian_leggings", "kubejs:refined_obsidian_chestplate", "kubejs:refined_obsidian_helmet"], '"The Type ||| Agis Combat Armor..."')
	event.add(["born_in_chaos_v1:charmof_endurance", "born_in_chaos_v1:charmof_fury", "born_in_chaos_v1:charmof_power", "born_in_chaos_v1:charmof_resistance", "born_in_chaos_v1:charmof_stealth"], "Can be shattered at a workbench")
})
ClientEvents.lang('en_us', event => {

	// Add lang entries here
    event.add('infuse_type.kubejs.infuse_living_flesh', "§dCrude Living Flesh");
	event.add('infuse_type.kubejs.infuse_nutrient_paste', "Nutrients");
	event.add('infuse_type.kubejs.infuse_zinc', "Zinc");
})

REIEvents.groupEntries(event => {

	// Group items in REI here

	const useNbt = ['potion', 'enchanted_book', 'splash_potion', 'tipped_arrow', 'lingering_potion']
	
})