import React, {Component} from 'react';
import './App.css';
import {sampleText} from './sampleText'
import marked from 'marked';
import Membre from "./components/Membre";
import Button from "./components/Button";
const famille = {
    membre1: {
        nom:'Ali',
        age:34
    },
    membre2: {
        nom:'Yesmine',
        age:22
    },
    membre3: {
        nom: 'Rible',
        age: 8
    },

}
class App extends Component {
    state = {
        text: sampleText,
        famille:famille,
        isShow: false
    }

    handleShowDecription = () =>{
    const isShow = !this.state.isShow
        this.setState({isShow})
    }
    handleChange = (event,membre) =>{
        const famille = {... this.state.famille}
        const nom = event.target.value
        famille[membre].nom = nom
        this.setState({famille})
    }
    handleClick = () =>{
        const famille = {... this.state.famille}
        famille.membre1.age +=1
        this.setState(famille)
    }
    hideName = id =>{
        const famille = { ...this.state.famille }
        famille[id].nom = 'X'
        this.setState(famille)
    }
    render() {
        const {famille,isShow} = this.state
        let description = null
        if(isShow){
            description = "je suis enfant"
        }
        const liste = Object.keys(famille).map(membre =>(
            <Membre
                handleChange={event =>this.handleChange(event,membre)}
                key={membre}
                hideName={() =>this.hideName(membre)}
                nom={famille[membre].nom}
                age={famille[membre].age}/>
        ))
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-6">{
                        liste
                    }

                        <Button vieillir={this.handleClick}/>
                    </div>
                </div>
            </div>
        )
    }


    // handleChange = event => {
    //     const text = event.target.value
    //     this.setState({text})
    // }
    //
    // renderText = text => {
    //     const __html = marked(text, {});
    //     return {__html}
    // }
    //
    // componentDidMount() {
    //     const text = localStorage.getItem('text')
    //     console.log(text)
    //     if (text) {
    //         this.setState({text})
    //     } else {
    //         this.setState({text: sampleText})
    //     }
    // }
    //
    // componentDidUpdate(prevProps, prevState, snapshot) {
    //     const {text} = this.state
    //     localStorage.setItem('text', text)
    //     console.log(2)
    // }

    // render() {
    //     return (
    //         <div className="container">
    //             <div className="row">
    //                 <div className="col-sm-6">
    //                     <textarea className="form-control" rows="35" onChange={this.handleChange}
    //                               value={this.state.text}/>
    //                 </div>
    //                 <div className="col-sm-6">
    //                     <div dangerouslySetInnerHTML={this.renderText(this.state.text)}/>
    //                 </div>
    //             </div>
    //
    //         </div>
    //     );
    //
    // }
}


export default App;
