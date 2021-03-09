import { Box, BoxProps } from '@chakra-ui/react';
import styled from '@emotion/styled';
import React from 'react';

interface BoxPropsWithRef extends BoxProps {
  boxRef?: React.LegacyRef<HTMLDivElement> & React.LegacyRef<HTMLElement>;
}

const Section: React.FC<BoxPropsWithRef> = ({ children, boxRef, ...chakraProps }) => {
  return (
    <Box ref={boxRef} p={['1rem', '3rem', '6rem']} {...chakraProps} as="section" height="100vh">
      {children}
    </Box>
  );
};

export default Section;

export const BottomRightSection = styled(Section)`
  display: flex;
  justify-content: end;
  align-items: end;
`;

export const BottomLeftSection = styled(Section)`
  display: flex;
  justify-content: start;
  align-items: end;
`;
