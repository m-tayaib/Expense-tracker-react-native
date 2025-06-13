import { View, StyleSheet, Text } from "react-native"
import ExpenseSummary from './ExpenseSummary'
import ExpensesList from './ExpensesList'
import { GlobalStyles } from '../../consts/styles';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    description: 'New pair of shoes',
    amount: 59.99,
    date: new Date('2025-01-15')
  },
  {
    id: 'e2',
    description: 'Grocery shopping',
    amount: 89.45,
    date: new Date('2025-02-20')
  },
  {
    id: 'e3',
    description: 'Movie tickets',
    amount: 24.99,
    date: new Date('2025-03-05')
  },
  {
    id: 'e4',
    description: 'Restaurant dinner',
    amount: 75.50,
    date: new Date('2025-04-12')
  },
  {
    id: 'e5',
    description: 'Gym membership',
    amount: 45.00,
    date: new Date('2025-05-18')
  },
  {
    id: 'e6',
    description: 'Book purchase',
    amount: 19.99,
    date: new Date('2025-06-25')
  }
];
function ExpensesOutput({ expenses, expensesPeriod }) {
  return (
    <View style={styles.container}>
      <ExpenseSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  )
}

export default ExpensesOutput



const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 0,
    backgroundColor: GlobalStyles.colors.primary700
  }
});
