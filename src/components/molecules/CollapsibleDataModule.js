import React from 'react'
import styled from 'styled-components'
import { CollapseButton } from '../'
import {colors} from '../../docStyles'

const Component = ({
      title,
      children,
      expanded,
      appState,
      handleCollapseButtonClick,
      className,
}) => (

      <div className={className}>

            <div className="headerContainer">

                  <CollapseButton className="collapseButton"
                  expanded={expanded}
                  handleCollapseButtonClick={handleCollapseButtonClick} />
                  
                  <div className="titlesContainer">

                        <div className="title">
                              {title}
                        </div>

                        <div className="subtitle">
                              {expanded && `${appState.selectedDuration} ending${appState.selectedDates.slice(-12)} ${appState.selectedComparison}`}
                        </div>
                        
                  </div>

            </div>

            {expanded &&
                  children
            }

      </div>

)

export const CollapsibleDataModule = styled(Component)`

      margin-bottom: 20px;
      padding: 15px;
  
      border: 1px solid ${colors.borderColor.aroundWhiteOrLightestGrey};
      border-radius: 3px;
      background-color: ${colors.bgColor.background.fbfbfc};
      
      overflow: hidden;

      height: ${props =>
            props.expanded ?
                  "auto"
                  : "50px"
      };

      > .headerContainer {
            display: flex;
            justify-content: flex-start;
            align-items: flex-start;

            margin-bottom: 25px;

            > .collapseButton {
                  margin-right: 10px;
            }
            
            > .titlesContainer {
                  display: flex;
                  flex-direction: column;

                  > .title {
                        margin-bottom: 5px;

                        font-size: large;
                        font-weight: bold;
                  }

                  > .subtitle {
                        font-size: small;
                        color: ${colors.textColor.grey};               
                  }
            }
      }
`