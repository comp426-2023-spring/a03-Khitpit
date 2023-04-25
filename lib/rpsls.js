export function rps(playerHand) {
    let hands = ['rock', 'paper', 'scissors'];
    if(playerHand == undefined){
        return {
            'player': hands[Math.floor(Math.random() * hands.length)]
        };
    } else if(hands.includes(playerHand.toLowerCase())) {
        let oppHand = hands[Math.floor(Math.random() * hands.length)];
        playerHand = playerHand.toLowerCase();
        let result = ''
        if(playerHand == oppHand){
            result = 'tie';
        } else if((playerHand == 'rock' && oppHand == 'paper') 
                || (playerHand == 'paper' && oppHand == 'scissors') 
                || (playerHand == 'scissors' && oppHand == 'rock')){
            result = 'lose';
        } else{
            result = 'win';
        }
        return {
            "player": playerHand,
            "opponent": oppHand,
            "result": result
        };
    } else{
        console.error('Please enter rock, paper, or scissors.')
        throw new Exception
    }
}

export function rpsls(playerHand) {
    let hands = ['rock', 'paper', 'scissors', 'spock', 'lizard'];

    if(playerHand == undefined){
        return {
            'player': hands[Math.floor(Math.random() * hands.length)]
        };
    } else if(hands.includes(playerHand.toLowerCase())) {
        let oppHand = hands[Math.floor(Math.random() * hands.length)];
        playerHand = playerHand.toLowerCase();
        let result = ''

        if(playerHand == oppHand){
            result = 'tie';
        } else if((playerHand == 'rock' && (oppHand == ('paper' || 'spock'))) 
                || (playerHand == 'paper' && (oppHand == ('scissors' || 'lizard'))) 
                || (playerHand == 'scissors' && (oppHand == ('rock' || 'spock'))) 
                || (playerHand == 'lizard' && (oppHand == ('rock' || 'scissors'))) 
                || (playerHand == 'spock' && (oppHand == ('paper' || 'lizard')))){
            result = 'lose';
        } else{
            result = 'win';
        }

        return {
            player: playerHand,
            opponent: oppHand,
            result: result
        };

    } else{
        console.error('Please enter rock, paper, scissors, lizard, or spock.')
        throw new Exception
    }
}