import React, { Component } from 'react';
import './App.css';
import QuoteMachine from './components/QuoteMachine';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: [],
      selectedQuoteIndex: null
    }
    this.chooseQuoteIndex = this.chooseQuoteIndex.bind(this);
    this.assignNewQuoteIndex = this.assignNewQuoteIndex.bind(this);
  }

  /**
   * Immediatley after component loads, use:
   * fetch for api to the quote data
   * then uses .json to parse that data
   * then fills the quotes array in state with parsed data
   * then sets the selected quote index with chooseQuoteIndex()
   */
  componentDidMount() {
    fetch("https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json")
      .then(data => data.json())
      .then(d => this.setState({ quotes: d }))
      .then(this.assignNewQuoteIndex());
  }


  /**
   * Creates a random number based on the length of whatever length of data is fetched
   * returns that number
   */
  chooseQuoteIndex() {
    let randomNumber = (Math.floor(Math.random() * (this.state.quotes.length + 1)));
    return randomNumber;
  }

  /**
   * returns the quote to be rendered in the DOM
   */
  get finalQuote() {
    return (this.state.quotes[this.state.selectedQuoteIndex]);
  }

  /**
   * 
   */
  assignNewQuoteIndex() {
    this.setState({ selectedQuoteIndex: this.chooseQuoteIndex()});
  }

  render() {
    console.log(this.state.quotes);
    console.log(this.state.selectedQuoteIndex + "looks like it worked?");
    return (
      <div className="App" id="quote-box">
        <QuoteMachine finalQuote={this.finalQuote} assignNewQuoteIndex={this.assignNewQuoteIndex}/>
        </div>
    );
  }

}

export default App;
