import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {face: true, headsCount: 0, tailsCount: 0, totalCount: 0}

  tossCoin = () => {
    const tossResult = Math.floor(Math.random() * 2)
    let statement
    if (tossResult === 0) {
      statement = this.setState(prevState => ({
        headsCount: prevState.headsCount + 1,
        face: true,
        totalCount: prevState.totalCount + 1,
      }))
    } else {
      statement = this.setState(prevState => ({
        tailsCount: prevState.tailsCount + 1,
        face: false,
        totalCount: prevState.totalCount + 1,
      }))
    }
    return statement
  }

  render() {
    const {face, headsCount, tailsCount, totalCount} = this.state

    const tossImage = face
      ? 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

    return (
      <div className="color-con">
        <div className="white-con">
          <h1 className="head">Coin Toss Game</h1>
          <p className="para">Heads (or) Tails</p>

          <img alt="toss result" src={tossImage} className="image" />

          <button onClick={this.tossCoin} className="btn" type="button">
            Toss Coin
          </button>
          <div className="toss-result-can">
            <p className="cnt">Total: {totalCount}</p>
            <p className="cnt">Heads: {headsCount}</p>
            <p className="cnt">Tails: {tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
