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

function getStats(creature, strategy) {
    const game = [creature.roll(), creature.roll()]
    return [attack, defense] = strategy === "attack" ? [Math.max(...game), Math.min(...game)] : [Math.min(...game), Math.max(...game)]
}

const playerGame = getStats(player, "attack")

function fight() {
    const playerGame = getStats(player, "dwfwncw")
    const enemyGame = getStats(enemy, "attack")

    console.log(`Player has an attack of ${playerGame[0]} and a defence of ${playerGame[1]}.`)
    
    
}


fight()