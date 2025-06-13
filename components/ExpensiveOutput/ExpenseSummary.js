import { View } from 'react-native';

function ExpenseSummary({ expenses, PeriodName }) {
  const totalExpense = expenses.reduce((sum, expense) => {
    return sum += expense.amount
  }, 0)
  return (
    <View>
      <Text>{PeriodName}</Text>
      <Text>${totalExpense.toFixed(2)}</Text>
    </View>
  )
}

export default ExpenseSummary