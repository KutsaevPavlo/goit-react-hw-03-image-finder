import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';

import { Modal } from './Modal/Modal';
import { Component } from 'react';

export class App extends Component {
  state = {
    materials: [],
    searchimg: '',
    page: 1,
  };

  incrementPage = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  handlFormSubmit = searchimg => {
    this.setState({ searchimg });
  };

  render() {
    return (
      <section>
        <div>
          <Searchbar handlFormSubmirt={this.handlFormSubmit} />
          <ImageGallery
            page={this.state.page}
            searchimg={this.state.searchimg}
            incrementPage={this.incrementPage}
          />
          <Modal />
        </div>
      </section>
    );
  }
}
