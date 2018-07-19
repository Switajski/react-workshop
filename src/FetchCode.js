const FetchCode = `class App extends Component {

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
      <div className="App">
        {this.state.error && this.state.error.message}
        {this.state.ppsInYears.map(ppInYear =>
          <div>{ppInYear.year} - {ppInYear.programCode} - {ppInYear.turnover.toFixed(0)}</div>)}
      </div>
    );
...  
`
export default FetchCode