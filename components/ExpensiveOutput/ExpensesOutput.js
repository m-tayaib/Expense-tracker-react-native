import { View } from "react-native"
import ExpenseSummary from './ExpenseSummary'
import ExpensesList from './ExpensesList'

function ExpensesOutput({ expenses, expensesPeriod }) {
  return (
    <View>
      <ExpenseSummary expenses={expenses} periodName={expensesPeriod} />
      <ExpensesList />
    </View>
  )
}

export default ExpensesOutput