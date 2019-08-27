import *as React from 'react'
import { Button } from 'antd'
import *as styles from './index.scss'
class Test extends React.Component{
    render(){
        return (
            <div className={styles.test}> 
                <Button>1234</Button>
            </div>
        )
    }
}

export default Test