import React from 'react';
import Paper from 'material-ui/Paper';
import SearchForm from './SearchForm';
import Result from './Result';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      results: "",
      err: undefined
    }
  }

  getResults = (query) => {
    const url = `https://en.wikipedia.org/w/api.php?format=json&origin=*&action=query&generator=search&prop=extracts|info&inprop=url&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=${query}`
    return fetch(url);
  }

  proccessData = (data) => {
    return data.json()
  }

  pushData = (data) => {
    this.setState(
      () => ({ results: Object.values(data.query.pages) })
    )
  }

  handleSubmit = (q) => {
    this.getResults(q)
      .then(this.proccessData, this.handleError)
      .then(this.pushData)
  }

  handleError = () => {
    this.setState(
      () => ({ err: "Sorry, Wikipedia doesn't want to cooperate"})
    )
  }

  getRandomPage = () => {
    window.open("https://en.wikipedia.org/wiki/Special:Random");
  }

  render() {
    return (
      <div className="main-container">
        <SearchForm submit={this.handleSubmit} getRandom={this.getRandomPage} />
        <div className="results">
          {this.state.err
            ? this.state.err
            : this.state.results
                ? this.state.results.map((v, i) => <Result data={v} id={i} />)
                : null}
        </div>

      </div>
    );
  }
}

export default App;

