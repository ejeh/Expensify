import { addExpense, removeExpense, editExpense } from "../../actions/expenses";

test('should setup removeExpense action object', ()=>{
    const action = removeExpense({id: '123456'})
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123456'
    })

});

test('should setup removeExpense action object', ()=>{
    const action = editExpense('123456',{note:'done'})
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123456',
       updates: {
           note: 'done'
       }       
    })

});

test('should setup addExpense object to provided values', () =>{
    const expenseData = {
            description: 'water rate',
            note: 'cool',
            amount: 10000,
            createdAt: 1000
    }

    const action = addExpense(expenseData)
    expect(action).toEqual({
        type:"ADD_EXPENSE",
        expense:{
            ...expenseData,
            id: expect.any(String)

        }
    })


})

test('should setup addExpense object to default value', ()=>{
    const action = addExpense()
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
           id: expect.any(String),
           description :'',
           note :'',
           amount :'0',
           createdAt :0 
        }
    })
})