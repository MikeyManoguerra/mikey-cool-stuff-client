import React from 'react'

export default class ImageInput extends React.Component {
  constructor(props) {
    super(props)
    this.onChange = this.onChange.bind(this)
  }

  onChange(e) { 
    const { input: { onChange } } = this.props
    console.log(onChange)
    onChange(
      e.target.files[0]);
  }

  render() {
    return (<input
      type="file"
      onChange={this.onChange}
    />)
  }
}

