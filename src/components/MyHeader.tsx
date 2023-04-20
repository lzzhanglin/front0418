import styles from './MyHeader.less'
import {Avatar, Input} from 'antd'

const {Search} = Input

const MyHeader = () =>{

    const onSearch = (v) => {

    }

    return (
        <div className={styles.myHeader}>
            <div className={styles.leftAvatar}>
                
            </div>
            <div className={styles.rightBox}>
                <div className={styles.searchButton}>
                    <Search placeholder="input search text" allowClear onSearch={onSearch} style={{ width: 200 }} />
                </div>
                <div className={styles.avatar}>
                    <Avatar />
                </div>
            </div>
        </div>
    )
}

export default MyHeader