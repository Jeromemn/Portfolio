export const breakpoints = {
  smallMobile: 'max-width: 400px',
  mobile: 'max-width: 600px',
  largeMobile: 'max-width: 900px',
  smallDesktop: 'max-width: 1050px',
  desktop: 'min-width: 1200px',
};

const joinTaggedLiterals = (content, values) => [...content, values].join('').replace(/\n/g, '').trim();

const mediaQuery = (width, content, values) => `
  @media screen and (${width}) { ${joinTaggedLiterals(content, values)} }
`;

export const mq = {
  smallMobile: (content, ...values) => mediaQuery(breakpoints.smallMobile, content, values),
  mobile: (content, ...values) => mediaQuery(breakpoints.mobile, content, values),
  largeMobile: (content, ...values) => mediaQuery(breakpoints.largeMobile, content, values),
  desktop: (content, ...values) => mediaQuery(breakpoints.desktop, content, values),
  smallDesktop: (content, ...values) => mediaQuery(breakpoints.smallDesktop, content, values),
};
