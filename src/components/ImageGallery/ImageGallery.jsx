import { Component } from 'react';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { fetchArticlesWithQuery } from 'components/Servises/Api';
import { Loader } from 'components/Loader/Loader';

export class ImageGallery extends Component {
  state = {
    searchimg: [],
    status: 'idel',
    error: null,
  };
  async componentDidUpdate(prevProps, presState) {
    const { searchimg } = this.props;
    if (prevProps.searchimg !== this.props.searchimg) {
      this.setState({ status: 'pending' });
      try {
        const material = await fetchArticlesWithQuery(searchimg, 1);
        this.setState({ status: 'resolved', searchimg: material });
      } catch (error) {
        this.setState({ error, status: 'rejected' });
      }
    }
  }

  render() {
    const { searchimg, status, error } = this.state;

    if (status === 'idel') {
      return;
    }
    if (status === 'pending') {
      return <Loader />;
    }
    if (status === 'rejected') {
      return <p>{error.message}</p>;
    }
    if (status === 'resolved') {
      return (
        <>
          <ul className="gallery">
            {searchimg.map(({ id, webformatURL, largeImageURL, tags }) => (
              <ImageGalleryItem
                key={id}
                webformatURL={webformatURL}
                largeImageURL={largeImageURL}
                tags={tags}
              />
            ))}
          </ul>
        </>
      );
    }
  }
}
