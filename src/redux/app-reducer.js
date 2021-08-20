import {
  DEFAULT_CITY_ID, DEFAULT_NUMBER_OF_CLOCKS, SET_LOADING,
  SET_TIMEZONES, SET_NUMBER_OF_CLOCKS, TICK
} from './constants'


const defaultState = {
  time: Date.now(),
  timezones: [],
  isLoading: true,
  defaultCity: DEFAULT_CITY_ID,
  numberOfClocks: DEFAULT_NUMBER_OF_CLOCKS
}

const appReducer = (state = defaultState, action) => {
  switch (action.type) {
    case TICK:
      return {
        ...state,
        time: Date.now()
      }
    case SET_LOADING:
      return {
        ...state,
        isLoading: action.bool
      }
    case SET_TIMEZONES:
      return {
        ...state,
        timezones: action.timezones
      }
    case SET_NUMBER_OF_CLOCKS:
      return {
        ...state,
        numberOfClocks: action.numberOfClocks
      }
    default:
      return state
  }
}

export const updateTime = () => ({type: TICK})
export const setLoading = (bool) => ({type: SET_LOADING, bool})
export const setTimezones = (timezones) => ({type: SET_TIMEZONES, timezones})
export const setNumberOfClocks = (numberOfClocks) => ({type: SET_NUMBER_OF_CLOCKS, numberOfClocks})

export default appReducer