import { Component } from 'react';

export class Searchbar extends Component {
  state = {
    searchimg: '',
  };
  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  handelSubmit = e => {
    e.preventDefault();
    this.props.handlFormSubmirt(this.state.searchimg);
    this.setState({ searchimg: '' });
    this.reset();
  };

  reset = () => {
    this.setState({ searchimg: '' });
  };

  render() {
    return (
      <header class="searchbar">
        <form class="form" onSubmit={this.handelSubmit}>
          <button type="submit" class="button">
            <span class="button-label">Search</span>
          </button>

          <input
            name="searchimg"
            class="input"
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
            value={this.state.searchimg}
          />
        </form>
      </header>
    );
  }
}
