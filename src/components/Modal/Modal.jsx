import { createPortal } from 'react-dom';
import { Component } from 'react';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', e => {
      if (e.code === 'Escape') {
        console.log(e.code);
        this.props.onClick();
      }
    });
  }

  render() {
    const { children } = this.props;

    return createPortal(
      <div className="overlay">
        <div className="modal">{children}</div>
      </div>,
      modalRoot
    );
  }
}
