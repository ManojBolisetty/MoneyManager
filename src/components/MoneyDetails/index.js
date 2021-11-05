import './index.css'

const MoneyDetails = ({income, expenses}) => {
  const balance = income - expenses

  return (
    <div className="container  w-100">
      <div className="row ">
        <div className="col-12 col-md-4 pr-2 mt-5">
          <div className="money-container balance d-flex align-items-center p-4">
            <img
              src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
              alt="balance"
              className="money-image"
            />
            <div className="">
              <p className="money-heading mb-0">Your Balance</p>
              <p className="money mt-0 " testId="balanceAmount">
                RS {balance}
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4 pr-2 mt-5">
          <div className="money-container income d-flex align-items-center p-4">
            <img
              src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
              alt="income"
              className="money-image"
            />
            <div className="">
              <p className="money-heading mb-0">Your Income</p>
              <p className="money mt-0" testId="incomeAmount">
                RS {income}
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4  mt-5">
          <div className="money-container expenses d-flex align-items-center p-4">
            <img
              src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png "
              alt="expenses"
              className="money-image"
            />
            <div className="">
              <p className="money-heading mb-0">Your Expenses</p>
              <p className="money mt-0" testId="expensesAmount">
                RS {expenses}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
