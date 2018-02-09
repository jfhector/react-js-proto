import React from 'react'
import styled, {css} from 'styled-components'
import PropTypes from 'prop-types'
import { colors } from '../../docStyles'

const Component = ({
      visible,
      dismissable,

      alertOnclickHandler,
      children,

      className,
}) => (

      <div className={className}
      onClick={alertOnclickHandler}
      >     
            {children}

            {dismissable && 
                  <button type="button"
                  onClick={() => {}}>
                        ×
                  </button>
            }
      </div>

)

export const Alert = styled(Component)`

      padding: 12px 20px;
      margin: 16px 0;

      border-radius: 4px;

      font-size: medium;
      line-height: 24px;
      text-align: left;

      cursor: pointer;
      overflow: hidden;

      ${props => {
            switch (props.type) {
                  case "primary": return css`
                        color: ${colors.textColor.alert.primary};
                        background-color: ${colors.bgColor.alert.primary};
                        border: 1px solid ${colors.borderColor.alert.primary};
                  `
                  case "secondary": return css`
                        color: ${colors.textColor.alert.secondary};
                        background-color: ${colors.bgColor.alert.secondary};
                        border: 1px solid ${colors.borderColor.alert.secondary};
                  `
                  case "success": return css`
                        color: ${colors.textColor.alert.success};
                        background-color: ${colors.bgColor.alert.success};
                        border: 1px solid ${colors.borderColor.alert.success};
                  `
                  case "danger": return css`
                        color: ${colors.textColor.alert.danger};
                        background-color: ${colors.bgColor.alert.danger};
                        border: 1px solid ${colors.borderColor.alert.danger};
                  `
                  case "warn": return css`
                        color: ${colors.textColor.alert.warn};
                        background-color: ${colors.bgColor.alert.warn};
                        border: 1px solid ${colors.borderColor.alert.warn};
                  `
                  case "info": return css`
                        color: ${colors.textColor.alert.info};
                        background-color: ${colors.bgColor.alert.info};
                        border: 1px solid ${colors.borderColor.alert.info};
                  `
                  case "light": return css`
                        color: ${colors.textColor.alert.light};
                        background-color: ${colors.bgColor.alert.light};
                        border: 1px solid ${colors.borderColor.alert.light};
                  `
                  case "dark": return css`
                        color: ${colors.textColor.alert.dark};
                        background-color: ${colors.bgColor.alert.dark};
                        border: 1px solid ${colors.borderColor.alert.dark};
                  `
                  default: 
                        console.log('@Alert switch props.type: no switch case found')
            }

      }}

      ${props =>
            !props.visible && css`
                  height: 0;
                  padding: 0;
                  margin-bottom: 0;
                  border-width: 0;
                  line-height: 0px;
            `
      }

      transition: all 100ms ease-in-out, padding-left 1ms;

      > button {
            position: absolute;
            top: 0;
            right: 0;

            padding: 12px 20px;

            float: right;

            background-color: transparent;
            border: initial;

            font-size: x-large;
            line-height: 1;
            font-weight: bold;
            color: inherit;

            opacity: 0.5;
            cursor: pointer;
      }
`

Alert.propTypes = {
      visible: PropTypes.bool.isRequired,
      type: PropTypes.oneOf(["primary", "secondary", "success", "danger", "warn", "info", "light", "dark"]),
      dismissable: PropTypes.bool,
      alertOnclickHandler: PropTypes.func,
      children: PropTypes.node.isRequired,
      className: PropTypes.string,
}

Alert.defaultProps = {
      visible: true,
      type: "primary",
      dismissable: false,
      alertOnclickHandler: () => {console.log('Alert was clicked')}
}
