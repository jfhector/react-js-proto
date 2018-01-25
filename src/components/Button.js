import React from 'react'

import './button.css'

export function Button({
      active,
      onClick,
}) {

      return (
            <div className={active ? "button button-active" : "button button-inactive"}
            onClick={
                  active ? onClick : (() => {})
            }
            >
                  Update
            </div>
      )
}


//<Button
//active
//onClick={handleUpdateButtonOnClick}
//
//
