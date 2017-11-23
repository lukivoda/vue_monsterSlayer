new Vue({
    el:'#app',

    data: {

        gameIsRunning:false,

        playerHealth: 100,

        monsterHealth: 100,

        turns: []

    },

    methods: {
        //pri klkanje na start poenite na player i monster mu zadavame 100,a na gameIsRunning true za da se pojavat buttons za igranje, a da iscezne start button

        startGame:function () {
            this.gameIsRunning = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
        },

        attack: function(){

      let damage =  this.calculateDamage(3,10);
     //odzemame poeni od monster
         this.monsterHealth -= damage;

         //dodavame objekt vo turns nizata,kade so ternaren operator vo html pri loop stavame klasa sprema toa dali isPlayer e true ili ne
         this.turns.unshift({
                 isPlayer: true,
                 message: "Player hits " + damage
             }
         );
        // ako vracame true(ako player pobedil izleguvame od f-jata)
        if(this.checkWin()){
            return;
        }


            this.monsterAttacks();

        },

        specialAttack: function() {

            let damage = this.calculateDamage(5,15);
            //odzemame poeni od monster
            this.monsterHealth -= damage;

            //dodavame objekt vo turns nizata,kade so ternaren operator vo html pri loop stavame klasa sprema toa dali isPlayer e true ili ne
            this.turns.unshift({
                isPlayer: true,
                message: "Player hits hard " + damage
            });

            // ako vracame true(ako player pobedil izleguvame od f-jata)
            if(this.checkWin()){
                return;
            }


            this.monsterAttacks();

        },

        heal:function() {
            //prasuvame dali odkoga ke klikneme playerHealth e pomal ili ednakov na 90(ako e taka dodavame 10 poeni
            if(this.playerHealth <= 90){
                this.playerHealth += 10;
                //prasuvame dali odkoga ke klikneme playerHealth e pogolem od 90(ako e taka stavame 100)
            }else{
                this.playerHealth = 100;
            }

            this.monsterAttacks();

        },

        giveUp: function(){
           this.gameIsRunning = false;

        },

        monsterAttacks: function() {

            let damage = this.calculateDamage(5,10);
            //odzemame poeni od player
            this.playerHealth -= damage;
            //ako monster pobedil izleguvame od f-jata(bidejci ova e posleden kod nema potreba od return)

            //dodavame objekt vo turns nizata,kade so ternaren operator vo html pri loop stavame klasa sprema toa dali isPlayer e true ili ne
            this.turns.unshift({
                    isPlayer: false,
                    message: "Monster hits " + damage
                }
            );

            this.checkWin();
        },

        //presmetuvame maximalen broj
        calculateDamage: function(min,max){
            return Math.max(min,Math.floor(Math.random()*max));
        },

        checkWin() {
              //proveruvame koj pobedil vo igrata
            // ako nekoj pobedil i klknal ok na prasanjeto igrata ja startirame odnovo,a  ako nekoj pobedil i stisnal cancel go pokazuvame samo start kopceto i vracame true posle logikata.Nadvor od logikata imame false
            if(this.monsterHealth <= 0){
                if(confirm("You won!New game?")){
                    this.startGame();
                }else{
                    this.gameIsRunning = false;
                }
                return true;
            } else if(this.playerHealth <=0){
                if(confirm("Monster won!New game?")){
                    this.startGame();
                }else{
                    this.gameIsRunning = false;
                }
                return true

            }
             return false;

        }


    }



});