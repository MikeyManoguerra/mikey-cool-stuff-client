import React from 'react';
import Dropzone from 'react-dropzone';
import request from 'superagent';
import { CLOUDINARY_UPLOAD_PRESET, CLOUDINARY_UPLOAD_URL } from '../config'
import { connect } from 'react-redux';
import { uploadedImageFile, defineCloudinaryUrl } from '../actions/display';

export  class ImageDrop extends React.Component {

  onImageDrop(files) {
    this.props.dispatch(uploadedImageFile(files[0]));
    this.handleImageUpload(files[0]);
  }

  handleImageUpload(file) {
    let upload = request.post(CLOUDINARY_UPLOAD_URL)
      .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
      .field('file', file);
    upload.end((err, response) => {
      if (err) {
        console.error(err);
      }
      if (response.body.secure_url !== '') {
        this.props.dispatch(defineCloudinaryUrl(response.body.secure_url))
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
      </div>
    )
  }
};

export default connect()(ImageDrop);