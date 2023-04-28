import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class Capitals extends Component {
  state = {country: countryAndCapitalsList[0].country}

  onchangeCountry = event => {
    const id = event.target.value
    const countryObj = countryAndCapitalsList.find(obj => obj.id === id)

    return this.setState({country: countryObj.country})
  }

  render() {
    const {country} = this.state
    return (
      <>
        <div className="page">
          <div className="card">
            <h1>Countries And Capitals</h1>
            <div className="content">
              <select onChange={this.onchangeCountry}>
                {countryAndCapitalsList.map(obj => (
                  <option value={obj.id} key={obj.id}>
                    {obj.capitalDisplayText}
                  </option>
                ))}
              </select>
              <div>
                <p>is capital of which country?</p>
              </div>
            </div>
            <div>
              <p>{country}</p>
            </div>
          </div>
        </div>
      </>
    )
  }
}
export default Capitals
