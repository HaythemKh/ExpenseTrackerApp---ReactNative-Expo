import { View, Text, FlatList } from "react-native";
import ExpenceItem from "./ExpenceItem";

const renderExpenseItem = (itemData) => {
  return <ExpenceItem {...itemData.item} />;
};

const ExpensesList = ({ expenses }) => {
  return (
    <FlatList
      data={expenses}
      renderItem={renderExpenseItem}
      keyExtractor={(item) => item.id}
    />
  );
};

export default ExpensesList;
