import React, { useState } from "react";
import Card from "../UI/Card";
import "./Expense.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expense = (props) => {
  const [selectedDropDown, setSelectedDropDown] = useState(2019);

  const addExpenseFilterHandler = (filter) => {
    setSelectedDropDown(filter);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === selectedDropDown;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={selectedDropDown}
          onAddExpenseFilter={addExpenseFilterHandler}
        />
        <ExpensesChart expenses = {filteredExpenses} />
        <ExpensesList items = {filteredExpenses}/>
      </Card>
    </div>
  );
};

export default Expense;
