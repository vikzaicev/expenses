import { Diogramma } from "../Diogramma/Diogramma"
import styles from "./styles.module.css"

export const Filter = (props) => {

    const selectHandler = (e) => {
        props.onYear(e.target.value)
    }

    return (
        <div className={styles.box}>
            <div className={styles.top}>
                <div className={styles.titli}>Выбор по году</div>
                <div className={styles.filter}>
                    <form>
                        <select className={styles.select} onChange={selectHandler} value={props.year} >
                            <option value="2023">2023</option>
                            <option value="2024">2024</option>
                            <option value="2025">2025</option>
                        </select>
                    </form>
                </div>
            </div>
            <Diogramma data={props.data} />
        </div>
    )
}