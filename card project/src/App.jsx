import React from 'react'
import Child from './component/Child'
import Home from './pages/Home'
import About from './pages/About'
import Skill from './pages/Skill'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Counter from './component/Counter'
const App = () => {
  var f = ["apple", "orange", "mango"]
  var user = { username: "Dharanya", userpassword: "12355" }
  return (
    <div>
      <Child name="Dharanya" phone="1234567899" dept="IT" />
      <Child name="Dharan" phone="1234567899" dept="IT" />
      <Home items={f} users={user} />
      <Login />
      <About />
      <Skill />
      <Contact />
      <Counter />
    </div>
  )
}
export default App