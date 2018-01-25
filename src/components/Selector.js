import React from 'react'

import './selector.css'

export function Selector({
      optionsArray,
      handleSelectorChange,
      value
}) {
     return (
            <select className="selector"
            value={value}
            onChange={handleSelectorChange}>
                  {
                        optionsArray.map(
                              function turnArrayElementIntoOptionElement(arrayElement, index) {
                                    return <option key={arrayElement + index} value={arrayElement}>{arrayElement}</option>
                        })
                  }
            </select>
     ) 
}
