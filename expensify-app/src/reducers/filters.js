import moment from "moment";

// filter Reducer
const filterDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
}
const filterReducer = (state = filterDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return  {
                ...state,
                text: action.text
            }
        case 'SORT_BY_DATE':
        return {
            ...state,
            sortBy: 'date'
        }

        case 'SORT_BY_AMOUNT':
        return {
            ...state,
            sortBy: 'amount'
        } 

        case 'START_DATE':
        return {
            ...state,
            startDate: action.startDate

        }

        case 'END_DATE':
        return {
            ...state,
            endDate: action.endDate
        }
        default:
            return state
    }

}

export default filterReducer;