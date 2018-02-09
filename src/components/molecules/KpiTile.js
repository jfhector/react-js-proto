import React from "react"
import styled from 'styled-components'
import {colors} from '../../docStyles'
import appData from '../../appData.json'

const Component = ({
	measure,
      selected,
      handleKPITileClick,
      className
}) => (

      <div className={className}
      onClick={() => handleKPITileClick(measure)}
      >
            <div className="measureName">
                  {appData['kpis'][`${measure}`]['titleString'] || "Measure name"}
            </div>

            <div className="measureValue">
                  {appData['kpis'][`${measure}`]['value'] || "Value"}
            </div>

            <div className="changeMeasuresContainer">

                  <div className="changeMeasure">
                        {appData['kpis'][`${measure}`]['contribution'] || ""}
                  </div>

                  <div className="changeMeasure">
                        {appData['kpis'][`${measure}`]['percentChange'] || "% Change"}
                  </div>
                  
            </div>
      </div>
      
)

export const KpiTile = styled(Component)`
      box-sizing: padding-box;

      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: stretch;

      width: 265px;
      height: 95px;

      margin-bottom: 15px;
      padding: 10px;

      border-radius: 3px;
      background-color: ${colors.bgColor.background.fbfbfc};
      border: ${props => 
            props.selected ?
                  `3px solid ${colors.borderColor.button.outline.info}`
                  : `1px solid ${colors.borderColor.aroundWhiteOrLightestGrey}`
      };

      &:hover {
            cursor: pointer;
            border: ${props => 
                  !props.selected && `2px solid ${colors.borderColor.button.outline.info}`
            }
      }

      > .measureName {
            font-size: medium;

            color: ${props =>
                  props.selected ?
                  `${colors.textColor.default}`
                  : `${colors.textColor.default}`
            }
      }

      > .measureValue {
            font-weight: bold;
            font-size: large;            
      }

      > .changeMeasuresContainer {
            display: flex;
            justify-content: space-between;
            align-items: center;

            > .changeMeasure {
                  font-size: medium;
                  font-weight: bold;     
                  color: ${props =>
                        (appData['kpis'][`${props.measure}`]['changeDirection'] === "up") ?
                              `${colors.textColor.positive}`
                              : `${colors.textColor.negative}`
                  };
            }
      }
`
