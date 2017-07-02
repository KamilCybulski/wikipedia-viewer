import React from 'react';
import PropTypes from 'prop-types';

import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';


class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ""
    }
  }

  handleChange = (e) => {
    this.setState({ query: e.target.value })
  }

  render() {
    return (
      <div className="form">
          <div className="input">
            <TextField 
                id="searchQuery"
                value={this.state.query}
                onChange={this.handleChange}
            />
          </div>
          <div className="buttons">
            <RaisedButton 
              primary 
              label="Search" 
              onTouchTap={() => this.props.submit(this.state.query)} />
            <RaisedButton 
              primary 
              label="Random" 
              onTouchTap={this.props.getRandom} />
        </div>
      </div>
    );
  }
}
SearchForm.propTypes = {
  submit: PropTypes.func.isRequired,
  getRandom: PropTypes.func.isRequired
};

export default SearchForm;
