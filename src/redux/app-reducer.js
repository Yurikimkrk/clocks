import {
  DEFAULT_CITY_ID, DEFAULT_NUMBER_OF_CLOCKS, SET_LOADING, SET_GMT,
  SET_INFO_VISIBLE, SET_TIMEZONES, SET_NUMBER_OF_CLOCKS, TICK, GMT_TIME
} from './variables'


const defaultState = {
  time: Date.now(),
  timezones: [],
  isLoading: true,
  isInfoVisible: false,
  defaultCity: DEFAULT_CITY_ID,
  numberOfClocks: DEFAULT_NUMBER_OF_CLOCKS,
  gmtTime: GMT_TIME
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
    case SET_INFO_VISIBLE:
      return {
        ...state,
        isInfoVisible: action.bool
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
    case SET_GMT:
      return {
        ...state,
        gmtTime: action.bool
      }
    default:
      return state
  }
}

export const updateTime = () => ({type: TICK})
export const setLoading = (bool) => ({type: SET_LOADING, bool})
export const setInfoVisible = (bool) => ({type: SET_INFO_VISIBLE, bool})
export const setTimezones = (timezones) => ({type: SET_TIMEZONES, timezones})
export const setNumberOfClocks = (numberOfClocks) => ({type: SET_NUMBER_OF_CLOCKS, numberOfClocks})
export const setGmt = (bool) => ({type: SET_GMT, bool})

export default appReducer