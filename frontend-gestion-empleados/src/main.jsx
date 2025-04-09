import React from 'react'
import ReactDOM from 'react-dom/client'
import { Switch, Route, Redirect } from 'wouter'
import View from './Components/View/View.jsx'
import Guard from './Components/Guard/index.jsx'
import Provider from './context/Provider.jsx'
import Auth from './pages/Auth/index.jsx'
import Createemployee from './Components/Createemployee/index.jsx'

const App = () => {
  return (
    <Provider>
      <Switch>
      <Route path='/login' component={Auth} />
        <Route path='/'>
          <Guard component={View} />
        </Route>
        <Route path='/new-employee' >
          <Guard component={Createemployee} />
        </Route>
        <Redirect to='/login'/>
      </Switch>
    </Provider>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
