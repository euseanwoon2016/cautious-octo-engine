import React, { useEffect, useState, useRef } from 'react';

import { Box, Button, Heading, Link, Text } from '@chakra-ui/react';
import homeStyles from '../styles/Home.module.scss';

import Nav from '../components/Nav';
import { BottomLeftSection, BottomRightSection } from '../components/Section';
import ContactSection from '../components/ContactSection';

export default function Home() {
  const [scrolledState, setScrolledState] = useState({
    nav: false,
    coolstuff: false,
    otherstuff: false,
  });

  const webDevRef = useRef<HTMLDivElement>();
  const coolStuffRef = useRef<HTMLDivElement>();
  const otherStuffRef = useRef<HTMLDivElement>();

  useEffect(() => {
    const options: IntersectionObserverInit = { threshold: 0.3 };
    const callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry: IntersectionObserverEntry) => {
        if (entry.isIntersecting) {
          setScrolledState((prevState) => {
            // if (entry.target !== webDevRef.current) {
            //   intObs.unobserve(entry.target);
            // }
            return { ...prevState, [entry.target.id]: true };
          });
        } else {
          setScrolledState((prevState) => {
            if (entry.target === webDevRef.current) {
              return { ...prevState, [entry.target.id]: false };
            } else {
              return { ...prevState };
            }
          });
        }
      });
    };

    const intObs = new IntersectionObserver(callback, options);

    intObs.observe(webDevRef.current);
    intObs.observe(coolStuffRef.current);
    intObs.observe(otherStuffRef.current);

    return () => {
      intObs.unobserve(webDevRef.current);
      intObs.unobserve(coolStuffRef.current);
      intObs.unobserve(otherStuffRef.current);
    };
  }, [webDevRef, coolStuffRef, otherStuffRef]);

  useEffect(() => {
    console.log(scrolledState);
  }, [scrolledState]);

  return (
    <>
      <Nav heading="Woon Eusean" isScrolled={scrolledState.nav} />
      <BottomRightSection
        id="nav"
        boxRef={webDevRef}
        className={`${homeStyles.webDevSection} ${homeStyles.rightImageVisible}`}
      >
        <Box maxW="4xl">
          <Heading size="4xl">I do web dev</Heading>
          <Text>
            I am picking up as much web dev as I can recently. Learning technologies like React, Next.js, MongoDB,
            GraphQL and many others just so I can get hired as an intern.
          </Text>
        </Box>
      </BottomRightSection>
      <BottomLeftSection
        id="coolstuff"
        boxRef={coolStuffRef}
        className={`${homeStyles.coolStuffSection} ${scrolledState.coolstuff ? homeStyles.leftImageVisible : ''}`}
      >
        <Box className={homeStyles.sectionShadow} color="white" maxW="4xl">
          <Heading size="4xl">
            I make cool stuff{' '}
            <Text as="span" fontSize="8px">
              sometimes
            </Text>
          </Heading>
          <Text>
            I am learning 3D modelling using Blender. I sometimes make super cool looking renders. Most of the time I
            don't.
          </Text>
        </Box>
      </BottomLeftSection>
      <BottomRightSection
        id="otherstuff"
        boxRef={otherStuffRef}
        className={`${homeStyles.otherStuffSection} ${scrolledState.otherstuff ? homeStyles.rightImageVisible : ''}`}
      >
        <Box maxW="4xl">
          <Heading size="4xl">I do a bunch of other stuff</Heading>
          <Text>
            I do Blender, I play Genshin Impact and Apex Legends, I make{' '}
            <Link href="https://github.com/euseanwoon2016/minecraft-fishermen">minecraft fishing bots</Link>, and other
            programming related stuff.
          </Text>
        </Box>
      </BottomRightSection>
      <ContactSection />
    </>
  );
}
