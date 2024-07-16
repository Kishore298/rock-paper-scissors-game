import React, {Component} from "react";
import './Game.css';

class Game extends Component{
	constructor(props) {
		super(props)
		this.state = {
			playerVal : null,
			computerVal : null,
			playerScore: 0,
			compScore: 0,
           
		};
	}
	logic = (playerVal, computerVal)=>{
		if(playerVal ===computerVal){
			return 0;
		} else if ((playerVal === "ROCK" && computerVal ==="SCISSORS") ||
			(playerVal === "SCISSORS" && computerVal === "PAPER") ||
			(playerVal === "PAPER" && computerVal === "ROCK")
		) {
			return 1;
		} else {
			return -1;
		}
	}

	decision = (playerChoice)=> {
		const choices = ["ROCK", "PAPER", "SCISSORS"];
		const compChoice = choices[Math.floor(Math.random() * choices.length)];
		const val = this.logic(playerChoice, compChoice)
		if(val === 1  && this.state.playerScore < 10) {
			console.log("Hello")
			this.setState({
				playerVal: playerChoice,
				computerVal : compChoice, 
				playerScore : this.state.playerScore +1
			})
		} else if(val === -1  && this.state.compScore < 10) {
			console.log("Hello")
			this.setState({
				playerVal: playerChoice,
				computerVal : compChoice,
				compScore : this.state.compScore +1
			})
		}  else  if (this.state.playerScore === 10 || this.state.compScore === 10){
               alert("Game Over!!! Please restart to start the game again!!!.");
        } 
         else {
			console.log("Hello")
			this.setState({
				computerVal : compChoice,
				playerVal : playerChoice
			})
		}
    } 

    winner = (playerScore, compScore) => {
        if (playerScore === 10 && compScore < 10) {
            return `<span style="color: green;">Player won the Game</span>` ;
        } else if (compScore === 10 && playerScore < 10) {
            return`<span style="color: red;">Computer won the Game</span>`;
        }else if (playerScore > compScore){
            return `<span style="color: orange;">Player's score is ahead</span>`;
        }else if (compScore > playerScore){
            return `<span style="color: orange;">Computer's score is ahead</span>`;
        }
        else if(playerScore === compScore) {
          return`<span style="color:white ;">Score's level</span>` ;
		  
        }
    }
          
	render(){
		const {playerVal, computerVal, playerScore, compScore} = this.state;
		return(
			<div className="container">
				<h1>Welcome to Rock, Paper, Scissors Game</h1>
				<div >
					<button onClick={()=>this.decision("ROCK")}>
						<i className={`fas fa-hand-rock`} /> Rock
					</button>
					<button onClick={()=>this.decision("PAPER")}>
						<i className={`fas fa-hand-paper`} /> Paper
					</button>
					<button onClick={()=>this.decision("SCISSORS")}>
						<i className={`fas fa-hand-scissors`} /> Scissors 
					</button>
				</div>
				<div className="content">
					<p>Your choice: {playerVal}</p>
					<p>Computer's choice: {computerVal}</p>
					<h2>Your Score:{playerScore}</h2>
					<h2>Computer Score: {compScore}</h2>
                    <div className="winner" dangerouslySetInnerHTML={{__html: this.winner(playerScore, compScore)}} />
                    <button onClick={()=>this.setState({playerScore:0, compScore:0})}>Restart</button>
				</div>
			</div>
		)
	}
}

export default Game;
