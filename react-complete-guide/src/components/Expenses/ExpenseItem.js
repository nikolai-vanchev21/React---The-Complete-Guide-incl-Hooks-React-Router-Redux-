import { react } from "react";
import "./ExpenseItem.css";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
const ExpenseItem = (props) => {
  const deleteExpenseBtnHandler = (event) => {
    props.onDelete(event.target.closest(".expense-item").dataset.id);
  };

  return (
    <li data-id={props.id} className={'expense-item'}>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">{props.amount}</div>
        </div>
        <button onClick={deleteExpenseBtnHandler} className='expense-delete'>Delete Expense</button>
      </Card>
    </li>
  );
};

export default ExpenseItem;
