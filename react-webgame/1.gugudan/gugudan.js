class GuGuDan extends React.Component{

    state = {
        first : Math.ceil(Math.random() * 9),
        second : Math.ceil(Math.random() * 9),
        value : '',//입력창
        result : '',//결과값
    }
    
    
    onSubmit = (e) => {
        e.preventDefault();
        let resultTmp = this.state.first * this.state.second;
        if(parseInt(this.state.value) === resultTmp){
            this.setState({
                result : this.state.value + " 정답!",
                first : Math.ceil(Math.random() * 9),
                second : Math.ceil(Math.random() * 9),
                value : ''
            })
            
        }else{
            this.setState({
                result : "땡!",
                value : ''
            })
        }
    }

    render(){
        return(
            <fragment>
                <div>{this.state.first} 곱하기 {this.state.second}는?</div>
                <form onSubmit={this.onSubmit}>
                    <input type="number" value={this.state.value} 
                        onChange = {(e) => this.setState({value : e.target.value})}/>
                    <button>입력!</button>
                </form>
                <div>{this.state.result}</div>
            </fragment>
       );
        
    }

}

ReactDOM.render(<GuGuDan/>,document.querySelector('#root'));