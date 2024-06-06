#! /usr/bin/env node
// Text-based Adventure-Game in TypeScript and Node.js.....It is a console-based game..
import inquirer from "inquirer";
class Hero {
    name;
    health = 100;
    constructor(name) {
        this.name = name;
    }
    decreaseHealth() {
        this.health -= 20;
    }
    ;
    increaseHealth() {
        this.health = 100;
    }
}
// For Enemy
class Enemy {
    name;
    health = 100;
    constructor(name) {
        this.name = name;
    }
    decreaseHealth() {
        this.health -= 20;
    }
    increaseHealth() {
        this.health = 100;
    }
}
//Step 2 Hero Object
async function main() {
    const { heroName } = await inquirer.prompt([
        {
            type: "input",
            name: "heroName",
            message: "Enter Your Hero Name:"
        }
    ]);
    //Enemy Object
    const { enemyType } = await inquirer.prompt([
        {
            type: "list",
            name: "enemyType",
            choices: ["Alien", "Witch", "Zombie"],
            message: "Select the enemy you fight with:"
        }
    ]);
    //Step 3 Battle Field
    const hero = new Hero(heroName);
    const enemy = new Enemy(enemyType);
    console.log(`${enemy.name} v/s ${hero.name}`);
    //Step 4 Action
    do {
        const { action } = await inquirer.prompt([
            //Action Object
            {
                type: "list",
                name: "action",
                choices: ["Attack", "Defend", "Range Target", "Run"],
                message: "Choose the attacktype of perform action:"
            }
        ]);
        //Step 5 Switch Case
        switch (action) {
            case "Attack":
                const randomNum = Math.random();
                if (randomNum > 0.5) {
                    hero.decreaseHealth();
                    console.log(`${hero.name} health: ${hero.health}`);
                    console.log(`${enemy.name} health: ${enemy.health}`);
                    if (hero.health <= 0) {
                        console.log("You loss! Try again");
                        return;
                    }
                }
                else {
                    //Enemy health decrease
                    enemy.decreaseHealth();
                    enemy.decreaseHealth();
                    console.log(`${hero.name} health: ${hero.health}`);
                    console.log(`${enemy.name} health: ${enemy.health}`);
                    if (hero.health <= 0) {
                        console.log("Congratulation! You won");
                        return;
                    }
                }
                break;
        }
    } while (true);
}
main();
