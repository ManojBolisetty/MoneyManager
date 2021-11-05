import './index.css'

const TransactionItem = ({details, deleteTransaction}) => {
  const {id, title, amount, type} = details
  const onDeleteTransaction = () => {
    deleteTransaction(id)
  }
  return (
    <li className="table-row">
      <p className="cell column">{title}</p>
      <p className="cell column">RS {amount}</p>
      <p className="cell column">{type}</p>
      <button
        onClick={onDeleteTransaction}
        type="button"
        className="btn"
        testId="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png "
          alt="delete"
          className="deleteButton"
        />
      </button>
    </li>
  )
}

export default TransactionItem
