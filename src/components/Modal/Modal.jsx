import React, { Component } from 'react';
import { Overlay, Content } from './Modal.styled';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleEscapeClick);
    document.body.style.overflow = 'hidden';
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleEscapeClick);
    document.body.style.overflow = 'auto';
  }

  handleEscapeClick = event => {
    if (event.code === 'Escape') {
      this.props.handleCloseModal();
    }
  };

  handleOverlayClick = event => {
    if (event.currentTarget === event.target) {
      this.props.handleCloseModal();
    }
  };

  render() {
    return (
      <Overlay onClick={this.handleOverlayClick}>
        <Content>
          <img
            src={this.props.modalData.largeImageURL}
            alt={this.props.modalData.tags}
          />
        </Content>
      </Overlay>
    );
  }
}
