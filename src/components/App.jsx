import { Button } from './Button/Button';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';

import { Modal } from './Modal/Modal';
import { Component } from 'react';

export class App extends Component {
  state = {
    materials: [],
    searchimg: '',
  };

  handlFormSubmit = searchimg => {
    this.setState({ searchimg });
  };

  render() {
    return (
      <section>
        <div>
          <Searchbar handlFormSubmirt={this.handlFormSubmit} />
          <ImageGallery searchimg={this.state.searchimg} />
          <Button />

          <Modal />
        </div>
      </section>
    );
  }
}
