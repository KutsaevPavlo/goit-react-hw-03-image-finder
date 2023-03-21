import { Modal } from 'components/Modal/Modal';
import { Component } from 'react';

export class ImageGalleryItem extends Component {
  state = {
    isModalShow: false,
  };

  toogleModal = () => {
    this.setState(({ isModalShow }) => ({ isModalShow: !isModalShow }));
  };

  render() {
    const { webformatURL, largeImageURL, tags } = this.props;
    const { isModalShow } = this.state;
    return (
      <li className="gallery-item" onClick={this.toogleModal}>
        <img src={webformatURL} alt={tags} />
        {isModalShow && (
          <Modal onClick={this.toogleModal}>
            <img src={largeImageURL} alt={tags} />
          </Modal>
        )}
      </li>
    );
  }
}
