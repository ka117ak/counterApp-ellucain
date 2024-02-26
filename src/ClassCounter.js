import { Component } from 'react';
import './App.css';
import Button from '@mui/material/Button';

export class ClassCounter extends Component{
    constructor(props){
        super(props);
        this.state = {counter:0};
    }

    Addvalue = () => {
        this.setState({counter:this.state.counter+1});
    }

    Deletevalue = () =>{
        this.setState({counter:this.state.counter-1});
    }
    
    render() {
        return <div className='counter'>
            <h2 className='title'>This counter use React Class componenets</h2>
            <div className='display'>
                <Button variant="contained" onClick={this.Addvalue} className='leftButton'>Increment</Button>
                <br/>
                <span className='counterValue'>{this.state.counter}</span>
                <br/>
                <Button variant="contained" onClick={this.Deletevalue} className='rightButton'>Decrement</Button>
        </div>
        </div>
    }
}

