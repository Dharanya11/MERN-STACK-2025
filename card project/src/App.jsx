import React from 'react'
// import Child from './component/Child'
import Home from './pages/Home'
import About from './pages/About'
import Skill from './pages/Skill'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Counter from './component/Counter'
import Navbar from './component/Navbar'
import { Routes, Route } from 'react-router-dom'
import State from './hooks/State'
import Hooks from './pages/Hooks'
import Effect from './hooks/Effect'
import Signup from './pages/Signup'
import Ref from './hooks/Ref'
import Reducer from './hooks/Reducer'
const App = () => {
  var f = ["apple", "orange", "mango"]
  var user = { username: "Dharanya", userpassword: "12355" }
  return (
    //     <div>

    //       <Child name="Dharanya" phone="1234567899" dept="IT" />
    //       <Child name="Dharan" phone="1234567899" dept="IT" />
    //       <Home items={f} users={user} />
    //       <Login />
    //       <About />
    //       <Skill />
    //       <Contact />
    //       <Counter />
    //       <Navbar/>
    //     </div>
    <div>
      <Navbar />
      <Routes>
        <Route path='/home' element={<Home items={f} users={user} />} />
        <Route path='/about' element={<About items={f} users={user} />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/skill' element={<Skill />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/counter' element={<Counter />} />
        <Route path='/hooks' element={<Hooks />} />
        <Route path='/state' element={<State />} />
        <Route path='/effect' element={<Effect />} />
        <Route path='/ref' element={<Ref />} />
        <Route path='/reducer' element={<Reducer />} />
      </Routes>
    </div>
  )
}
export default App