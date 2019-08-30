import *as React from 'react'
import { Button } from 'antd'
import *as styles from './index.scss'
// import 'antd/lib/button/style/index.less'
import Children from '@components/TestChildren'
import { StoreExt } from '@untils/ReactExt'
import { ComponentExt } from '@untils/ReactExt'
// class Test extends React.Component{
class Test extends ComponentExt{
    state: { arr: { "userName": string; "text": string; "result": boolean; }[]; };
    // constructor() {
    //     super();
    //     this.state = {
    //         arr: [{
    //             "userName": "fangMing", "text": "123333", "result": true
    //         }, {
    //             "userName": "zhangSan", "text": "345555", "result": false
    //         }, {
    //             "userName": "liSi", "text": "567777", "result": true
    //         }, {
    //             "userName": "wangWu", "text": "789999", "result": true
    //         },]
    //     }
    // }
    showmsg = ()=>{
        this.$message.success("正确弹出")
    }
    render(){
        return (
            <div className={styles.test}> 
                <Children  />
                <Button type="primary" onClick={this.showmsg}>1234</Button>
            </div>
        )
    }
}

export default Test