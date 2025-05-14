import { useState } from "react";
import styles from "./styles.module.css"

export const Forms = (props) => {
    const [inputName, setInputName] = useState("")
    const [inputSum, setInputSum] = useState("")
    const [inputDate, setInputDate] = useState("")

    const nameInputHandler = (e) => {
        setInputName(e.target.value);
    }
    const sumInputHandler = (e) => {
        setInputSum(e.target.value);
    }
    const dateInputHandler = (e) => {
        setInputDate(e.target.value);
    }

    const formHandler = (e) => {
        e.preventDefault()
        const expense = {
            name: inputName,
            sum: inputSum,
            date: inputDate,
            id: new Date().getMilliseconds()
        }
        props.onAddDateHandler(expense);

        setInputName('')
        setInputSum('')
        setInputDate('')
    }

    return (
        <form className={styles.form} onSubmit={formHandler}>
            <div className={styles.block}>
                <input className={styles.input} onChange={nameInputHandler} value={inputName} placeholder="Название" />
                <label className={styles.label} >Название</label>
            </div>
            <div className={styles.block}>
                <input className={styles.input} onChange={sumInputHandler} value={inputSum} type="number" placeholder="Стоимость" />
                <label className={styles.label} >Стоимость</label>
            </div>
            <div className={styles.block}>
                <input className={styles.input} onChange={dateInputHandler} value={inputDate} type="date" placeholder="Дата" />
                <label className={styles.label} >Дата</label>
            </div>
            <button className={styles.btn} type="submit">Добавить расход</button>
        </form>
    )
}