import React, { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { fetchImagesWithQuery } from 'api/api';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';
import { Report } from 'notiflix/build/notiflix-report-aio';

export class App extends Component {
  state = {
    searchQuery: '',
    page: 1,
    gallery: [],
    error: null,
    isLoading: false,
    isModalOpen: false,
    modalData: null,
  };

  async componentDidUpdate(_, prevState) {
    const { searchQuery, page } = this.state;

    if (searchQuery !== prevState.searchQuery || page !== prevState.page) {
      this.setState({ isLoading: true, error: null });
      try {
        const gallery = await fetchImagesWithQuery(searchQuery, page);
        if (gallery.length === 0) {
          Report.info(
            'Ooops!',
            'No results found for your search query.',
            'Okay'
          );
          return;
        }
        this.setState(prevState => ({
          gallery: [...prevState.gallery, ...gallery],
        }));
      } catch (error) {
        this.setState({ error: error.message });
        Report.failure('Error', `${error.message}`, 'Okay');
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  handleSubmit = searchQuery => {
    this.setState({
      searchQuery,
      page: 1,
      gallery: [],
    });
  };

  handleLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  handleOpenModal = selectedImage => {
    this.setState({
      isModalOpen: true,
      modalData: selectedImage,
    });
  };

  handleCloseModal = () => {
    this.setState({ isModalOpen: false });
  };

render() {
  const { isLoading, gallery, isModalOpen, modalData } = this.state;
  const canLoadMore = !isLoading && gallery.length >= 12;

  return (
    <>
      <Searchbar onSubmit={this.handleSubmit} />

      <ImageGallery
        searchResult={gallery}
        handleOpenModal={this.handleOpenModal}
      />

      {isLoading && <Loader />}

      {canLoadMore && gallery.length % 12 === 0 && (
        <Button onClick={this.handleLoadMore} title="Load more" />
      )}

      {isModalOpen && (
        <Modal
          modalData={modalData}
          handleCloseModal={this.handleCloseModal}
        />
      )}
    </>
  );
}


}  