
import './App.css'
import AuthUser from './components/AuthUser'
import SignIn from './components/signin/SignIn'
import SignUp from './components/signin/SignUp'

function App() {

  return (
    <div className="App">
      <SignIn/>
      <SignUp/>
      <AuthUser/>
    </div>
  )
}

export default App
