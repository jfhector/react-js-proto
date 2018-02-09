import React from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import { colors } from '../../docStyles'

const Component = ({
      handleButtonClick,
      children,

      type,
      size,
      disabled,
      fullWidth,

      className
}) => (

      <div className={className}
      onClick={!disabled ? handleButtonClick : (() => {})}
      >
            {children}
      </div>

)

export const Button = styled(Component)`

      display: flex;
      justify-content: center;
      align-items: center;

      border-radius: 4px;
      font-size: medium;

      cursor: pointer;

      width: ${props => 
            props.fullWidth ?
                  "100%"
                  : "max-content"
      };

      ${props => {
            switch (props.type) {
                  case "primary": return css`
                        background-color: ${colors.bgColor.button.primary};
                        color: white;
                  `
                  case "secondary": return css`
                        background-color: ${colors.bgColor.button.secondary};
                        color: white;
                  `
                  case "success": return css`
                        background-color: ${colors.bgColor.button.success};
                        color: white;
                  `
                  case "danger": return css`
                        background-color: ${colors.bgColor.button.danger};
                        color: white;
                  `
                  case "warn": return css`
                        background-color: ${colors.bgColor.button.warn};
                  `
                  case "info": return css`
                        background-color: ${colors.bgColor.button.info};
                        color: white;
                  `
                  case "light": return css`
                        background-color: ${colors.bgColor.button.light};
                  `
                  case "dark": return css`
                        background-color: ${colors.bgColor.button.dark};
                        color: white;
                  `
                  default: console.log('@Button switch props.type: no switch case found')
            } 
      }}

      ${props => {
            switch (props.size) {
                  case "small": return css`
                        padding: 4px 8px;
                        line-height: 21px;                        
                  `
                  case "normal": return css`
                        padding: 6px 12px;
                        line-height: 24px;
                  `
                  case "large": return css`
                        padding: 8px 16px;
                        line-height: 30px;                        
                  `
                  default: console.log('@Button switch props.size: no switch case found')
            }
      }}

      ${props =>
            props.disabled && css`
                  background-color: ${colors.bgColor.button.disabled};
            `
      }
`

Button.propTypes = {
      disabled: PropTypes.bool,
      handleButtonClick: PropTypes.func,
      type: PropTypes.oneOf(["primary", "secondary", "success", "danger", "warning", "info", "light", "dark"]),
      size: PropTypes.oneOf(["normal", "large", "small"]),
      children: PropTypes.node.isRequired,
      className: PropTypes.string,
      fullWidth: PropTypes.bool,
}

Button.defaultProps = {
      disabled: false,
      handleButtonClick: () => {console.log('Button clicked')},
      type: "primary",
      size: "normal",
      fullWidth: false,
}
