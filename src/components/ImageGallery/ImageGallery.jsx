import { Component } from 'react';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export class ImageGallery extends Component {
  render() {
    return (
      <div>
        <p>{this.props.ImageGallery}</p>
        <ImageGalleryItem />
      </div>
    );
  }
}

// export const ImageGallery = () => {
//   return (
//     <div>
//       {/* <p>{this.props.ImageGallery}</p> */}
//       <ImageGalleryItem />
//     </div>
//   );
// };
