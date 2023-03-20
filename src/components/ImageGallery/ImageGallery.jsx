import { Component } from 'react';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { fetchArticlesWithQuery } from 'components/Servises/Api';
import { Loader } from 'components/Loader/Loader';
import { Button } from 'components/Button/Button';

export class ImageGallery extends Component {
  state = {
    searchimg: [],
    status: 'idel',
    error: null,
  };

  async componentDidUpdate(prevProps, prevState) {
    const { searchimg, page } = this.props;
    if (
      prevProps.searchimg !== searchimg ||
      (prevProps.searchimg === searchimg && prevProps.page !== page)
    ) {
      this.setState({ status: 'pending' });
      try {
        const material = await fetchArticlesWithQuery(searchimg, page);
        this.setState({ searchimg: material, status: 'resolved' });
        // this.setState(prevState => ({
        //   searchimg: [...prevState.material, ...material],
        //   status: 'resolved',
        // }));
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
          <Button incrementPage={this.props.incrementPage} />
        </>
      );
    }
  }
}
