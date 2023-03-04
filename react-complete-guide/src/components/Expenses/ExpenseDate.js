import react from "react";
import "./ExpenseDate.css";

const ExpenseDate = (props) => {
  const dateFormat = {
    month: props.date.toLocaleString("en-US", { month: "long" }),
    year: props.date.getFullYear(),
    day: props.date.toLocaleString("en-US", { day: "numeric" }),
  };
  return (
    <div className="expense-date">
      <div className="expense-date__month">{dateFormat.month}</div>
      <div className="expense-date__year">{dateFormat.year}</div>
      <div className="expense-date__day">{dateFormat.day}</div>
    </div>
  );
};

export default ExpenseDate;
