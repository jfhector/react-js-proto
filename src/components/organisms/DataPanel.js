import React from 'react'
import styled from 'styled-components'
import { Image, Button, KpiTile, CollapsibleDataBoard, CollapsibleDataModule, Selector, Alert } from "../"
import appData from '../../appData.json'

import PROTOIMG_graph_salesValue from '../../assets/PROTOIMG_graph_salesValue.png'
import PROTOIMG_graph_customers from '../../assets/PROTOIMG_graph_customers.png'
import PROTOIMG_graph_spendPerCustomer from '../../assets/PROTOIMG_graph_spendPerCustomer.png'
import PROTOIMG_graph_spendPerVisit from '../../assets/PROTOIMG_graph_spendPerVisit.png'

import PROTOIMG_table_subcategories_customers from '../../assets/PROTOIMG_table_subcategories_customers.png'
import PROTOIMG_table_subcategories_salesValue from '../../assets/PROTOIMG_table_subcategories_salesValue.png'
import PROTOIMG_table_subcategories_spendPerCustomer from '../../assets/PROTOIMG_table_subcategories_spendPerCustomer.png'
import PROTOIMG_table_subcategories_spendPerVisit from '../../assets/PROTOIMG_table_subcategories_spendPerVisit.png'

import PROTOIMG_table_customerTypes_salesValue from '../../assets/PROTOIMG_table_customerTypes_salesValue.png'
import PROTOIMG_table_regions_salesValue from '../../assets/PROTOIMG_table_regions_salesValue.png'
import PROTOIMG_table_storeFormats_salesValue from '../../assets/PROTOIMG_table_storeFormats_salesValue.png'

function scrollDownToShowKPIInDetailIfNeeded() {
      if (window.scrollY < 293) {
            window.scroll({
                  top: 293,
                  behavior: 'smooth'
            })
      }
}

const Component = ({
      appState,
      setAppState,
      className,
}) => (             

      <div className={className}>
      
            <div className="titleRow">

                  <div className="title">
                        Untitled view
                  </div>

                  <div className="buttonsRow">

                        <Button type="secondary" className="leftButton">
                              Download data
                        </Button>

                        <Button>
                              Save view
                        </Button>
                  </div>
            </div>

            <Alert className="alert"
            type="warn"
            dismissable
            visible={appState.dataViewNeedsUpdating}
            alertOnclickHandler={() => {
                  console.log("@DataPanel Alert alertOnclickHandler", this)
                  setAppState({dataViewNeedsUpdating: false})
            }}
            >
                  <b>This view doesn&apos;t reflect your new selection yet.&nbsp;</b> Click <span className="alertLink">&apos;Update view&apos;&nbsp;</span> to refresh this view.
            </Alert>
            
            <CollapsibleDataBoard
            title="KPI Trees"
            expanded={appState.KPITreesExpanded}
            handleCollapseButtonClick={() => setAppState(
                  (prevState, props) => ({
                        KPITreesExpanded: !prevState.KPITreesExpanded,
                  })
            )}
            />

            <CollapsibleDataBoard 
            title="Measures summary"
            expanded={appState.measuresSummaryExpanded}
            handleCollapseButtonClick={() => setAppState(
                  (prevState) => ({
                        measuresSummaryExpanded: !prevState.measuresSummaryExpanded,
                  })
            )}>

                  <div className="kpiTilesContainer">

                        <KpiTile
                              measure="salesValue"
                              selected={appState.selectedKpiTile === "salesValue"}
                              handleKPITileClick={(measure) => {
                                    setAppState({selectedKpiTile: measure})
                                    scrollDownToShowKPIInDetailIfNeeded()
                              }}
                        />

                        <KpiTile
                              measure="spendPerCustomer"
                              selected={appState.selectedKpiTile === "spendPerCustomer"}
                              handleKPITileClick={(measure) => {
                                    setAppState({selectedKpiTile: measure})
                                    scrollDownToShowKPIInDetailIfNeeded()
                              }}
                        />

                        <KpiTile
                              measure="customers"
                              selected={appState.selectedKpiTile === "customers"}
                              handleKPITileClick={(measure) => {
                                    setAppState({selectedKpiTile: measure})
                                    scrollDownToShowKPIInDetailIfNeeded()
                              }}
                        />

                        <KpiTile
                              measure="retailerCustomers"
                              selected={appState.selectedKpiTile === "retailerCustomers"}
                              handleKPITileClick={(measure) => {
                                    setAppState({selectedKpiTile: measure})
                                    scrollDownToShowKPIInDetailIfNeeded()
                              }}
                        />

                        <KpiTile
                              measure="spendPerVisit"
                              selected={appState.selectedKpiTile === "spendPerVisit"}
                              handleKPITileClick={(measure) => {
                                    setAppState({selectedKpiTile: measure})
                                    scrollDownToShowKPIInDetailIfNeeded()
                              }}
                        />

                        <KpiTile
                              measure="unitsPerVisit"
                              selected={appState.selectedKpiTile === "unitsPerVisit"}
                              handleKPITileClick={(measure) => {
                                    setAppState({selectedKpiTile: measure})
                                    scrollDownToShowKPIInDetailIfNeeded()
                              }}
                        />

                        <KpiTile
                              measure="customerPenetration"
                              selected={appState.selectedKpiTile === "customerPenetration"}
                              handleKPITileClick={(measure) => {
                                    setAppState({selectedKpiTile: measure})
                                    scrollDownToShowKPIInDetailIfNeeded()
                              }}
                        />

                        <KpiTile
                              measure="frequencyOfPurchase"
                              selected={appState.selectedKpiTile === "frequencyOfPurchase"}
                              handleKPITileClick={(measure) => {
                                    setAppState({selectedKpiTile: measure})
                                    scrollDownToShowKPIInDetailIfNeeded()
                              }}
                        />

                        <KpiTile
                              measure="storesSelling"
                              selected={appState.selectedKpiTile === "storesSelling"}
                              handleKPITileClick={(measure) => {
                                    setAppState({selectedKpiTile: measure})
                                    scrollDownToShowKPIInDetailIfNeeded()
                              }}
                        />
                  </div>
            </CollapsibleDataBoard>

            <CollapsibleDataBoard 
            title="Measure in detail"
            right_node={

                  <Selector
                  style={{position: 'sticky', top: 20}}
                  optionsArray={["Sales value", "Spend per customer", "Customers", "Retailer customers", "Spend per visit", "Units per visit", "Customer penetration", "Frequency of purchase", "Stores selling"]}
                  value={appData[`kpis`][`${appState.selectedKpiTile}`]['titleString']}
                  handleSelectorChange={(newSelection_string) => {
                        switch (newSelection_string) {
                              case "Sales value":
                                    setAppState({selectedKpiTile: "salesValue"})
                                    break
                              case "Spend per customer":
                                    setAppState({selectedKpiTile: "spendPerCustomer"})
                                    break
                              case "Customers":
                                    setAppState({selectedKpiTile: "customers"})
                                    break
                              case "Retailer customers":
                                    setAppState({selectedKpiTile: "retailerCustomers"})
                                    break
                              case "Spend per visit":
                                    setAppState({selectedKpiTile: "spendPerVisit"})
                                    break
                              case "Units per visit":
                                    setAppState({selectedKpiTile: "unitsPerVisit"})
                                    break
                              case "Customer penetration":
                                    setAppState({selectedKpiTile: "customerPenetration"})
                                    break
                              case "Frequency of purchase":
                                    setAppState({selectedKpiTile: "frequencyOfPurchase"})
                                    break
                              case "Stores selling":
                                    setAppState({selectedKpiTile: "storesSelling"})
                                    break
                              default:
                                    console.log("switch didn't match any cate")
                                    break
                        }
                  }}
                  />
                  
            }
            expanded={appState.measuresInDetailExpanded}
            handleCollapseButtonClick={() => setAppState(
                  (prevState, props) => ({
                        measuresInDetailExpanded: !prevState.measuresInDetailExpanded,
                  })
            )}>
                  <CollapsibleDataModule
                  title={`${appData['kpis'][`${appState.selectedKpiTile}`]['titleString'].trim()} trend`} 
                  expanded={appState.trendGraphExpanded}
                  appState={appState}
                  handleCollapseButtonClick={() => setAppState(
                        (prevState, props) => ({
                              trendGraphExpanded: !prevState.trendGraphExpanded,
                        })
                  )}>
                              <Image src={
                                    (function () {
                                          switch (appState.selectedKpiTile) {
                                                case 'salesValue':
                                                case 'customerPenetration':
                                                      return PROTOIMG_graph_salesValue
                                                case 'spendPerCustomer':
                                                case 'frequencyOfPurchase':
                                                case 'storesSelling':
                                                      return PROTOIMG_graph_spendPerCustomer
                                                case 'customers':
                                                case 'retailerCustomers':
                                                      return PROTOIMG_graph_customers
                                                case 'spendPerVisit':
                                                case 'unitsPerVisit':
                                                      return PROTOIMG_graph_spendPerVisit

                                                default: 
                                                      console.log('@DataPanel @Image @switch no case match')
                                                      return false
                                          }
                                    }())
                              } />
                  </CollapsibleDataModule>

                  <CollapsibleDataModule
                  title={`${appData['kpis'][`${appState.selectedKpiTile}`]['titleString'].trim()} split by subcategories`}
                  expanded={appState.splitBySubcategoriesExpanded}
                  appState={appState}
                  handleCollapseButtonClick={() => setAppState(
                        (prevState, props) => ({
                              splitBySubcategoriesExpanded: !prevState.splitBySubcategoriesExpanded,
                        })
                  )}>
                              <Image src={
                                    (function () {
                                          switch (appState.selectedKpiTile) {
                                                case 'salesValue':
                                                case 'customerPenetration':
                                                      return PROTOIMG_table_subcategories_salesValue
                                                case 'spendPerCustomer':
                                                case 'frequencyOfPurchase':
                                                case 'storesSelling':
                                                      return PROTOIMG_table_subcategories_spendPerCustomer
                                                case 'customers':
                                                case 'retailerCustomers':
                                                      return PROTOIMG_table_subcategories_customers
                                                case 'spendPerVisit':
                                                case 'unitsPerVisit':
                                                      return PROTOIMG_table_subcategories_spendPerVisit

                                                default: 
                                                      console.log('@DataPanel @Image @switch no case match')
                                                      return false
                                          }
                                    }())
                              } />
                  </CollapsibleDataModule>

                  <CollapsibleDataModule
                  title={`${appData['kpis'][`${appState.selectedKpiTile}`]['titleString'].trim()} split by regions`}
                  expanded={appState.splitByRegionsExpanded}
                  appState={appState}
                  handleCollapseButtonClick={() => setAppState(
                        (prevState, props) => ({
                              splitByRegionsExpanded: !prevState.splitByRegionsExpanded,
                        })
                  )}>
                              <Image src={PROTOIMG_table_regions_salesValue} />
                  </CollapsibleDataModule>

                  <CollapsibleDataModule
                  title={`${appData['kpis'][`${appState.selectedKpiTile}`]['titleString'].trim()} split by store formats`}
                  expanded={appState.splitByStoreFormatsExpanded}
                  appState={appState}
                  handleCollapseButtonClick={() => setAppState(
                        (prevState, props) => ({
                              splitByStoreFormatsExpanded: !prevState.splitByStoreFormatsExpanded,
                        })
                  )}>
                              <Image src={PROTOIMG_table_storeFormats_salesValue} />
                  </CollapsibleDataModule>

                  <CollapsibleDataModule
                  title={`${appData['kpis'][`${appState.selectedKpiTile}`]['titleString'].trim()} split by customer types`}
                  expanded={appState.splitByCustomerTypesExpanded}
                  appState={appState}
                  handleCollapseButtonClick={() => setAppState(
                        (prevState, props) => ({
                              splitByCustomerTypesExpanded: !prevState.splitByCustomerTypesExpanded,
                        })
                  )}>
                              <Image src={PROTOIMG_table_customerTypes_salesValue} />
                  </CollapsibleDataModule>
            </CollapsibleDataBoard>

            <CollapsibleDataBoard
            title="Top Stories"
            expanded={appState.topStoriesExpanded}
            handleCollapseButtonClick={() => setAppState(
                  (prevState, props) => ({
                        topStoriesExpanded: !prevState.topStoriesExpanded,
                  })
            )}
            />
      </div>

)

export const DataPanel = styled(Component)`

      padding: 20px 0;
      margin-left: 2rem;
      
      width: 865px;
      min-height: 800px;

      > .titleRow {
            display: flex;
            justify-content: space-between;
            align-items: center;

            margin-bottom: 20px;

            > .title {
                  margin-left: 20px;

                  font-size: xx-large;
                  font-weight: 300;
            }

            > .buttonsRow {
                  display: flex;
                  justify-content: space-between;
                  align-items: center;

                  margin-right: 20px;

                  > .leftButton {
                        margin-right: 15px;
                  }
            }

      }

      .alert {
            position: sticky;
            top: -1px;

            .alertLink {
                  text-decoration: underline;
            }
      }

      .kpiTilesContainer {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap; 
      }
`