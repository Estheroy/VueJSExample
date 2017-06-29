/**
 * Created by ai master on 6/22/2017.
 */
new Vue({
    el: '#app',

    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false,
        turns: []
    },
    methods: {
        startGame: function() {
            this.gameIsRunning = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.turns = [];
        },
        calculateDamage : function(min, max) {
            return Math.max(Math.floor(Math.random() * max) + 1, min);
        },
        attack: function() {
            var damage = this.calculateDamage(3, 10);
            this.monsterHealth = this.monsterHealth - damage;

            this.turns.unshift({
                isPlayer: true,
                text: 'Player hits Monster for ' + damage
            });

            if (this.checkWin()) {
                return;
            }

            this.playerHealth -= this.monsterAttack();

            this.checkWin();
        },
        specialAttack: function () {
            var damage = this.calculateDamage(10, 20);

            this.turns.unshift({
                isPlayer: true,
                text: 'Player hits Monster for ' + damage
            });

            this.monsterHealth -= damage;
            if(this.checkWin()){
                return;
            }

            this.playerHealth -= this.monsterAttack();
            this.checkWin();

        },
        monsterAttack: function () {
            var damage = this.calculateDamage(5, 12);

            this.turns.unshift({
                isPlayer: false,
                text: 'Monster hits Player for ' + damage
            });

            return damage;
        },
        heal: function () {
            if(this.playerHealth <= 90) {
                this.playerHealth += 10;
            }
            this.playerHealth -= this.monsterAttack();
        },
        giveUp: function () {
            this.gameIsRunning = false;
        },
        checkWin : function() {
            if(this.monsterHealth <= 0) {
                if(confirm('You won! New Game?')) {
                    this.startGame();
                } else {
                    this.gameIsRunning = false;
                }
                return true;
            } else if(this.playerHealth <= 0) {
                if(confirm('You lost! New Game?')) {
                    this.startGame();
                } else {
                    this.gameIsRunning = false;
                }
                return true;
            } else {
                return false;
            }
        }
    }
});