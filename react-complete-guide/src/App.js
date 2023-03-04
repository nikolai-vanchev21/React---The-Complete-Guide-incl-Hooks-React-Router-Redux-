import { React, useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";


function App() {
  const items = JSON.parse(localStorage.getItem("expenses"));
  let newItems;
  if (items && items.length !== 0) {
    newItems = items.map((item) => {
      return {
        ...item,
        date: new Date(item.date),
      };
    });
  } else {
    newItems = [];
  }
 
  const [enteredExpense, setExpense] = useState(newItems);
  const addExpense = function (expense) {
    setExpense((prevExpense) => [expense, ...prevExpense]);
  };
  localStorage.setItem("expenses", JSON.stringify(enteredExpense));
 
  const removeExpenseFromEnteredExpense = function (data_id) {
    const expensesAfterDelete = enteredExpense.filter(
      (expense) => expense.id !== Number(data_id)
    );
    setExpense(expensesAfterDelete);
  };
 
  return (
    <div>
      <NewExpense onAddExpense={addExpense} />
      <Expenses
        items={enteredExpense}
        onDelete={removeExpenseFromEnteredExpense}
      />
    </div>
  );
}
 
export default App;    
 
