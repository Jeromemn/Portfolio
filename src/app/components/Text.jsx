// import PropTypes from 'prop-types';
// import styled from 'styled-components';
// import { colors, fontWeights, text } from '../styles/theme';

// const Typography = styled.p`
//   color: ${({ $color, theme }) => theme.colors[$color]};
//   font-weight: ${({ $weight, theme }) => theme.fontWeights[$weight]};
//   ${({ $uppercase }) => $uppercase && 'text-transform: uppercase'};
//   ${({ $variant, theme }) => theme.text[$variant]};
//   ${({ $gutterBottom }) => $gutterBottom && 'margin-bottom: 16px'};
//   ${({ $textAlign }) => $textAlign && `text-align: ${$textAlign}`};
// `;

// const Text = ({
//   variant,
//   color,
//   weight,
//   uppercase,
//   gutterBottom,
//   textAlign,
//   ...props
// }) => (
//   <Typography
//     $variant={variant}
//     $color={color}
//     $weight={weight}
//     $uppercase={uppercase}
//     $gutterBottom={gutterBottom}
//     $textAlign={textAlign}
//     {...props}
//   />
// );

// Text.defaultProps = {
//   variant: 'body',
//   color: 'darkGrey',
//   weight: 'regular',
//   uppercase: false,
//   gutterBottom: true,
// };

// Text.propTypes = {
//   variant: PropTypes.oneOf(Object.keys(text)),
//   color: PropTypes.oneOf(Object.keys(colors)),
//   weight: PropTypes.oneOf(Object.keys(fontWeights)),
//   uppercase: PropTypes.bool,
//   gutterBottom: PropTypes.bool,
// };

// export default Text;
