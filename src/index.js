import React from "react"
import ReactDOM from "react-dom"
import styled from 'styled-components'
import {colors} from './docStyles'
import {

} from './components/'

class Component extends React.Component {
      constructor(props) {
            super(props)

            this.state = {
            }
      }

      render() {
            const {
                  className,
            } = this.props

            return (

                  <div className={className}>
                        Test
                  </div>

            )
      }
}

const App = styled(Component)`
`

ReactDOM.render(<App />, document.getElementById("root"))
