import React, { useEffect } from 'react';

const Modal = ({ modalData, onCloseModal }) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.code === 'Escape') {
        onCloseModal();
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onCloseModal]);

  const handleCloseModal = (event) => {
    if (event.target === event.currentTarget) {
      onCloseModal();
    }
  };

  const { largeImageURL, tags } = modalData;

  return (
    <div className="Overlay" onClick={handleCloseModal}>
      <div className="Modal">
        <img src={largeImageURL} alt={tags} width="900" height="900" />
      </div>
    </div>
  );
};

export default Modal;

// import React, { Component } from 'react';

// export class Modal extends Component {
//   componentDidMount() {
//     document.body.style.overflow = 'hidden';
//     window.addEventListener('keydown', this.onClickESC);
//   }

//   componentWillUnmount() {
//     document.body.style.overflow = 'auto';
//     window.removeEventListener('keydown', this.onClickESC);
//   }     

//   onClickESC = event => {
//     if (event.code === 'Escape') {
//       this.props.onCloseModal();
//     } 
//   };

//   handleCloseModal = event => {
//     if (event.target === event.currentTarget) {
//       this.props.onCloseModal();
//     }
//   };

//   render() {
//     const { largeImageURL, tags } = this.props.modalData;

//     return (
//       <div className="Overlay" onClick={this.handleCloseModal}>
//         <div className="Modal">
//           <img src={largeImageURL} alt={tags} width="900" height="900" />
//         </div>
//       </div>
//     );
//   }
// }
