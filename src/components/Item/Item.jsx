import styles from "./styles.module.css"

export const Item = (props) => {
    const data = props.data.filter(item => item.date.includes(props.year))

    return (
        <div >
            {
                data.map((cost) => (
                    <div className={styles.block} key={cost.id}>
                        <div className={styles.date}>{cost.date}</div>
                        <div className={styles.name}>{cost.name}</div>
                        <div className={styles.sum}>{cost.sum}тг</div>
                    </div>
                ))
            }
        </div>

    )
}