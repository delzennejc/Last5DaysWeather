import React, {Component} from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {fetchWeather} from '../actions/index'


class SearchBar extends Component {
  constructor(props){
    super(props);
    this.state = { text: '' };
  }

  onInputChange(e){
    e.preventDefault();
    this.setState({text: e.target.value});
  }

  onSubmit(e){
    e.preventDefault();
    this.props.fetchWeather(this.state.text);
    this.setState({text: ''});
  }

  render(){
    return <div>
      <form onSubmit={e => this.onSubmit(e)} className="input-group">
        <input
          type="text"
          placeholder="Chercher par ville en France"
          onChange={e => this.onInputChange(e)}
          value={this.state.text}
          className="form-control"
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Chercher</button>
        </span>
      </form>
    </div>
  }
}

export default connect(null, {fetchWeather})(SearchBar)
