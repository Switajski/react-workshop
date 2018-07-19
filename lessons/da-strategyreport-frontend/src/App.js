import React, { Component } from 'react';
import Card from 'components/src/Card'
import styled from 'styled-components'
import './App.css';

const fetchWithCookie = (url, param) => fetch(url, {
  Accept: 'application/json',
  credentials: 'same-origin', ...param
})
const host = "/da-strategyreport/home/api"

const Padding = styled.div`margin: 50px`


class App extends Component {

  constructor() {
    super()
    this.state = { ppsInYears: [] }
  }

  componentDidMount() {
    fetchWithCookie(host + '/ppinyear')
      .then(response => {
        if (response.status >= 400)
          return Promise.reject(
            new Error(response.status + ' ' + response.statusText + ': ' + response.url))
        return response.json()
      })
      .then(r => this.setState({ ppsInYears: r }))
      .catch(exc => this.setState({ error: exc }))
  }

  render() {
    return (
      <Padding>
        <Card >
          {this.state.error && this.state.error.message}
          {this.state.ppsInYears.map(ppInYear =>
            <div>{ppInYear.year} - {ppInYear.programCode} - {ppInYear.turnover.toFixed(0)}</div>)}
        </Card>
      </Padding>
    );
  }
}

export default App;
