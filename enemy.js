class Monsters {



constructor(){
	this.force = Math.floor(Math.random() * (10 - 5 + 1) + 5 );  // returns a random integer from 5 to 10
}


	monstersLevelUp(monsterKill){
		this.force+=monsterKill;
	}
}