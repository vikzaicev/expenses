import './App.css'
import { Title } from './components/Title/Title'
import { Forms } from './components/Forms/Forms'
import { Cart } from './components/Cart/Cart'
import 'normalize.css'
import './Codewars'
import { useState } from 'react'

const DATA = []

function App() {
  const [data, setData] = useState(DATA)
  const [year, setYear] = useState("2025")

  const addDateHendler = (expense) => {
    setData((prevData) => {
      return [expense, ...prevData]
    })
  }
  const addYear = (year1) => {
    setYear(year1);
  }

  return (
    <>
      <Title />
      <Forms onAddDateHandler={addDateHendler} />
      <Cart year={year} data={data} onAddYearHandler={addYear} />
    </>
  )
}

export default App
