import { createContext, useReducer } from "react";
const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "A pair of shoes",
    amount: 59.99,
    date: new Date("2021-12-19"),
  },
  {
    id: "e2",
    description: "A pair of trousers",
    amount: 89.29,
    date: new Date("2022-01-15"),
  },
  {
    id: "e3",
    description: "Some bananas",
    amount: 5.99,
    date: new Date("2022-04-13"),
  },
  {
    id: "e4",
    description: "A book",
    amount: 14.99,
    date: new Date("2022-06-05"),
  },
  {
    id: "e5",
    description: "Another book",
    amount: 18.59,
    date: new Date("2022-08-22"),
  },
  {
    id: "e6",
    description: "Some shirts",
    amount: 50.6,
    date: new Date("2023-01-10"),
  },
  {
    id: "e7",
    description: "A bike",
    amount: 25.2,
    date: new Date("2023-06-05"),
  },
  {
    id: "e8",
    description: "laptop",
    amount: 1800.5,
    date: new Date("2023-08-22"),
  },
  {
    id: "e9",
    description: "Some clothes",
    amount: 78.58,
    date: new Date("2023-09-17"),
  },
  {
    id: "e10",
    description: "A skirt",
    amount: 25.99,
    date: new Date("2024-09-05"),
  },
  {
    id: "e11",
    description: "basketball",
    amount: 60.0,
    date: new Date("2024-09-07"),
  },
];

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { description, amount, date }) => {},
});

const expenseReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      const Id = new Date().toString() + Math.random().toString();
      return [{ ...action.payload, id: Id }, ...state];
    case "UPDATE":
      const updatableExpenseIndex = state.findIndex(
        (expense) => expense.id === action.payload.id
      );

      const updatableExpense = state[updatableExpenseIndex];
      const updateItem = { ...updatableExpense, ...action.payload.data };

      const updatedExpenses = [...state];
      updatedExpenses[updatableExpenseIndex] = updateItem;
      return updatedExpenses;
    case "DELETE":
      return state.filter((expense) => expense.id !== action.payload);
    default:
      return state;
  }
};

const ExpensesContextProvider = ({ children }) => {
  const [expenseState, dispatch] = useReducer(expenseReducer, DUMMY_EXPENSES);

  const addExpense = (expenseData) => {
    dispatch({ type: "ADD", payload: expenseData });
  };
  const updateExpense = (id, expenseData) => {
    dispatch({ type: "UPDATE", payload: { id: id, data: expenseData } });
  };
  const deleteExpense = (id) => {
    dispatch({ type: "DELETE", payload: id });
  };

  const value = {
    expenses: expenseState,
    addExpense: addExpense,
    updateExpense: updateExpense,
    deleteExpense: deleteExpense,
  };
  return (
    <ExpensesContext.Provider value={value}>
      {children}
    </ExpensesContext.Provider>
  );
};
export default ExpensesContextProvider;
