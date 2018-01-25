import React from "react"

import { KpiTile } from "./components/KpiTile"
import { Selector } from "./components/Selector"

import "./app.css"

export class App extends React.Component {
	constructor(props) {
            super(props)

            this.handleTileClick = this.handleTileClick.bind(this);
            this.handleDurationSelectorChange = this.handleDurationSelectorChange.bind(this)
            this.handleDatesSelectorChange = this.handleDatesSelectorChange.bind(this)
            this.handleComparisonSelectorChange = this.handleComparisonSelectorChange.bind(this)

            this.handleSubcategorySelectorChange = this.handleSubcategorySelectorChange.bind(this)
            this.handleStoreFormatSelectorChange = this.handleStoreFormatSelectorChange.bind(this)
            this.handleCustomerTypeSelectorChange = this.handleCustomerTypeSelectorChange.bind(this)
            this.handleRegionSelectorChange = this.handleRegionSelectorChange.bind(this)
            
		this.state = {
                  selectedTile: "SALES VALUE",

                  selectedDuration: "52 weeks",
                  selectedDates: "From 23 Jan 2017 to 21 Jan 2018",
                  selectedComparison: "Same weeks on previous year",

                  selectedSubcategory: "All subcategories",
                  selectedStoreFormat: "All store formats",
                  selectedCustomerType: "All customer types",
                  selectedRegion: "All regions",
            }
      }
      
      handleTileClick(tileName) {
            // console.log("handleTileClick");
            
            this.setState(prevState => ({
                  selectedTile: tileName,
            }))
      }

      handleDurationSelectorChange(event) {
            // console.log("handleDurationSelectorChange");
            this.setState({
                  selectedDuration: event.target.value,
            })
      }

      handleDatesSelectorChange(event) {
            // console.log("handleDatesSelectorChange");
            this.setState({
                  selectedDates: event.target.value,
            })            
      }

      handleComparisonSelectorChange(event) {
            // console.log("handleComparisonSelectorChange");
            this.setState({
                  selectedComparison: event.target.value,
            })            
      }

      handleSubcategorySelectorChange(event) {
            // console.log("handleComparisonSelectorChange");
            this.setState({
                  selectedSubcategory: event.target.value,
            })            
      }

      handleStoreFormatSelectorChange(event) {
            // console.log("handleComparisonSelectorChange");
            this.setState({
                  selectedStoreFormat: event.target.value,
            })            
      }

      handleCustomerTypeSelectorChange(event) {
            // console.log("handleComparisonSelectorChange");
            this.setState({
                  selectedCustomerType: event.target.value,
            })            
      }

      handleRegionSelectorChange(event) {
            // console.log("handleComparisonSelectorChange");
            this.setState({
                  selectedRegion: event.target.value,
            })            
      }

	render() {
		return (
			<div className="background-container">
				<img
					className="tabs-header"
					src="./assets/tab-bars1155x121.png"
					width="1155"
					height="121"
				/>

				<div className="view">
                              <div className="sidebar">
                                    <img
                                          className="sidebar"
                                          src="./assets/side-bar270x549.png"
                                          width="270"
                                          height="549"
                                    />

                                    <div className="sidebar-container-dropdowns sidebar-container-dropdown-1">
                                          <Selector
                                          value={this.state.selectedDuration}
                                          optionsArray={[
                                                "52 weeks",
                                                "26 weeks",
                                                "12 weeks",
                                                "4 weeks",
                                          ]}
                                          handleSelectorChange={this.handleDurationSelectorChange}
                                          />
                                    </div>

                                    <div className="sidebar-container-dropdowns sidebar-container-dropdown-2">
                                          <Selector
                                          value={this.state.selectedDates}
                                          optionsArray={
                                                (this.state.selectedDuration === "52 weeks") ? [
                                                      "From 23 Jan 2017 to 21 Jan 2018",
                                                      "From 16 Jan 2017 to 14 Jan 2018",
                                                      "From 09 Jan 2017 to 07 Jan 2018",
                                                      "From 02 Jan 2017 to 31 Dec 2017",
                                                      "From 26 Dec 2016 to 24 Dec 2017",
                                                      "From 19 Dec 2016 to 17 Dec 2017",
                                                      "From 12 Dec 2016 to 10 Dec 2017",
                                                      "From 05 Dec 2016 to 03 Dec 2017",
                                                ] : (this.state.selectedDuration === "26 weeks") ? [
                                                      "From 10 Jul 2017 to 21 Jan 2018",
                                                      "From 03 Jul 2017 to 14 Jan 2018",
                                                      "From 26 Jun 2017 to 07 Jan 2018",
                                                      "From 19 Jun 2017 to 31 Dec 2017",
                                                      "From 12 Jun 2017 to 24 Dec 2017",
                                                      "From 05 Jun 2017 to 17 Dec 2017",
                                                      "From 29 May 2017 to 10 Dec 2017",
                                                      "From 22 May 2017 to 03 Dec 2017",                                                      
                                                ] : (this.state.selectedDuration === "12 weeks") ? [
                                                      "From 23 Oct 2017 to 21 Jan 2018",
                                                      "From 16 Oct 2017 to 14 Jan 2018",
                                                      "From 09 Oct 2017 to 07 Jan 2018",
                                                      "From 02 Oct 2017 to 31 Dec 2017",
                                                      "From 25 Sept 2017 to 24 Dec 2017",
                                                      "From 18 Sept 2017 to 17 Dec 2017",
                                                      "From 11 Sept 2017 to 10 Dec 2017",
                                                      "From 04 Sept 2017 to 03 Dec 2017",                                                      
                                                ] : [
                                                      "From 25 Dec 2017 to 21 Jan 2018",
                                                      "From 18 Dec 2017 to 14 Jan 2018",
                                                      "From 11 Dec 2017 to 07 Jan 2018",
                                                      "From 04 Dec 2017 to 31 Dec 2017",
                                                      "From 27 Nov 2017 to 24 Dec 2017",
                                                      "From 20 Nov 2017 to 17 Dec 2017",
                                                      "From 13 Nov 2017 to 10 Dec 2017",
                                                      "From 06 Dec 2017 to 03 Dec 2017", 
                                                ]
                                          }
                                          handleSelectorChange={this.handleDatesSelectorChange}
                                          />
                                    </div>

                                    <div className="sidebar-container-dropdowns sidebar-container-dropdown-3">
                                          <Selector
                                          value={this.state.selectedComparison}
                                          optionsArray={[
                                                "Same weeks on previous year",
                                                `Previous ${this.state.selectedDuration}`,
                                          ]}
                                          handleSelectorChange={this.handleComparisonSelectorChange}
                                          />
                                    </div>

                                    <div className="sidebar-container-dropdowns sidebar-container-dropdown-4">
                                          <Selector
                                          value={this.state.selectedSubcategory}
                                          optionsArray={[
                                                "All subcategories",
                                                "Frozen Beef",
                                                "Frozen Chicken",
                                                "Frozen Lamb",
                                                "Frozen Fish",
                                          ]}
                                          handleSelectorChange={this.handleSubcategorySelectorChange}
                                          />
                                    </div>

                                    <div className="sidebar-container-dropdowns sidebar-container-dropdown-5">
                                          <Selector
                                          value={this.state.selectedStoreFormat}
                                          optionsArray={[
                                                "All store formats",
                                                "Express stores",
                                                "Metro stores",
                                                "Extra stores",
                                                "Online",
                                          ]}
                                          handleSelectorChange={this.handleStoreFormatSelectorChange}
                                          />
                                    </div>

                                    <div className="sidebar-container-dropdowns sidebar-container-dropdown-6">
                                          <Selector
                                          value={this.state.selectedCustomerType}
                                          optionsArray={[
                                                "All customer types",
                                                "Roshni",
                                                "Dawn",
                                                "The Wicks",
                                                "The Mayers",
                                                "Carol",
                                          ]}
                                          handleSelectorChange={this.handleCustomerTypeSelectorChange}
                                          />
                                    </div>

                                    <div className="sidebar-container-dropdowns sidebar-container-dropdown-7">
                                          <Selector
                                          value={this.state.selectedRegion}
                                          optionsArray={[
                                                "All regions",
                                                "North region",
                                                "Central region",
                                                "South region",
                                          ]}
                                          handleSelectorChange={this.handleRegionSelectorChange}
                                          />
                                    </div>
                              </div>

					<div className="main">
						<img
							src={
                                                (this.state.selectedTile === "SALES VALUE") || 
                                                (this.state.selectedTile === "CUSTOMER PENETRATION") ?
                                                      "./assets/content845x2730.png" :
                                                            (this.state.selectedTile === "SPEND PER CUSTOMER") ||
                                                            (this.state.selectedTile === "FREQUENCY OF PURCHASE") || 
                                                            (this.state.selectedTile === "STORES SELLING") ?
                                                            "./assets/content845x2730-alt-spc.png" :
                                                                  (this.state.selectedTile === "CUSTOMERS") ||
                                                                  (this.state.selectedTile === "RETAILER CUSTOMERS") ?
                                                                        "./assets/content845x2730-alt-c.png" :
                                                                              "./assets/content845x2730-alt-spv.png"
                                          }
							width="845"
							height="2730"
						/>

						<div className="main-container-kpiTiles">
							<KpiTile
								title="SALES VALUE"
								value="R$5.823.489.124"
								contribution="-R$488.843"
								percentChange="-7,7%"
								changeDirection="down"
                                                selected={this.state.selectedTile === "SALES VALUE"}
								onClick={this.handleTileClick}
							/>

                                          <KpiTile
								title="SPEND PER CUSTOMER"
								value="R$3,41"
								contribution="-R$127.221"
								percentChange="-2,1%"
								changeDirection="down"
                                                selected={this.state.selectedTile === "SPEND PER CUSTOMER"}
								onClick={this.handleTileClick}
							/>

                                          <KpiTile
								title="CUSTOMERS"
								value="1.712.897"
								contribution="-R$359.429"
								percentChange="-5,8%"
								changeDirection="down"
                                                selected={this.state.selectedTile === "CUSTOMERS"}
								onClick={this.handleTileClick}
							/>

                                          <KpiTile
								title="RETAILER CUSTOMERS"
								value="19.179.700"
								contribution="+R$71.438"
								percentChange="+1,2%"
								changeDirection="up"
                                                selected={this.state.selectedTile === "RETAILER CUSTOMERS"}
								onClick={this.handleTileClick}
							/>

                                          <KpiTile
								title="SPEND PER VISIT"
								value="R$1,64"
								contribution="-R$30.784"
								percentChange="-0,5%"
								changeDirection="down"
                                                selected={this.state.selectedTile === "SPEND PER VISIT"}
								onClick={this.handleTileClick}
							/>

                                          <KpiTile
								title="UNITS PER VISIT"
								value="1,18"
								contribution="+R$107.841"
								percentChange="+1,8%"
								changeDirection="up"
                                                selected={this.state.selectedTile === "UNITS PER VISIT"}
								onClick={this.handleTileClick}
							/>

                                          <KpiTile
								title="CUSTOMER PENETRATION"
								value="8,90%"
								contribution="-R$430.850"
								percentChange="-0,6%"
								changeDirection="down"
                                                selected={this.state.selectedTile === "CUSTOMER PENETRATION"}
								onClick={this.handleTileClick}
							/>

                                          <KpiTile
								title="FREQUENCY OF PURCHASE"
								value="2,08"
								contribution="-R$488.843"
								percentChange="-2,6%"
								changeDirection="down"
                                                selected={this.state.selectedTile === "FREQUENCY OF PURCHASE"}
								onClick={this.handleTileClick}
							/>

                                          <KpiTile
								title="STORES SELLING"
								value="9.700"
								contribution=" "
								percentChange="+1,2%"
								changeDirection="up"
                                                selected={this.state.selectedTile === "STORES SELLING"}
								onClick={this.handleTileClick}
							/>
						</div>
					</div>
				</div>

				<img
					className="footer/"
					src="./assets/footer1155x70.png"
					width="1155"
					height="70"
				/>
			</div>
		)
	}
}
