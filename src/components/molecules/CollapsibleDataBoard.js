import React from 'react'
import styled from 'styled-components'
import { CollapseButton } from '../'
import {colors} from '../../docStyles'

const Component = ({
      title,
      expanded,
      children,
      handleCollapseButtonClick,
      right_node,
      className
}) => (

      <div className={className}>

            <div className="headerContainer">

                  <div className="headerLeftContainer">

                        <CollapseButton className="collapseButton"
                        expanded={expanded} 
                        handleCollapseButtonClick={handleCollapseButtonClick} />
                        
                        <div className="title">
                              {title}
                        </div>
                        
                  </div>

                  {expanded && right_node}

            </div>

            {expanded && children}

      </div>
)

export const CollapsibleDataBoard = styled(Component)`

      padding: 16px 20px;
      margin-bottom: 20px;

      border: 1px solid ${colors.borderColor.aroundWhiteOrLightestGrey};
      border-radius: 5px;
      background-color: white;
      
      overflow: hidden;

      height: ${props =>
            props.expanded ?
                  "auto"
                  : "60px"
      };

      > .headerContainer {
            display: flex;
            justify-content: space-between;
            align-items: center;
            
            margin-bottom: 20px;

            > .headerLeftContainer {
                  display: flex;
                  justify-content: flex-start;
                  align-items: center;

                  > .collapseButton {
                        margin-right: 10px;
                  }

                  > .title {
                        font-size: x-large;
                        font-weight: bold;
                  }
            }
      }
`