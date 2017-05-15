import React, { Component } from 'react';
import HomePage from './containers/HomePage';
import Footer from './containers/Footer';
var data = require('../public/database.json');

class App extends Component {

  constructor() {
    super()
    this.state = {
      movieRecord: [],
      checkboxNo: 0,
      successMessage: '',
      errorMessage: '',
      success: false,
      selectError: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleHomePage = this.handleHomePage.bind(this);

  }

  componentDidMount() {
    let random = Math.floor(Math.random() * data.results.length);
    this.setState({ movieRecord: data.results[random] })
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.checkboxNo === 0) {
      this.setState({ selectError: "Please Select one of the option!" });
    }
    else {

      if (this.state.checkboxNo === this.state.movieRecord.vote_count) {
        this.setState({ successMessage: "Your Answer is Correct!! " });
      }
      else {
        this.setState({ errorMessage: "Your Answer is Incorrect!! " });

      }
    }
  }

  handleHomePage(e) {
    e.preventDefault();
    this.setState({
      errorMessage: null,
      successMessage: null,
      selectError: null,
      checkboxNo: 0
    });

  }

  handleChange(event, value) {
    console.log(value)
    this.setState({ checkboxNo: value })
  }

  render() {
    if (this.state.movieRecord == null)
      return (
        <h2> Loading....... </h2>
      )
    else {
      return (
        <div>
          <HomePage
            movieData={this.state.movieRecord}
            onSubmit={this.handleSubmit}
            callChange={this.handleChange}
            callHomepage={this.handleHomePage}
            successMessage={this.state.successMessage}
            errorMessage={this.state.errorMessage}
            selectError={this.state.selectError}
          />
          <Footer />
        </div>
      );
    }
  }
}

export default App;
