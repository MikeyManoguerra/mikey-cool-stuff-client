import React from 'react';
import { connect } from 'react-redux';
import {
  Field,
  reduxForm,
  focus,
} from 'redux-form';
import Input from './input';
import ImageDrop from './image-drop';
import { Link } from 'react-router-dom';
import {
  nonEmpty,
  required
} from '../validator';
import {
  getCategories,
  submitNewObject,
  getCapitalFromCountriesApi
} from '../actions/submit';

class NewObjectForm extends React.Component {
  componentDidMount() {
    this.props.dispatch(getCategories())
  }
  getCapital(origin) {
    this.props.dispatch(getCapitalFromCountriesApi(origin))
  }
  addPhotoAndSubmit(values) {
    if (this.props.imageUrl !== '') {
      const valuesWithImage = {
        ...values,
        image: this.props.imageUrl
      }
      return this.props.dispatch(submitNewObject(valuesWithImage))
    } else {
      const valuesWithStockPhoto = {
        ...values,
        image: 'https://res.cloudinary.com/dgzjr8afn/image/upload/v1550073398/rb2.jpg'
      }
      return this.props.dispatch(submitNewObject(valuesWithStockPhoto))
    }
  }
  onSubmit(values) {
    return this.addPhotoAndSubmit(values)
  }
  render() {
    let catOptions = this.props.categoriesList.map((cat, index) => (
      <option key={index} value={cat.id}>{cat.name}</option>
    ))
    let successMessage;
    let errorMessage;

    if (this.props.submitSucceeded === true) {
      successMessage = (
        <div className="message message-success">
          <p>You Posted your Object successfully. Hooray!</p>
          <Link to='/App/List'>Go Back to Collection</Link>
        </div>
      );
    }
    if (this.props.submitFailed === true) {

      successMessage = (
        <div className="message message-fail">
          <p>Something Went wrong. Did you Complete the Form?</p>
        </div>
      );
    }
    return (

      <div className='form-container display'>
        <h3 className='form-header'>Submit a new Object to the collection
      </h3>
        {successMessage}
        {errorMessage}
        <form
          aria-label='Submit a new item to the collection'
          onSubmit={this.props.handleSubmit(values =>
            this.onSubmit(values))}>
          <Field
            name='name'
            type='text'
            component={Input}
            validate={[required, nonEmpty]}
            label="Object to post to the website"
          />
          <Field
            className='form-input-element text-area'
            name='description'
            type='textarea'
            element='textarea'
            component={Input}
            label="A good description of your object"
          />
          <Field
            validate={[required, nonEmpty]}
            name='postalCode'
            type='text'
            component={Input}
            label="Postal code of the item you are posting"
          />
          <Field
            name='countryOfOrigin'
            type='text'
            component={Input}
            label="Country of origin, what does the label say?"
          />
          <Field
            name='categoryIds'
            type='select'
            element='select'
            component={Input}
            label="Select a category"
          >
            {catOptions}
          </Field>
          <Field
            name='newCategory'
            type='text'
            component={Input}
            label="Add an additional category of your own!"
          />
          <ImageDrop />
          <button className='submit-button' type="submit">Submit</button>
        </form>
        <div>
          <div className="image-preview">
            ...
         </div>
          <div className='image-preview'>
            {this.props.imageUrl === '' ? null :
              <div>
                <p>{this.props.uploadedFile.name}</p>
                <img className='image-preview'
                  alt=''
                  src={this.props.imageUrl} />
              </div>}
          </div>
        </div>
        <Link to='/App/List'>Go Back to Collection</Link>
      </div>
    )
  };

};

const mapStateToProps = state => ({
  categoriesList: state.display.categories,
  submissionSuccess: state.display.submissionSuccess,
  imageUrl: state.display.uploadedFileCloudinaryUrl,
  uploadedFile: state.display.uploadedFile
})


export default connect(mapStateToProps)(reduxForm({
  form: 'newObject',
  // destroyOnUnmount: false,
  onSubmitFail: (errors, dispatch) =>
    dispatch(focus('newObject', Object.keys(errors)[0]))
})(NewObjectForm));