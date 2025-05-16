import styles from "./styles.module.css"
import { useState } from 'react'
import { Item } from "../Item/Item"
import { Filter } from "../Filter/Filter"

export const Cart = (props) => {
    const [year, setYear] = useState("2025")

    const yearHandler = (year) => {
        setYear(year);
    }
    const data = props.data.filter(item => item.date.includes(year))

    return (
        <div>
            <Filter year={year} onYear={yearHandler} data={data} />
            <Item year={year} data={data} />
        </div>
    )
}