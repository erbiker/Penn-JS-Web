class FontChooser extends React.Component {


    constructor(props) {
		super(props);
		this.min, this.max, this.size;
		(parseInt(this.props.min) <= 0) ? (this.min = 1) : (this.min = parseInt(this.props.min));
		(parseInt(this.props.max) < this.min) ? (this.max = this.min) : (this.max = parseInt(this.props.max));
		(parseInt(this.props.size) < this.min) ? (this.size = this.min) : (this.size = parseInt(this.props.size));
		(this.props.size > this.max) ? (this.size = this.max) : (this.size = this.size);

		this.state = {size: this.size, bold: this.props.bold === 'true' ? true : false, hidden: true};

    }

	textClick() {
		this.setState({hidden: !this.state.hidden});
	}

	sizeDoubleClick() {
		this.setState({size: this.size});
	}

	increaseClick() {
		this.setState({size: this.state.size < this.max ? this.state.size + 1 : this.state.size});
	}

	decreaseClick() {
		this.setState({size: this.state.size > this.min ? this.state.size - 1 : this.state.size});
	}

	checkUncheck () {
		this.setState({bold: !this.state.bold});
	}


	

    render() {
		let color = this.state.size >= this.max || this.state.size <= this.min ? 'red' : 'black';
		let style = {fontSize: this.state.size, fontWeight: this.state.bold ? "bold" : "normal"};
	return(
		<div>
		<input type="checkbox" id="boldCheckbox" onChange = {this.checkUncheck.bind(this)} hidden={this.state.hidden} checked={this.state.bold}/>
		<button id="decreaseButton" onClick = {this.decreaseClick.bind(this)} hidden={this.state.hidden}>-</button>
		<span id="fontSizeSpan" 
			hidden={this.state.hidden}
			style={{color: color}}
			onDoubleClick = {this.sizeDoubleClick.bind(this)}>
				{this.state.size}
		</span>
		<button id="increaseButton" onClick = {this.increaseClick.bind(this)} hidden={this.state.hidden}>+</button>
		<span id="textSpan" 
			onClick = {this.textClick.bind(this)}
			style={style}>
				{this.props.text}
		</span>
		</div>
	);
    }
}

