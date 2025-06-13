import { View } from "react-native"
import ExpenseSummary from './ExpenseSummary'
import ExpensesList from './ExpensesList'

function ExpensesOutput({ expenses }) {
  return (
    <View>
      <ExpenseSummary />
      <ExpensesList />
    </View>
  )
}

export default ExpensesOutput