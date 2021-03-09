import { Box, Text, Container, Flex, Grid, Heading, Image, Link } from '@chakra-ui/react';
import React, { useEffect, useRef, useState } from 'react';
import Nav from '../../components/Nav';

const Portfolio = () => {
  const [isScrolled, setIsScrolled] = useState(true);
  const firstSectionRef = useRef<HTMLDivElement>();

  useEffect(() => {
    const options: IntersectionObserverInit = { threshold: 0.5 };
    const callback = (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;
      console.log(entry);

      if (entry.isIntersecting) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    const intObs = new IntersectionObserver(callback, options);

    intObs.observe(firstSectionRef.current);

    return () => {
      intObs.unobserve(firstSectionRef.current);
    };
  }, [firstSectionRef]);

  return (
    <>
      <Nav heading="Portfolio" isScrolled={isScrolled} />
      <Box ref={firstSectionRef}></Box>
      <Container as="main" mb={4} maxW="container.xl">
        <Flex as="section" flexWrap="wrap" sx={{ gap: '1rem' }} justifyContent="center">
          <Link href="/coffee.html">
            <Grid
              as="article"
              templateRows="repeat(2, minmax(0, 1fr))"
              w={['full', '26rem']}
              h="26rem"
              bgColor="green.500"
              borderRadius="lg"
            >
              <Image
                height="full"
                width="full"
                borderTopRadius="lg"
                objectFit="cover"
                src="/images/coffee/coffee.png"
              />
              <Box p={4} overflow="hidden" textOverflow="ellipsis">
                <Heading as="div" size="lg">
                  Coffee
                </Heading>
                <Text noOfLines={6}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti velit libero explicabo? Aliquam,
                  natus nihil molestiae veniam corporis, harum, rem ipsum eos quia ratione totam laborum iusto! Officia
                  corporis deleniti facilis tenetur inventore assumenda iure. Minima ipsum distinctio hic est doloribus,
                  quam quibusdam voluptate exercitationem facilis accusantium nemo explicabo numquam?
                </Text>
              </Box>
            </Grid>
          </Link>
        </Flex>
      </Container>
    </>
  );
};

export default Portfolio;
