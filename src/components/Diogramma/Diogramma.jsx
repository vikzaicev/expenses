import { DiogrammaItem } from "../DiogramItem/DiogramItem"
import styles from "./styles.module.css"

export const Diogramma = (props) => {

    const arrMount = [
        { name: 'янв', value: 0 },
        { name: 'фев', value: 0 },
        { name: 'март', value: 0 },
        { name: 'апр', value: 0 },
        { name: 'май', value: 0 },
        { name: 'июнь', value: 0 },
        { name: 'июль', value: 0 },
        { name: 'авг', value: 0 },
        { name: 'сен', value: 0 },
        { name: 'окт', value: 0 },
        { name: 'нояб', value: 0 },
        { name: 'дек', value: 0 },
    ]
    props.data.forEach(element => {
        arrMount[new Date(element.date).getMonth()].value += +element.sum
    });
    const maxValueArr = arrMount.map((cost) => cost.value)
    const sumAll = maxValueArr.reduce((a, b) => a + b, 0)

    return (
        <>
            <div className={styles.box}>
                <DiogrammaItem costs={arrMount} maxValueArr={maxValueArr} />
            </div>
            <div className={styles.title}>Сумма расход за год {sumAll} тг</div>
        </>
    )
}