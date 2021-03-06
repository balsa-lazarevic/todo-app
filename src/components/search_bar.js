import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {term: ''};
    }

    render () {
        return (
          <div className="search-bar row">
                <div className="form-group col-sm-8">
                  <label htmlFor="input-term" className="sr-only">Input term</label>
                  <input
                    type="text"
                    className="form-control"
                    id="input-term"
                    placeholder="Search tasks"
                    value={this.state.term}
                    onChange={event => this.onInputChange(event.target.value)}/>
                </div>
          </div>
        );
    }
    onInputChange(term) {
      this.setState({term});
      //Mijenja state za search
      this.props.changeSearchTerm({term});
    }

}

export default SearchBar;
