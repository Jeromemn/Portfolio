import PropTypes from "prop-types";
import Link from "next/link";
import styled, { css } from "styled-components";
import roboto from "../layout";

const defaultStyles = css`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 18px;
  border: none;
  line-height: 36px;
  height: 36px;
  padding: 0 16px;
  gap: 10px;
  min-width: 136px;
  cursor: pointer;
  font-family: inherit;
  font-weight: 500;
  font-size: 14px;
  /* font-family: 'roboto'; */
`;

const PrimaryButton = styled.button`
  ${defaultStyles}
  color: black;
  border: none;
  background-color: #fff;

  &:hover {
    background: #dbdbdb;
  }
`;

const SecondaryButton = styled.button`
  ${defaultStyles}
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #fff;
  background: none;
  padding: 0rem 15px;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    height: 36px;
  }
`;

const IconButton = styled.button`
  ${defaultStyles}
  background: none;
  width: fit-content;
  min-width: auto;
  padding: 0 6px

`;

const variants = {
  primary: PrimaryButton,
  secondary: SecondaryButton,
  icon: IconButton
};

const ButtonBase = ({ variant, onClick, children, ...props }) => {
  const StyledButton = variants[variant] || variants.primary;
  return (
    <StyledButton
      role="button"
      as={props.href ? Link : undefined}
      onClick={onClick}
      className={roboto.className}
      {...props}
    >
      {children}
    </StyledButton>
  );
};

ButtonBase.defaultProps = {
  variant: "primary",
  onClick: () => {},
  children: null,
};

ButtonBase.propTypes = {
  variant: PropTypes.oneOf(["primary", "secondary", "icon"]),
  onClick: PropTypes.func,
  children: PropTypes.node,
};

export default ButtonBase;
