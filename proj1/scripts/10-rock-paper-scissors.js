       //create  a object for the score, has property
        // const score = JSON.parse(localStorage.getItem('score'));

        // if(score === null) { //!null
        //     score = {
        //     wins: 0,
        //     losses: 0,
        //     ties: 0
        //     };
        // }

        //or use
        let score = JSON.parse(localStorage.getItem('score'))
        ||  {wins: 0,
            losses: 0,
            ties: 0
            };

        updateScoreElement();
        // document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses},Ties: ${score.ties}`;

        function playGame(playerMove)
        {
            const computerMove = pickComputerMove();
            let result = '';

        if (playerMove === 'scissors') {
            if (computerMove === 'rock') {
            result = 'You lose';
        } else if (computerMove === 'paper') {
            result = 'You win';
        } else if (computerMove === 'scissors') {
            result = 'Tie';
        }
        } else if (playerMove === 'paper') {
            if (computerMove === 'rock') {
            result = 'You win';
        } else if (computerMove === 'paper') {
            result = 'Tie';
        } else if (computerMove === 'scissors') {
            result = 'You lose';
        }

        } else if (playerMove === 'rock') {
            if (computerMove === 'rock') {
            result = 'Tie';
        } else if (computerMove === 'paper') {
            result = 'You lose';
        } else if (computerMove === 'scissors') {
            result = 'You win';
        }

        }

        if (result === 'You win') {
            score.wins += 1;
        } else if (result === 'You lose') {
            score.losses += 1;
        } else if (result === 'Tie') {
            score.ties += 1;
        }

        localStorage.setItem('score', JSON.stringify(score)); //conv obj score to string
        
        updateScoreElement();
        document.querySelector('.js-result').innerHTML = `${result}.`;
        document.querySelector('.js-moves').innerHTML = 
        `You
    <img src="./pics/${playerMove}.png" class="move-icon">
    <img src="./pics/${computerMove}.png" class="move-icon">
    Computer`;

    // You
    // <img src="./pics/rock.png" class="move-icon">
    // <img src="./pics/paper.png" class="move-icon">
    // Computer
        
        //alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}.`);

        }

        function updateScoreElement() {
            document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
        }

        //let computerMove = ''; //var outside the function, scope
        function pickComputerMove() {
            const randomNumber = Math.random();

            let computerMove = '';

            if (randomNumber >= 0 && randomNumber < 1 / 3) {
                //console.log('rock');
                computerMove = 'rock';
            } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
                //console.log('paper');
                computerMove = 'paper';
            } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
                //console.log('scissors');
                computerMove = 'scissors';
            }
            return computerMove;
        }
