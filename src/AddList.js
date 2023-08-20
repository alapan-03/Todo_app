import React, { useState } from "react"
import List from "./List"

// const [list, setList] = useState()
export default class AddList extends React.Component {
    
    state = {
        "title": "",
        "sub": "",
        "complete": false,
        c:0
    }
    
    add=(e)=>{
        var c = 0;
        e.preventDefault()
        const trimmedTitle = this.state.title.trim();

        if(trimmedTitle.length>=1){
        this.props.handler(this.state)
        document.body.style.transition = "0.5s"
        }
        this.setState({title:"", c:c+1})
        
    }

    
    render(){
        const getTitle = (title) => {
            this.getTitle(title)
        }

        // let a = document.getElementsByClassName("edit")[0]

        // a.addEventListener("click", ()=>{
        //     a.document.style.border = "2px solid black"
        // })


    return(
        <>
        <form onSubmit={this.add} className="text-center w-100" style={{display:"flex", justifyContent:"center", width:"100%"}}>
        <input class="form-control container mt-5 w-25 mx-5" type="text" placeholder="Default input" aria-label="default input example" value={this.state.title} 
        onChange={e => this.setState({title: e.target.value})} 
        // onChange={e => this.setState((e)=>this.add2)}
        style={{width:"10000px"}}/>
        </form>
        </>
    )
    }
}