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
	event.add("compactmachines:tunnel", Text.red("VERY buggy, Use Mekanism Quantum Entangloporter"));
})
ClientEvents.lang('en_us', event => {

	// Add lang entries here
    event.add('gas.kubejs.gas_living_flesh', "§dCrude Living Flesh");
    event.add('infuse_type.kubejs.infuse_living_flesh', "§dCrude Living Flesh");
	event.add('infuse_type.kubejs.infuse_nutrient_paste', "Nutrients");
	event.add('gas.kubejs.gas_nitrogen', "Nitrogen");
	event.add('gas.kubejs.gas_potassium', "Potassium");
})

REIEvents.groupEntries(event => {

	// Group items in REI here

	const useNbt = ['potion', 'enchanted_book', 'splash_potion', 'tipped_arrow', 'lingering_potion']
	
})