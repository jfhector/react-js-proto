import React from 'react'
import PropTypes from 'prop-types'

export class Image extends React.Component {
      constructor(props) {
            super(props)
            this.state = {
                  width: 0,
                  height: 0,
            }
      }
      
      componentDidMount() {
            this.imageRef.addEventListener('load', () => {
                  this.setState({
                        width: this.imageRef.naturalWidth,
                        height: this.imageRef.naturalHeight,
                  })
            })
      }

      render() {
            const {
                  src,
            } = this.props            

            return (
                  <img
                  ref={(input) => {this.imageRef = input}}
                  src={src}
                  alt='Prototype img'
                  width={`${this.state.naturalWidth}`}
                  height={`${this.state.naturalHeight}`}
                  onClick={() => {
                        console.log(`${this.props.src} | natural width ${this.imageRef.naturalWidth}px | natural height ${this.imageRef.naturalHeight}px`)
                  }}
                  />
            )
      }
}

Image.protoTypes = {
      src: PropTypes.string.isRequired
}