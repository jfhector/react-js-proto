import React from "react"
import styled from "styled-components"
import { colors } from "./docStyles"

class App_preStyle extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
		}
	}

	render() {
		const { className } = this.props

		return (
			<div className={className}>
				Hello world!
			</div>
		)
	}
}

export const App = styled(App_preStyle)`
      color: ${colors.textColor.links.active}
`
