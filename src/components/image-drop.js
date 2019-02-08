import React from 'react';
import Dropzone from 'react-dropzone';
import request from 'superagent';

const CLOUDINARY_UPLOAD_PRESET = 'pdkggwg0';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/dgzjr8afn/image/upload'


export default class ImageDrop extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      uploadedFileCloudinaryUrl: ''
    };
  }

  onImageDrop(files) {
    debugger;
    this.setState({
      uploadedFile: files[0]
    });

    this.handleImageUpload(files[0]);
  }

  handleImageUpload(file) {
    debugger;
    let upload = request.post(CLOUDINARY_UPLOAD_URL)
      .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
      .field('file', file);


    upload.end((err, response) => {
      if (err) {
        console.error(err);
      }

      if (response.body.secure_url !== '') {
        this.setState({
          uploadedFileCloudinaryUrl: response.body.secure_url
        });
      }
    });
  }


  render() {
    return (
      <div className='image-drop'>
        <Dropzone
          onDrop={this.onImageDrop.bind(this)}
          accept="image/*"
          multiple={false}>
          {({ getRootProps, getInputProps }) => {
            return (
              <div
             
                {...getRootProps()}
              >
                <input {...getInputProps()} />
                {<div className='image-drop-bucket'>
                  <p>Drop an image file here,</p>
                  <p>or click here to upload</p>
                  </div>
                }
              </div>
            )
          }}
        </Dropzone>
        <div>
          <div className="image-preview">
            ...
         </div>

          <div className='image-preview'>
            {this.state.uploadedFileCloudinaryUrl === '' ? null :
              <div>
                <p>{this.state.uploadedFile.name}</p>
                <img className='image-preview'
                  alt=''
                  src={this.state.uploadedFileCloudinaryUrl} />
              </div>}
          </div>
        </div>
      </div>
    )
  }
};