import React from "react";

import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  }

 const handlePassDataToExpenses=(data_id)=>{
  props.onDelete(data_id)
 }

  return (
    <ul className="expenses-list">
      {props.items.map((expense) => (
        <ExpenseItem
        id={expense.id}
          key={Math.random()}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          onDelete={handlePassDataToExpenses}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
