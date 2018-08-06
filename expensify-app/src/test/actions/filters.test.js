import { sortByAmount, sortByDate, setEndDate, setStartDate, setTextFilter } from "../../actions/filters";

test('should setup text action object', () => {
  const action = setTextFilter();
  expect(action).toEqual({
      type: 'SET_TEXT_FILTER',
      text: ''
  })
})

test('should setup sortBy action object', () => {
  const action = sortByDate('10101');
  expect(action).toEqual({
      type: 'SORT_BY_DATE',
      
  })
})

test('should setup sortBy action object', () => {
    const action = sortByAmount('10101');
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT',
        
    })
  })
  
  test('should setup startDate action object', () => {
    const action = setStartDate('100');
    expect(action).toEqual({
        type: 'START_DATE',
        startDate: '100'
    })
  })

  test('should setup endDate action object', () => {
    const action = setEndDate('100');
    expect(action).toEqual({
        type: 'END_DATE',
        endDate: '100'
    })
  })
  
