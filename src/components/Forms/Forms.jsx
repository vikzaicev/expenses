import { useState } from "react";
import styles from "./styles.module.css"

export const Forms = (props) => {
    const [inputName, setInputName] = useState("")
    const [inputSum, setInputSum] = useState("")
    const [inputDate, setInputDate] = useState("")
    const [openForm, setOpenForm] = useState(true)

    const btnOpenHandler = () => {
        setOpenForm(false)
    }
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

        if (inputName.trim().length == 0) {
            setInputName('')
            setInputSum('')
            setInputDate('')
            setOpenForm(true)
            return
        }

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
        setOpenForm(true)
    }

    const btnHandler = () => {
        setInputName('')
        setInputSum('')
        setInputDate('')
        setOpenForm(true)
    }

    return (
        <>
            {!openForm && <form className={styles.form} onSubmit={formHandler}>
                <div className={styles.block}>
                    <input className={styles.input} onChange={nameInputHandler} value={inputName} required="required" placeholder="Название" />
                    <label className={styles.label} >Название</label>
                </div>
                <div className={styles.block}>
                    <input className={styles.input} onChange={sumInputHandler} value={inputSum} type="number" required="required" placeholder="Стоимость" />
                    <label className={styles.label} >Стоимость</label>
                </div>
                <div className={styles.block}>
                    <input className={styles.input} onChange={dateInputHandler} value={inputDate} type="date" required="required" min="2023-01-01" max="2030-12-31" placeholder="Дата" />
                    <label className={styles.label} >Дата</label>
                </div>
                <div className={styles.btn__block}>
                    <button className={styles.btn} type="submit">Добавить расход</button>
                    <button className={styles.btn} onClick={btnHandler} type="reset">Отмена</button></div>
            </form>}
            {openForm && <div className={styles.form}>
                <button className={styles.btn} onClick={btnOpenHandler}>Добавить новый расход</button>
            </div>
            }

        </>
    )
}