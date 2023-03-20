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

    if (this.state.searchimg.trim() === '') {
      alert('No search value!');
      return;
    }
    this.props.handlFormSubmirt(this.state.searchimg);
    this.setState({ searchimg: '' });
    this.reset();
  };

  reset = () => {
    this.setState({ searchimg: '' });
  };

  render() {
    return (
      <header className="searchbar">
        <form className="form" onSubmit={this.handelSubmit}>
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>

          <input
            name="searchimg"
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
            value={this.state.searchimg}
          />
        </form>
      </header>
    );
  }
}
