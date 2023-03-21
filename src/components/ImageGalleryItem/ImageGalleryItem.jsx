import { Modal } from 'components/Modal/Modal';
import { Component } from 'react';
import css from './ImageGalleryItem.module.css';

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
      <li className={css.ImageGalleryItem} onClick={this.toogleModal}>
        <img
          src={webformatURL}
          alt={tags}
          className={css.ImageGalleryItem_image}
        />
        {isModalShow && (
          <Modal onClose={this.toogleModal}>
            <img src={largeImageURL} alt={tags} />
          </Modal>
        )}
      </li>
    );
  }
}
