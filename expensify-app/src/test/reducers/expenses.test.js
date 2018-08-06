import expensesReducer from "../../reducers/expenses";


test('should ', () => {
  const action = expensesReducer(undefined,{ type: "@@INIT"});
  expect(action).toEqual([])
})
