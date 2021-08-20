import React, {useEffect} from 'react'
import './App.sass'
import {Container} from 'react-bootstrap'
import {timezonesRequest} from './requests/requests'
import {setTimezones, setLoading} from './redux/app-reducer'
import {useDispatch, useSelector} from 'react-redux'
import {CityBlock} from './components/CityBlock/CityBlock'
import {NavBar} from './components/NavBar/NavBar'


const App = () => {
  const dispatch = useDispatch()
  const isLoading = useSelector(state => state.app.isLoading)
  const numberOfClocks = useSelector(state => state.app.numberOfClocks)
  const clocks = []
  for (let i = 0; i < numberOfClocks; i++) {
    clocks[i] = i + 1
  }

  useEffect(() => {
    timezonesRequest().then((data) => {
      dispatch(setTimezones(data))
    }).finally(() => dispatch(setLoading(false)))
  },[])

  if(isLoading) {
    return <div> LOADING!!!</div>
  }

    return (
      <div>
        <NavBar/>
        <Container>
          <div className={'clocks-box'}>
            {clocks.map(i => <CityBlock key={i}/>)}
          </div>
        </Container>
      </div>
    )
}

export default App
