//You always need to import React, even if you're not explicitly calling it.

import React, { Component } from 'react';  //import React.Component as Component (ES6 destructuring)

//ES6 class:
//extends functionality of React Component
class SearchBar extends Component {  
	//basically calling the constructor of the class while inheriting from the parent class.
	constructor(props) {
		super(props);

		//how you instantiate state in a React component (only time we treat state like this!)
		this.state = {term: ''};
	}
	//how you define methods on ES6 classes; all React Components must have render method
	render() { 
		// onChange is available on all elements; {} evaluates the JS inside the HTML
		return (
			<div className="search-bar">
				<input onChange={event => this.onInputChange(event.target.value)} value={this.state.term} />
			</div>
			)
	}
	
	//convention is either onElementChange or handleElementChange
	onInputChange(term) {
		this.setState({term});
		this.props.onSearchTermChange(term);
	}
}

export default SearchBar;