import React from "react"
import styled from "styled-components"
import { Selector, Button } from "../"
import { colors } from "../../docStyles"
import appData from "../../appData.json"

const Component = ({ appState, setAppState, className }) => (
	<div className={className}>
		<div className="title">Configure view</div>

		<div className="selectorGroupTitle">Analysis period</div>

		<div className="dropDown">
			<Selector
				value={appState.selectedDuration}
				optionsArray={appData.durationsOptions}
				handleSelectorChange={newSelection_string =>
					setAppState({
						selectedDuration: newSelection_string,
						dataViewNeedsUpdating: true,
					})
				}
			/>
		</div>

		<div className="dropDown">
			<Selector
				value={appState.selectedDates}
				optionsArray={
					appData["datesOptions"][
						`${appState.selectedDuration}`
					]
				}
				handleSelectorChange={newSelection_string =>
					setAppState({
						selectedDates: newSelection_string,
						dataViewNeedsUpdating: true,
					})
				}
			/>
		</div>

		<div className="dropDown" style={{ marginBottom: 20 }}>
			<Selector
				value={appState.selectedComparison}
				optionsArray={[
					"vs. last year",
					`vs. previous ${appState.selectedDuration}`,
				]}
				handleSelectorChange={newSelection_string =>
					setAppState({
						selectedComparison: newSelection_string,
						dataViewNeedsUpdating: true,
					})
				}
			/>
		</div>

		<div className="selectorGroupTitle">Data source</div>

		<form className="radiosAndLabels" style={{ marginBottom: 20 }}>
			<input
				type="radio"
				id="dataSourceChoice1"
				name="dataSource"
				value="All data"
				defaultChecked
			/>
			<label className="labelLeft" htmlFor="dataSourceChoice1">
				All data
			</label>

			<input
				type="radio"
				id="dataSourceChoice2"
				name="dataSource"
				value="Loyalty Card"
			/>
			<label htmlFor="dataSourceChoice2">Loyalty Card (LC)</label>
		</form>

		<div className="selectorGroupTitle">Data filters</div>

		<div className="dropDown">
			<Selector
				value={appState.selectedSubcategory}
				optionsArray={appData.subcategoriesOptions}
				handleSelectorChange={newSelection_string =>
					setAppState({
						selectedSubcategory: newSelection_string,
						dataViewNeedsUpdating: true,
					})
				}
			/>
		</div>

		<div className="dropDown">
			<Selector
				value={appState.selectedRegion}
				optionsArray={appData.regionsOptions}
				handleSelectorChange={newSelection_string =>
					setAppState({
						selectedRegion: newSelection_string,
						dataViewNeedsUpdating: true,
					})
				}
			/>
		</div>

		<div className="dropDown">
			<Selector
				value={appState.selectedStoreFormat}
				optionsArray={appData.storeFormatsOptions}
				handleSelectorChange={newSelection_string =>
					setAppState({
						selectedStoreFormat: newSelection_string,
						dataViewNeedsUpdating: true,
					})
				}
			/>
		</div>

		<div className="dropDown" style={{ marginBottom: 20 }}>
			<Selector
				value={appState.selectedCustomerType}
				optionsArray={appData.customerTypesOptions}
				handleSelectorChange={newSelection_string =>
					setAppState({
						selectedCustomerType: newSelection_string,
						dataViewNeedsUpdating: true,
					})
				}
			/>
		</div>

		<Button
			fullWidth
			disabled={!appState.dataViewNeedsUpdating}
			handleButtonClick={() =>
				setAppState({ dataViewNeedsUpdating: false })
			}
		>
			Update view
		</Button>
	</div>
)

export const Sidebar = styled(Component)`
	position: sticky;
	top: 20px;

	padding: 20px;

	border: 1px solid ${colors.borderColor.aroundWhiteOrLightestGrey};
	border-radius: 5px;
	background-color: white;

	> .title {
		margin-bottom: 16px;

		font-size: large;
		font-weight: bold;
	}

	> .selectorGroupTitle {
		margin-bottom: 6px;

		font-size: medium;
	}

	> .dropDown {
		margin-bottom: 10px;

		width: 230px;
		height: 30px;

		background-color: white;
	}

	> .radiosAndLabels {
		> input {
			width: 15px;
			height: 15px;
		}

		> label {
			font-size: small;
			margin-left: 5px;
		}

		> .labelLeft {
			margin-right: 17px;
		}
	}
`
