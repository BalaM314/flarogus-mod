Events.on(EventType.ContentInitEvent, cons(() => {
	const flarogus = Vars.content.unit("flarogus-mod-flarogus");
	
	//Add eclipse -> flarogus upgrade
	Blocks.exponentialReconstructor.addUpgrade(UnitTypes.eclipse, flarogus);
	
	//Make the flarogus's shoot pattern
	const pattern = new ShootSpread();
	pattern.shots = 30;
	pattern.spread = 3;
	pattern.shotDelay = 0.5;
	flarogus.weapons.get(0).shoot = pattern;
}));
