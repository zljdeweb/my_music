import *as React from 'react'
import { Button } from 'antd'
import *as styles from './index.scss'
// import 'antd/lib/button/style/index.less'
// import { ComponentExt } from '@'
class Test extends React.Component{
    render(){
        return (
            <div className={styles.test}> 
                <Button type="primary">1234</Button>
            </div>
        )
    }
}

export default Test