'use client';
import PropTypes from 'prop-types';
import Link from 'next/link';
import styled, { css } from 'styled-components';
import roboto from '../layout';

const defaultStyles = css`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 18px;
  border: none;
  line-height: 36px;
  height: 36px;
  padding: 0 15px;
  gap: 10px;
  min-width: 102px;
  cursor: pointer;
  font-family: inherit;
  font-weight: 500;
  font-size: ${(props) => props.fontSize || '14px'};
  max-width: 200px;

  &:disabled {
    cursor: not-allowed;
  }
`;

const PrimaryButton = styled.button`
  ${defaultStyles};
  color: black;
  background-color: #fff;
  border: 1px solid #fff;

  &:hover {
    background: #dbdbdb;
  }
  &:disabled {
    background: rgba(255, 255, 255, 0.055);
  }
`;

const SecondaryButton = styled.button`
  ${defaultStyles};
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: ${(props) => props.color || 'rgba(255, 255, 255, 0.7)'};
  background: none;

  ${(props) =>
    props.disabled &&
    `
    background: none;
    pointer-events: none;
    color: rgba(255, 255, 255, 0.2);
  `}

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    height: 36px;
  }
`;

const IconButton = styled.button`
  ${defaultStyles};
  background: none;
  width: fit-content;
  min-width: auto;
  padding: 0 6px;

  &:hover {
    background-size: 30px 80px;
    background: linear-gradient(
      #bbbbbb53 0%,
      #bbbbbb53 25%,
      #bbbbbb53 75%,
      #bbbbbb53 95%,
      #bbbbbb53 100%,
      #bbbbbb53 110%
    );
    border-radius: 50%;
    display: inline-flex;
  }
`;

const PlainButton = styled.button`
  background: none;
  width: fit-content;
  min-width: auto;
  padding: 0;
  text-align: right;
  align-items: center;
  display: flex;
  color: white;
  border: none;
  line-height: 36px;
  height: 30px;
  cursor: pointer;

  &:hover {
    background: linear-gradient(
      #bbbbbb53 0%,
      #bbbbbb53 25%,
      #bbbbbb53 75%,
      #bbbbbb53 95%,
      #bbbbbb53 100%,
      #bbbbbb53 110%
    );
    display: inline-flex;
  }
`;

const MobilePrimary = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  border: none;
  background-color: #fff;
  width: ${({ width }) => width || '60px'};
  height: ${({ height }) => height || '60px'};
  padding: 6px;
`;

const MobileSecondary = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  border: none;
  width: 50px;
  height: 50px;
  background: rgba(255, 255, 255, 0.1);
`;

const variants = {
  primary: PrimaryButton,
  secondary: SecondaryButton,
  icon: IconButton,
  plain: PlainButton,
  mobilePrimary: MobilePrimary,
  mobileSecondary: MobileSecondary,
};

const ButtonBase = ({ variant, onClick, children, disabled, ...props }) => {
  const StyledButton = variants[variant] || variants.primary;
  return (
    <StyledButton
      role="button"
      as={props.href ? Link : undefined}
      onClick={onClick}
      className={roboto.className}
      disabled={disabled}
      {...props}
    >
      {children}
    </StyledButton>
  );
};

ButtonBase.defaultProps = {
  variant: 'primary',
  onClick: () => {},
  children: null,
};

ButtonBase.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary', 'icon', 'plain', 'mobilePrimary', 'mobileSecondary']),
  onClick: PropTypes.func,
  children: PropTypes.node,
};

export default ButtonBase;
