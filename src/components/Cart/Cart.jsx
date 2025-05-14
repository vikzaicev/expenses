import styles from "./styles.module.css"
import { Item } from "../Item/Item"
import { Filter } from "../Filter/Filter"

export const Cart = (props) => {

    const yearHandler = (year) => {
        props.onAddYearHandler(year);
    }

    return (
        <div>
            <Filter year={props.year} onYear={yearHandler} />
            <Item year={props.year} data={props.data} />
        </div>
    )
}