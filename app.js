new Vue({
    el: "#app",
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gameRunnnig: false
    },
    methods: {
        startGame: function() {
            this.gameRunnnig = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
            
        },
        attack: function() {
            
            this.monsterHealth -= this.calculateDamage(3,10);
            if(this.checkWin()) {
                return;
            }

            this.playerHealth -= this.calculateDamage(5, 12);
            this.checkWin()

        },
        heal: function() {

        },
        specialAttack: function() {

        },
        giveUp: function () {

        },
        calculateDamage: function(min, max) {
            return Math.max(Math.floor(Math.random() * max) + 1, min);
        },
        checkWin: function() {
            if (this.monsterHealth <= 0) {
                if (confirm('You won! Hojaye?')) {
                    this.startGame();
                } else {
                    this.gameIsRunning = false;
                }
                return true;
            } else if (this.playerHealth <= 0) {
                if (confirm('You lost! New Game?')) {
                    this.startGame();
                } else {
                    this.gameIsRunning = false;
                }
                return true;
            }
            return false;
        }
    }
})