import React from 'react';
import { connect } from 'react-redux';
import { imageUploadSuccess, submitNewObject } from '../actions/display';
import { API_BASE_URL } from '../config';
export class FileUpload extends React.Component {
 submitFile(e){
   e.preventDefault()
let formData = new FormData();
const fileField = document.querySelector("input[type='file']");
formData.append('image', fileField.files[0]);

fetch(`${API_BASE_URL}/objects`, {
  method: 'POST',
  body: formData
})
  .then(response => {
    this.props.dispatch(imageUploadSuccess())
    return response.json();
  })
  .catch(error => console.error('Error:', error))
  .then(response => console.log('Success:', JSON.stringify(response)));
}

  render() {
    return (
      <form onSubmit={(e) =>
        this.submitFile(e)
      }>
        <input type='file'></input>
        <button type='submit'>submit2</button>
      </form>
    )
  }
}

export default connect()(FileUpload)