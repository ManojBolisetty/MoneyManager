import {Component} from 'react'
import './index.css'
import {v4 as uuidv4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

class MoneyManager extends Component {
  state = {
    transactionList: [],
    title: '',
    amount: '',
    type: 'INCOME',
  }

  onTitleChange = e => {
    this.setState({title: e.target.value})
  }

  onAmountChange = e => {
    this.setState({
      amount: e.target.value,
    })
  }

  onTypeChange = e => {
    this.setState({type: e.target.value})
  }

  addTransaction = () => {
    const {title, amount, type} = this.state

    if (title !== '' && amount !== '') {
      this.setState(prevState => ({
        type: 'INCOME',
        transactionList: [
          ...prevState.transactionList,
          {title, amount: parseInt(amount), type, id: uuidv4()},
        ],
        title: '',
        amount: '',
      }))
    }
  }

  deleteTransaction = id => {
    this.setState(prevState => ({
      transactionList: prevState.transactionList.filter(
        eachItem => eachItem.id !== id,
      ),
    }))
  }

  getIncome = () => {
    const {transactionList} = this.state
    let income = 0
    transactionList.forEach(eachItem => {
      if (eachItem.type === 'INCOME') {
        console.log(eachItem.amount)

        income += eachItem.amount
      }
    })
    return income
  }

  getExpenses = () => {
    const {transactionList} = this.state
    let expenses = 0
    transactionList.forEach(eachItem => {
      if (eachItem.type === transactionTypeOptions[1].optionId) {
        expenses += eachItem.amount
      }
    })
    return expenses
  }

  render() {
    const {transactionList, title, amount, type} = this.state
    const totalIncome = this.getIncome()
    const totalExpenses = this.getExpenses()
    console.log(totalIncome)

    return (
      <div className="main-container ">
        <div className="container ">
          <div className="row">
            <div className="name-container col-12">
              <h1 className="heading">Hi, Richard </h1>
              <p className="welcome-message">
                Welcome back to your <span>Money Manager</span>
              </p>
            </div>
          </div>
        </div>

        <MoneyDetails income={totalIncome} expenses={totalExpenses} />

        <div className="container">
          <div className="row ">
            <div className="col-12 col-md-5 mt-5">
              <div className="add-transaction-container p-5 ">
                <h1 className="transaction-heading mb-4">Add Transaction</h1>
                <label htmlFor="title" className="mb-2">
                  TITLE
                </label>
                <input
                  type="text"
                  placeholder="TITLE"
                  id="title"
                  className="form-control"
                  onChange={this.onTitleChange}
                  value={title}
                />
                <label htmlFor="amount" className="mb-2 mt-3">
                  AMOUNT
                </label>
                <input
                  type="text"
                  placeholder="AMOUNT"
                  id="amount"
                  value={amount}
                  className="form-control"
                  onChange={this.onAmountChange}
                />
                <label className="mt-3 mb-2" htmlFor="type">
                  TYPE
                </label>
                <select
                  className="form-control"
                  onChange={this.onTypeChange}
                  value={type}
                >
                  <option value="INCOME" selected>
                    Income
                  </option>
                  <option value="EXPENSES">Expenses</option>
                </select>
                <button
                  type="button"
                  className="btn btn-primary mt-3"
                  onClick={this.addTransaction}
                >
                  Add
                </button>
              </div>
            </div>
            <div className="col-12 col-md-7 mt-5">
              <div className="add-transaction-container p-5 h-100">
                <h1 className="transaction-heading mb-4">History</h1>
                <ul>
                  <li>
                    <p className="column">Title</p>
                    <p className="column">Amount</p>
                    <p className="column">Type</p>
                  </li>
                  {transactionList.map(eachItem => (
                    <TransactionItem
                      key={eachItem.id}
                      details={eachItem}
                      deleteTransaction={this.deleteTransaction}
                    />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default MoneyManager
