import './App.css'
import { Title } from './components/Title/Title'
import { Forms } from './components/Forms/Forms'
import { Cart } from './components/Cart/Cart'
import 'normalize.css'
import './Codewars'
import { useState } from 'react'
import { Footer } from './components/Footer/Footer'

const DATA = []

function App() {
  const [data, setData] = useState(DATA)

  const addDateHendler = (expense) => {
    setData((prevData) => {
      return [expense, ...prevData]
    })
  }

  return (
    <>
      <Title />
      <Forms onAddDateHandler={addDateHendler} />
      <Cart data={data} />
      <Footer />
    </>
  )
}

export default App
