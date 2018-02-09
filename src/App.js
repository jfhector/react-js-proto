import React from "react"
import styled from "styled-components"
import { colors } from "./docStyles"
import { Image, Sidebar, DataPanel } from "./components/"
import PROTOIMG_nav_header from "./assets/PROTOIMG_nav_header.png"
import PROTOIMG_nav_tabs from "./assets/PROTOIMG_nav_tabs.png"
import PROTOIMG_nav_footer from "./assets/PROTOIMG_nav_footer.png"

class App_preStyle extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			dataViewNeedsUpdating: false,

			selectedDuration: "52 weeks",
			selectedDates: "From 23 Jan 2017 to 21 Jan 2018",
			selectedComparison: "vs. last year",
			selectedSubcategory: "All subcategories",
			selectedStoreFormat: "All store formats",
			selectedCustomerType: "All customer types",
			selectedRegion: "All regions",

			selectedKpiTile: "salesValue",

			measuresSummaryExpanded: true,
			measuresInDetailExpanded: true,
			KPITreesExpanded: false,
			topStoriesExpanded: false,

			trendGraphExpanded: true,
			splitBySubcategoriesExpanded: true,
			splitByStoreFormatsExpanded: true,
			splitByCustomerTypesExpanded: true,
			splitByRegionsExpanded: true,
		}
	}

	render() {
		const { className } = this.props

		return (
			<div className={className}>
				<header className="headerContainer">
					<Image src={PROTOIMG_nav_header} />
				</header>

				<header className="tabsBarContainer">
					<Image src={PROTOIMG_nav_tabs} />
				</header>

				<main>
					<Sidebar
						className="sideBar"
						appState={this.state}
						setAppState={this.setState.bind(this)}
					/>

					<DataPanel
						appState={this.state}
						setAppState={this.setState.bind(this)}
					/>
				</main>

				<footer>
					<Image src={PROTOIMG_nav_footer} />
				</footer>
			</div>
		)
	}
}

export const App = styled(App_preStyle)`
	> .headerContainer {
		display: flex;
		justify-content: center;
		background-color: ${colors.palette.tuatara};
	}

	> .tabsBarContainer {
		display: flex;
		justify-content: center;

		margin-bottom: 35px;

		background-color: ${colors.bgColor.background.iron};
	}

	> main {
		display: flex;
		justify-content: center;
		align-content: flex-start;

		margin-right: 15px;
		margin-bottom: 50px;

		> .sideBar {
			height: max-content;
		}
	}

	> footer {
		display: flex;
		justify-content: center;

		background-color: ${colors.palette.tuatara};
	}
`
