import styles from "./styles.module.css"

export const DiogrammaItem = (props) => {

    const maxValue = Math.max(...props.maxValueArr)
    let itemHigth = '0'

    return (
        <>{props.costs.map((cost) => {
            if (maxValue > 0) { itemHigth = Math.round((cost.value / maxValue) * 100) }
            return (
                <div className={styles.mount} key={cost.name}>
                    <div className={styles.block}>
                        <div className={styles.block__fill} style={{ height: itemHigth + '%' }}></div>
                    </div>
                    <div className={styles.title}>{cost.name}</div>
                </div>)
        })}
        </>
    )
}