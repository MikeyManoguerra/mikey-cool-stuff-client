import React from 'react';
import { Field, reduxForm, focus } from 'redux-form';
import Input from './input';
import { connect } from 'react-redux';
import { getCategories, submitNewObject } from '../actions/display';
import ImageDrop from './image-drop';
import { Link } from 'react-router-dom';



export class NewObjectForm extends React.Component {
  componentDidMount() {
    this.props.dispatch(getCategories())
  }

  onSubmit(values) {

    if (this.props.imageUrl !== '') {
      debugger;
      const valuesWithImage = {
        ...values,
        image: this.props.imageUrl
      }
      debugger;
      return this.props.dispatch(submitNewObject(valuesWithImage))
    } else return this.props.dispatch(submitNewObject(values))
  }

  render() {
    let catOptions = this.props.categoriesList.map((cat, index) => (
      <option key={index} value={cat.id}>{cat.name}</option>
    ))
    let successMessage;

    if (this.props.submissonSuccess) {
      successMessage = (
        <div className="message message-success">
          Message submitted successfully
							</div>
      );
    }
    return (

      <div className='form-container display'>
        <h3 className='form-header'>Submit a new Object to the collection
      </h3>
        <form
          onSubmit={this.props.handleSubmit(values =>
            this.onSubmit(values))}>
          {successMessage}

          <Field
            name='name'
            type='text'
            component={Input}
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
            type='select '
            element='select'
            multiple='true'
            component={Input}
            label="select a category"
          >
            {catOptions}
          </Field>
          <Field
            name='categories'
            type='text'
            component={Input}
            label="add a category of your own!"
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
        <Link to='/App/List'>Go Back</Link>
      </div>
    )
  };

};

const mapStateToProps = state => ({
  categoriesList: state.display.categories,
  submissonSuccess: state.display.submissonSuccess,
  imageUrl: state.display.uploadedFileCloudinaryUrl,
  uploadedFile: state.display.uploadedFile
})

NewObjectForm = connect(mapStateToProps)(NewObjectForm)

export default reduxForm({
  form: 'newObject',
  destroyOnUnmount: false,
  onSubmitFail: (errors, dispatch) =>
    dispatch(focus('newObject', Object.keys(errors)[0]))
})(NewObjectForm);