import React from 'react';
import { Field, reduxForm, SubmissionError, focus } from 'redux-form';
import Input from './form-input';
import { connect } from 'react-redux';
import { getCategories, submitNewObject } from '../actions/display';



export class NewObjectForm extends React.Component {
  componentDidMount() {
    this.props.dispatch(getCategories())

  }

  onSubmit(values) {
    this.props.dispatch(submitNewObject(values))
  }


  render() {
    let catOptions = this.props.categoriesList.map((cat, index) => (
      <option value={cat.id}>{cat.name}</option>
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

      <div className='form-container'>
        <h3>Submit a new Object to the collection
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
            name='categories'
            type='select '
            element='select'
            component={Input}
            label="select a category"
          >
            {catOptions}
          </Field>
          <Field
            name='additional Categories'
            type='text'
            component={Input}
            label="add a category of your own!"
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  };

};

const mapStateToProps = state => ({
  categoriesList: state.display.categories,
  submissonSuccess: state.display.submissonSuccess
})

NewObjectForm = connect(mapStateToProps)(NewObjectForm)

export default reduxForm({
  form: 'newObject',
  onSubmitFail: (errors, dispatch) =>
    dispatch(focus('newObject', Object.keys(errors)[0]))
})(NewObjectForm);