import { observable, action } from 'mobx'

export class GlobalStore{
    @observable
    num : number = 1

    @action
    increase = (num:number)=>{
        console.log('增加',num)
        this.num += num
    }

    @action
    decrease = (num:number)=>{
        this.num -= num
    }
}


export default new GlobalStore()