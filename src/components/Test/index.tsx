import *as React from 'react'
import { Button } from 'antd'
import *as styles from './index.scss'
// import 'antd/lib/button/style/index.less'
import { ComponentExt } from '@untils/ReactExt'
// class Test extends React.Component{
class Test extends ComponentExt{
    showmsg = ()=>{
        this.$message.success("正确弹出")
    }
    render(){
        return (
            <div className={styles.test}> 
                <Button type="primary" onClick={this.showmsg}>1234</Button>
            </div>
        )
    }
}

export default Test