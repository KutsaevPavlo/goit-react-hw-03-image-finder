import { Button } from './Button/Button';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';
import { ProgressBar } from 'react-loader-spinner';
import { Modal } from './Modal/Modal';
import { Component } from 'react';
import { fetchArticlesWithQuery } from './Servises/Api';

export class App extends Component {
  state = {
    materials: [],
    searchimg: '',
  };

  handlFormSubmit = searchimg => {
    this.setState({ searchimg });
  };

  async componentDidMount() {
    try {
      const materials = fetchArticlesWithQuery('cat', 1);
      this.setState({ materials });
    } catch (error) {
      this.setState({ error });
    }
  }

  render() {
    return (
      <section>
        <div>
          <Searchbar handlFormSubmirt={this.handlFormSubmit} />
          <ImageGallery />
          <Button />
          <ProgressBar
            height="80"
            width="80"
            ariaLabel="progress-bar-loading"
            wrapperStyle={{}}
            wrapperClass="progress-bar-wrapper"
            borderColor="#F4442E"
            barColor="#51E5FF"
          />
          <Modal />
        </div>
      </section>
    );
  }
}