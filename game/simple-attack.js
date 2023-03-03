function rollDie(m, n) {
    return Math.floor(Math.random() * n ) + m
}
//console.log(rollDie(2, 6))

class Creature {
    constructor(health, attack, defence, minDie, maxDie) { 
        this.health = health;
        this.attack = attack;
        this.defence = defence;
        this.minDie = minDie;
        this.maxDie = maxDie;
    }
    roll = () => rollDie(this.minDie, this.maxDie)
}

const player = new Creature(10, 5, 5, 1, 6)

const enemy = new Creature(10, 4, 5, 2, 6)


function fight() {
    const playerGame = [player.roll(), player.roll()]
    const [playerMax, playerMin] = [Math.max(...playerGame), Math.min(...playerGame)]
    const enemyGame = [enemy.roll(), enemy.roll()]
    const [enemyMax, enemyMin] = [Math.max(...enemyGame), Math.min(...enemyGame)]

    console.log(`Player has an attack of ${playerMax} and a defence of ${playerMin}.`)
    console.log(`Enemy has an attack of ${enemyMax} and a defence of ${enemyMin}.`)

    const [playerAttack, playerDefence] = [player.attack + playerMax, player.defence + playerMin];
    const [enemyAttack, enemyDefence] = [enemy.attack + enemyMax, enemy.defence + enemyMin];

    if(playerDefence < enemyAttack) {
        player.health = player.health + playerDefence - enemyAttack
        console.log(`Player has taken a hit. His health is now ${player.health}.`)
    }

    if(enemyDefence < playerAttack) {
        enemy.health = enemy.health + enemyDefence - playerAttack
        console.log(`Enemy has taken a hit. His health is now ${enemy.health}.`)
    }
}


fight()