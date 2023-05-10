import Component from 'react'

import './index.css'

class CashWithdrawal extends Component {
  state = {amount: 2000}

  onFifty = () => {
    this.setState(prevState => ({
      amount: prevState.amount + 50,
    }))
  }

  onHundred = () => {
    this.setState(prevState => ({
      amount: prevState.amount + 100,
    }))
  }

  onTwoHundred = () => {
    this.setState(prevState => ({
      amount: prevState.amount + 200,
    }))
  }

  onFiveHundred = () => {
    this.setState(prevState => ({
      amount: prevState.amount + 500,
    }))
  }

  render() {
    const {amount} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          <div className="heading-container">
            <h1 className="span-element">S</h1>
            <h1 className="main-heading">Sarah Willioms</h1>
          </div>
          <div className="amount-container">
            <p className="your-balance">Your Balance</p>
            <div>
              <p className="amount">{amount}</p>
              <p className="in-rupees">In Rupees</p>
            </div>
          </div>
          <h1 className="withdraw">Withdraw</h1>
          <p className="choose-sum">CHOOSE SUM (IN RUPEES)</p>
          <div className="button-container">
            <button className="button" type="button" onClick={this.onFifty}>
              50
            </button>
            <button className="button" type="button" onClick={this.onHundred}>
              100
            </button>
          </div>
          <div className="button-container">
            <button
              className="button"
              type="button"
              onClick={this.onTwoHundred}
            >
              200
            </button>
            <button
              className="button"
              type="button"
              onClick={this.onFiveHundred}
            >
              500
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
