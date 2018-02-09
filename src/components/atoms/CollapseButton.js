import React from 'react'
import styled from 'styled-components'
import {colors} from '../../docStyles'

const Component = ({
      additionalClass,
      expanded,
      handleCollapseButtonClick,
      className,
}) => (

      <div className={className}
      onClick={handleCollapseButtonClick}>
            {expanded ? "\u2013" : "+"}
      </div>
      
)

export const CollapseButton = styled(Component)`

      display: flex;
      justify-content: center;
      align-items: center;

      width: 20px;
      height: 20px;

      background-color: ${colors.bgColor.button.secondary};
      border-radius: 2px;

      font-size: large;
      line-height: 1;

      font-weight: 500;
      color: white;

      cursor: pointer;
`