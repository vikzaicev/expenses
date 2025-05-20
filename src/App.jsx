import './App.css'
import { Title } from './components/Title/Title'
import { Forms } from './components/Forms/Forms'
import { Cart } from './components/Cart/Cart'
import 'normalize.css'
import './Codewars'
import { useState } from 'react'
import { Footer } from './components/Footer/Footer'

// localStorage.clear()
let DATA = []
const localStorageData = JSON.parse(localStorage.getItem('data'));
if (localStorageData) {
  DATA = [...localStorageData]
}

function App() {
  const [data, setData] = useState(DATA)

  const addDateHendler = (expense) => {

    setData((prevData) => {
      localStorage.setItem('data', JSON.stringify([expense, ...prevData]));
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
