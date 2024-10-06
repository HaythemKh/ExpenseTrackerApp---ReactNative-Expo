import { View, Text } from "react-native";
import React, { useContext } from "react";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { ExpensesContext } from "../store/expenses-context";

const AllExpensesScreen = () => {
  const expensesContext = useContext(ExpensesContext);

  return (
    <ExpensesOutput
      expenses={expensesContext.expenses}
      expensesPeriod={"Total"}
      fallbackText="No registered expenses found! "
    />
  );
};

export default AllExpensesScreen;
