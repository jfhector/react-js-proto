import React from 'react'
import styled from 'styled-components'

class App_preStyle extends React.Component {
constructor(props) {
      super(props)
      this.state = {
            counter: 1,
      }
}
      
render() {
      const {
            className
      } = this.props

    return (
      <div className={`App ${className}`}
      onClick={() => this.setState(
            prevState => ({
                  counter: prevState.counter + 1,
            })
      )}
      >
        <div className="innerDiv">
            {this.state.counter}
        </div>

        <div>CACA</div>
      </div>
    );
  }
}

const App = styled(App_preStyle)`

      .innerDiv {
            padding: 20px;
            background-color: greenyellow;
            color: rosybrown;
      }
`

export default App