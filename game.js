class Game{

	constructor() {
		this.hero = new Hero();
		
		this.round = 0;
		this.commencer =  $("#begin");
		this.recap =  $("#recap");
		this.display =  $("#display");
		this.upgrade = $("#upgrade");
		this.commencer.on("click",this.fight.bind(this));
		this.recap.on("click",this.history.bind(this));
		this.upgrade.on("click",this.shop.bind(this));
	}

	fight(){

		this.round++;
		$("#coins").text("Vous avez "+this.hero.goldCoin+" Pièces d'or");
		this.monsters = new Monsters();

		this.monsters.monstersLevelUp(this.hero.heroLevel);
			

		if (this.hero.force > this.monsters.force) {
			
			
			this.victory();

		}

		else  {


			this.defeat();
			
			

		}


		switch (this.hero.heroXp) {
			case 10:
			this.hero.levelUp();
			break;
		}



		console.log(this.hero);
		console.log(this.monsters)


	}
		victory(){
			this.hero.heroXp++;	
			this.hero.monsterKill++;
			this.hero.goldCoin += 5;
			$("#display").text("Force du hero : "+ this.hero.force +" Force du monstre : " + this.monsters.force);
			$("#result").text("Hero Wins ! Round :"+ this.round )
			
	}

	defeat(){

		$("#display").text("Force du hero : " + this.hero.force + " Force du monstre : " + this.monsters.force);
			$("#result").text("Monster Wins ! Round : " + this.round )
	}

	history(){

		$("#history").text("Vous avez tuer "+this.hero.monsterKill+" monstres");

	}



	shop(){
		$("#coins").text("Vous avez "+this.hero.goldCoin+" Pièces d'or");
		$("#display").text("Force du hero : "+ this.hero.force +" Force du monstre : " + this.monsters.force);
		console.log(this.hero.goldCoin);
		if (this.hero.goldCoin >= 20) {

			this.hero.goldCoin -= 20;
			this.hero.force++;
			$("#notenough").text("Vous avez acheter une nouvelle épée, vous gagnez 1 point de force");

		}
		else {
			$("#notenough").text("Vous avez "+this.hero.goldCoin+" pièces d'or il vous en faut au moins 20 ! ");

		}

	}
}