import React,{ createRef, PureComponent } from "react";

class PureComp extends PureComponent{
    constructor(){
        super()
        this.state={
            name:" "
            
        }
        this.input = createRef()
        this.counter = 0
    }
    handelChangeName = ()=>{
        this.setState({
            name : this.input.current.value
        })
    }
    render(){
        return(
            <div className="form-fa-group text-center mt-4 p-3">
                <h4 className="text-center text-danger"> guess what!!</h4>
                <div className="input-field">
                    <input ref={this.input}
                        placeholder="Please Insert One Word..." type="text" />
                </div>


                <button className="btn first my-3" 
                onClick={this.handelChangeName}>SEND</button>

                <button className="btn first" 
                onClick={()=>{this.input.current.value=""}}>HIDE</button>

                <br />
                <span className="badge badge-light my-4">{this.counter++}</span>

            </div>
        )
    }

}
export default PureComp;