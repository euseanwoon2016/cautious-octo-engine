import { Box, Button, Container, Flex, Heading, Link, useColorMode, useColorModeValue } from '@chakra-ui/react';
import React, { useEffect, useRef, useState } from 'react';

import navStyle from '../styles/Nav.module.scss';
import DarkModeToggle from './DarkModeToggle';

const Nav: React.FC<{ isScrolled: boolean; heading: string }> = ({ isScrolled, heading }) => {
  const { colorMode } = useColorMode();
  const bg = 'green.900';

  return (
    <Box className={`${navStyle.navContainer} ${isScrolled ? '' : navStyle.navScrolled}`}>
      <Container
        as="nav"
        className={navStyle.navBar}
        maxW="container.lg"
        flexDirection={['column', 'row']}
        justifyContent={['center', 'space-between']}
      >
        <Heading>{heading}</Heading>
        <Flex sx={{ gap: '1rem' }} alignItems="center" flexDirection={['column', 'row']}>
          <Link href="/">
            <Heading as="div" size="md">
              Home
            </Heading>
          </Link>
          <Link href="/portfolio.html">
            <Heading as="div" size="md">
              Portfolio
            </Heading>
          </Link>
          <Link href="#contact">
            <Heading as="div" size="md">
              Contact Me
            </Heading>
          </Link>
        </Flex>
        {/* <DarkModeToggle /> */}
      </Container>
    </Box>
  );
};

export default Nav;
