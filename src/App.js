import React from "react"
import styled from 'styled-components'

// import { Button } from './components/Button'

import "./app.css"

const Title = styled.h1`
      color: purple;
`

export class App extends React.Component {
	constructor(props) {
            super(props)

            // this.handleUpdateButtonOnClick = this.handleUpdateButtonOnClick.bind(this)

		this.state = {
                  // displayWarningBanner: false,
            }
      }

      // handleUpdateButtonOnClick() {
      //       console.log("handleUpdateButtonOnClick");

      //       this.setState({
      //             displayWarningBanner: false
      //       })
      // }

	render() {
		return (
			<div className="background-container">
				<Title>Hello</Title>
			</div>
		)
	}
}
