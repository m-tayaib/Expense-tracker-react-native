import { FlatList, View, Text, StyleSheet } from "react-native"
import { GlobalStyles } from "../../consts/styles"


function renderExpenseItem(itemData) {
  return (
    <View style={styles.expenseItem}>
      <View style={styles.expenseInfo}>
        <Text style={styles.textBase}>{itemData.item.description}</Text>
        <Text style={styles.dateText}>{itemData.item.date.toDateString()}</Text>
      </View>
      <View style={styles.amountContainer}>
        <Text style={styles.amount}>${itemData.item.amount.toFixed(2)}</Text>
      </View>
    </View>
  )
}


function ExpensesList({ expenses }) {
  return (
    <FlatList
      data={expenses}
      renderItem={renderExpenseItem}
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={false}
      style={styles.list}
    />
  )
}

export default ExpensesList

const styles = StyleSheet.create({

  expenseItem: {
    padding: 16,
    marginVertical: 8,
    backgroundColor: GlobalStyles.colors.primary50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 12,
    elevation: 3,
    shadowColor: GlobalStyles.colors.gray500,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
  },
  expenseInfo: {
    flex: 1,
  },
  textBase: {
    fontSize: 16,
    fontWeight: '600',
    color: GlobalStyles.colors.gray700,
    marginBottom: 4,
  },
  dateText: {
    fontSize: 12,
    color: GlobalStyles.colors.gray500,
  },
  amountContainer: {
    backgroundColor: GlobalStyles.colors.primary500,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
    minWidth: 80,
    alignItems: 'center',
  },
  amount: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
})