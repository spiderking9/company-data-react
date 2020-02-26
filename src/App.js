import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from 'axios';
import './mystyle.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      submit: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  handleSubmit(event) {
    // change code below this line
    this.setState({
      submit: this.state.input
    });
    // change code above this line
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          { /* change code below this line */ }
          <input value={this.state.input} onChange={this.handleChange.bind(this)}/>
          { /* change code above this line */ }
          <button type='submit'>Submit!</button>
        </form>
        { /* change code below this line */ }
        <p>{this.state.submit}</p>
        { /* change code above this line */ }
      </div>
    );
  }
};



///// projekt nr 2 

class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      activeUsers: null
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      inputValue: event.target.value
    });
  }

  componentDidMount() {  //funkcja ktora musi byc spelniona zeby uruchomila sie reszta (chyba)
    setTimeout( () => {
      this.setState({
        activeUsers: 1273
      });
    }, 2500);
  }
  render() {
    return (
       <div>
       <h1>Active Users: {this.state.activeUsers}</h1>
        { /* change code below this line */ }
      <GetInput input={this.state.inputValue}
          handleChange={this.handleChange}/>
      <RenderInput input={this.state.inputValue}/>

        { /* change code above this line */ }
       </div>
    );
  }
};

class GetInput extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>Get Input:</h3>
        <input
          value={this.props.input}
          onChange={this.props.handleChange}/>
      </div>
    );
  }
};

class RenderInput extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>Input Render:</h3>
        <p>{this.props.input}</p>
      </div>
    );
  }
};


//Projekt nr 3
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ''
    };
    this.handleEnter = this.handleEnter.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  // change code below this line
  componentDidMount() {
document.addEventListener("keydown", this.handleKeyPress);
  }
  componentWillUnmount() {
document.removeEventListener("keydown", this.handleKeyPress);
  }
  // change code above this line
  handleEnter() {
    this.setState({
      message: this.state.message + 'You pressed the enter key! '
    });
  }
  handleKeyPress(event) {
    if (event.keyCode === 13) {
      this.handleEnter();
    }
  }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
      </div>
    );
  }
};
//ZADANIE NR 4
class OnlyEvens extends React.Component {
  constructor(props) {
    super(props);
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('Should I update?');
     // change code below this line
     if (nextProps.value % 5==0) {return true;}
     // change code above this line
  } 
  componentDidUpdate() {
    console.log('Component re-rendered.');
  }
  render() {
    return <h1>{this.props.value}</h1>
  } 
};
const styles = {color: "purple", fontSize: 40, border: "2px solid purple"}
class Controller extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
    this.addValue = this.addValue.bind(this);
  }
  addValue() {
    this.setState({
      value: this.state.value + 1
    });
  }
  render() {
    return (
      <div style={{color: "red", fontSize: 72}}>
        <button onClick={this.addValue}>Add</button>
        <OnlyEvens value={this.state.value}/>
        <div style={styles}> s fsdfs sfd </div>
      </div>
    );
  }
};

//zadanie nr 5

const inputStyle = {
  width: 235,
  margin: 5
}

class MagicEightBall extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: '',
      randomIndex: ''
    }
    this.ask = this.ask.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  ask() {
    if (this.state.userInput) {
      this.setState({
        randomIndex: Math.floor(Math.random() * 20),
        userInput: ''
      });
    }
  }
  handleChange(event) {
    this.setState({
      userInput: event.target.value
    });
  }
  render() {
    const possibleAnswers = [
      'It is certain',
      'It is decidedly so',
      'Without a doubt',
      'Yes, definitely',
      'You may rely on it',
      'As I see it, yes',
      'Outlook good',
      'Yes',
      'Signs point to yes',
      'Reply hazy try again',
      'Ask again later',
      'Better not tell you now',
      'Cannot predict now',
      'Concentrate and ask again',
      'Don\'t count on it',
      'My reply is no',
      'My sources say no',
      'Most likely',
      'Outlook not so good',
      'Very doubtful'
    ];
    const answer = possibleAnswers[this.state.randomIndex] // << change code here
    return (
      <div>
        <input
          type="text"
          value={this.state.userInput}
          onChange={this.handleChange}
          style={inputStyle} /><br />
        <button onClick={this.ask}>
          Ask the Magic Eight Ball!
        </button><br />
        <h3>Answer:</h3>
        <p>
          { /* change code below this line */ }
          {answer}
          { /* change code above this line */ }
        </p>
      </div>
    );
  }
};


//zadanie nr 6

class MyXXX extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: true
    }
    this.toggleDisplay = this.toggleDisplay.bind(this);
  }
  toggleDisplay() {
    this.setState({
      display: !this.state.display
    });
  }
  render() {

return (
       <div>
         <button onClick={this.toggleDisplay}>Toggle Display</button>
         {this.state.display &&<h1>Displayed!</h1>}
       </div>
    );
    
  }
};


//zadanie nr 7

class CheckUserAge extends React.Component {
  constructor(props) {
    super(props);
    // change code below this line
this.state = {
      input:'',
      userAge:''
    }
    // change code above this line
    this.submit = this.submit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    let w = new Date();
    console.log('sdf ' + w.getTime());
  }
  handleChange(e) {
    this.setState({
      input: e.target.value,
      userAge: ''
    });
  }
  submit() {
    this.setState(state => ({
      userAge: state.input
    }));
  }
  render() {
    let inputStyle3 = {
      width: 235,
      margin: 5
    }

    {this.state.input.length>15 && (inputStyle = {
      border: '3px solid red'
    })}

    const buttonOne = <button onClick={this.submit}>Submit</button>;
    const buttonTwo = <button>You May Enter</button>;
    const buttonThree = <button>You Shall Not Pass</button>;
    return (
      <div>
        <h3>Enter Your Age to Continue</h3>
        <input
          style={inputStyle3}
          type="number"
          value={this.state.input}
          onChange={this.handleChange} /><br />
        
          {this.state.userAge===''?buttonOne:
            this.state.userAge>=18 ? buttonTwo : buttonThree}
          <div> {Date()}</div>
      </div>
    );
  }
};

//zadanie nr 8

class Results extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <h1>
      {this.props.fiftyFifty}
      </h1>
    )
  }; 
};

class GameOfChance extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 1
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({
      counter: this.state.counter + 1 // change code here
    });
  }
  render() {
     let expression = Math.random() > .5;
 
    return (
      <div>
        <button onClick={this.handleClick}>Play Again</button>
        { /* change code below this line */ }
        {(expression == 1)? <Results fiftyFifty="You win!"/> : <Results fiftyFifty="You lose!"/> }
        { /* change code above this line */ }
        <p>{'Turn: ' + this.state.counter}</p>
      </div>
    );
  }
};

//zadanie nr 8

const textAreaStyles = {
  width: 235,
  margin: 5
};

class MyToDoList extends React.Component {
  constructor(props) {
    super(props);
    // change code below this line
    this.state = {
      toDoList: [],
      userInput:""
    }
    // change code above this line
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleSubmit() {
    const itemsArray = this.state.userInput.split(',');
    this.setState({
      toDoList: itemsArray
    });
  }
  handleChange(e) {
    this.setState({
      userInput: e.target.value
    });
  }
  render() {
    const items = this.state.toDoList.map((x,index)=> <li key={index}>{x}</li>); // change code here
    return (
      <div>
        <textarea
          onChange={this.handleChange}
          value={this.state.userInput}
          style={textAreaStyles}
          placeholder="Separate Items With Commas" /><br />
        <button onClick={this.handleSubmit}>Create List</button>
        <h1>My "To Do" List:</h1>
        <ul>
          {items}
        </ul>
      </div>
    );
  }
};


//zadanie nr 9

class MyComponent4 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          username: 'Jeff',
          online: true
        },
        {
          username: 'Alan',
          online: false
        },
        {
          username: 'Mary',
          online: true
        },
        {
          username: 'Jim',
          online: false
        },
        {
          username: 'Sara',
          online: true
        },
        {
          username: 'Laura',
          online: true
        }
      ]
    }
  }
  render() {
    const usersOnline = this.state.users.filter(user => user.online); // change code here
    const renderOnline = usersOnline.map(x=> <li>{x.username}</li>); // change code here
    return (
       <div>
         <h1>Current Online Users:</h1>
         <ul>
           {renderOnline}
         </ul>
       </div>
    );
  }
};



//zadanie nr 10 zmiana js na react z zadania z tabelka rekrutacyjnego


const API = 'https://recruitment.hal.skygate.io/companies';
class Appster extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hits: [],
    isLoading: false,
        error: null,
    };
  }

componentDidMount() {
          var presentMonth = parseFloat(new Date().getMonth() + 1);
      this.setState({ isLoading: true });
        axios.get(API)
      .then(result =>{ 
            result.data.map(x=>{
            axios.get('https://recruitment.hal.skygate.io/incomes/' + x.id)
            .then(result2=>{
                //console.log(result2.data.incomes);
                let income = Math.round(result2.data.incomes.reduce((a, b) => a + parseFloat(b.value), 0) * 100) / 100;
                let average = Math.round((income / 49) * 100) / 100;
                let lastMonth = Math.round(result2.data.incomes.map((id) => parseFloat(id.date.substring(5, 7)) === presentMonth ? id.value : 0).reduce((a, b) => {
                    return a + parseFloat(b);
                }, 0) * 100) / 100;
                this.setState({
                hits: this.state.hits.concat({"Id":x.id,"Name":x.name,"City":x.city,"Income":income,"Average":average,"lastMonth":lastMonth}),
                isLoading: false })
            });});
            })
      .catch(error => this.setState({ error, isLoading: false }));
  }
  render() {
    const { hits,isLoading,error } = this.state;
      if (error) {
      return <p>{error.message}</p>;
    }
   if (isLoading) {
      return <p>Loading ...</p>;
    }
    return (
      <div class='wrapper'>
        <table id='data' class='list'>
        <thead>
        <tr class='row header'><th class='cell'>Id</th><th class='cell'>Name</th><th class='cell'>City</th><th class='cell'>Income</th><th class='cell'>Average</th><th class='cell'>lastMonth</th></tr>
        </thead>
      <tbody>
        {hits.map(hit =>{ return <tr class="row">
          <td class="cell">{hit.Id}</td> 
          <td class="cell">{hit.Name}</td> 
          <td class="cell">{hit.City}</td> 
          <td class="cell">{hit.Income}</td> 
          <td class="cell">{hit.Average}</td>   
          <td class="cell">{hit.lastMonth}</td> 
        </tr>}
        )}
    
      </tbody>

</table>
</div>
    );
  }
}


export default Appster;