import React from 'react'
import { Button } from 'antd'
import styled from 'styled-components'

const ButtonCustom = styled(Button)`
  /* font: ${(props) => props.theme.fonts.WebH4};
  color: ${(props) => props.theme.colors.TextIconInverse};
  background-color: ${(props) => props.theme.colors.CtaBgBrandEnable};
  border-radius: ${(props) => props.theme.spacing.borderRadius.default};
  padding: 4px 16px;
  height: 32px;
  border: none;
  .ant-btn-lg {
    padding: 8px 16px;
    height: 40px;
  }
  &:hover {
    color: ${(props) => props.theme.colors.BgSurface2} !important;
    background-color: ${(props) => props.theme.colors.CtaBgBrandHover} !important;
  }
  &[disabled] {
    background-color: ${(props) => props.theme.colors.CtaBgBrandDisable};
  }

  &.ant-btn-default {
    color: ${(props) => props.theme.colors.TextIconIgray1};
    background-color: ${(props) => props.theme.colors.BgSurface2};
    border: 1px solid ${(props) => props.theme.colors.BorderGray};
    &:hover {
      color: ${(props) => props.theme.colors.CtaBgBrandHover} !important;
      background-color: ${(props) => props.theme.colors.BgSurface2} !important;
      border: 1px solid ${(props) => props.theme.colors.CtaBgBrandHover} !important;
    }
  }

  &.ant-btn-text {
    color: ${(props) => props.theme.colors.TextIconIgray1};
    background-color: ${(props) => props.theme.colors.BgSurface2};
    &:hover {
      color: ${(props) => props.theme.colors.TextIconIgray1} !important;
      background-color: ${(props) => props.theme.colors.Gray6} !important;
    }
  } */
  border-radius: 8px;
`

interface ButtonDsProps {
  children?: React.ReactNode
  type?: 'primary' | 'default' | 'text'
  size?: 'middle' | 'large'
  disabled?: boolean
  onClick?: () => void
}

const ButtonDs = ({ children, type, size, disabled, onClick }: ButtonDsProps) => {
  return (
    <ButtonCustom type={type} size={size} disabled={disabled} onClick={onClick}>
      {children}
    </ButtonCustom>
  )
}

export default ButtonDs
