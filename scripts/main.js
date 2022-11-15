Events.on(EventType.ContentInitEvent, cons(() => {
	const flarogus = Vars.content.unit("flarogus-mod-flarogus");
	//Add eclipse -> flarogus upgrade
	Blocks.exponentialReconstructor.addUpgrade(UnitTypes.eclipse, flarogus);
	flarogus.weapons.get(0).shoot = new ShootSpread();
	flarogus.weapons.get(0).shoot.shots = 30;
	flarogus.weapons.get(0).shoot.spread = 3;
	flarogus.weapons.get(0).shoot.shotDelay = 0.5;
}));