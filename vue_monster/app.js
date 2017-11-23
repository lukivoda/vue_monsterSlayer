new Vue({
    el:'#app',

    data: {

        gameIsRunning:false,

        playerHealth: 100,

        monsterHealth: 100,

    },

    methods: {
        //pri klkanje na start poenite na player i monster mu zadavame 100,a na gameIsRunning true za da se pojavat buttons za igranje, a da iscezne start button

        startGame:function () {
            this.gameIsRunning = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
        }


    }



});