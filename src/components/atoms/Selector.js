import React from 'react'
import styled from 'styled-components'
import {colors} from '../../docStyles'

const Component = ({
      optionsArray,
      handleSelectorChange,
      value,
      className,
      style
}) => (

      <select className={className}
      style={style}
      value={value}
      onChange={(event) => handleSelectorChange(event.target.value)}>
            {
                  optionsArray.map(
                        function turnArrayElementIntoOptionElement(arrayElement, index) {
                              return <option key={arrayElement + index} value={arrayElement}>{arrayElement}</option>
                  })
            }
      </select>

)

export const Selector = styled(Component)`

      width: 230px;
      height: 30px;
      font-size: small;
      background-color: ${colors.bgColor.background.fbfbfc};
`