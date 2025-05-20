import styles from "./styles.module.css"
import { useState } from 'react'
import { Item } from "../Item/Item"
import { Filter } from "../Filter/Filter"

export const Cart = (props) => {
    const currentYear = new Date().getFullYear()

    const [year, setYear] = useState(currentYear)

    const yearHandler = (year) => {
        setYear(year);
    }
    const data = props.data.filter(item => item.date.includes(year))
    const allYear = props.data.map(item => new Date(item.date).getFullYear())
    allYear.push(currentYear)
    const allYearSet = Array.from(new Set(allYear.sort((a, b) => a - b)));

    return (
        <div>
            <Filter year={year} onYear={yearHandler} data={data} allYearSet={allYearSet} />
            <Item year={year} data={data} />
        </div>
    )
}