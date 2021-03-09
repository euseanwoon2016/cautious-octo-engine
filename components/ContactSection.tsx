import {
  Center,
  Box,
  Heading,
  HStack,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverBody,
  useColorModeValue,
  Image,
  Flex,
} from '@chakra-ui/react';
import styled from '@emotion/styled';

import React, { useEffect, useRef, useState } from 'react';

import { AiFillMail } from 'react-icons/ai';
import { FaGithub, FaDiscord, FaSteam, FaLinkedin } from 'react-icons/fa';

import Section from './Section';

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const contactSectionRef = useRef<HTMLDivElement>();

  const bg = useColorModeValue('grey.300', 'grey.900');

  const iconColor = useColorModeValue('hsl(0, 0%, 20%)', 'hsl(0, 0%, 85%)');
  const iconHoverColor = useColorModeValue('hsl(0, 0%, 0%)', 'hsl(0, 0%, 100%)');

  const Icon = styled('div')`
    color: ${iconColor};

    &:hover {
      color: ${iconHoverColor};
    }
  `;

  useEffect(() => {
    const options: IntersectionObserverInit = { threshold: 0.6 };

    const callback = (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;

      if (entry.isIntersecting) {
        intObs.unobserve(entry.target);
        setIsVisible(true);
      }
    };

    const intObs = new IntersectionObserver(callback, options);

    intObs.observe(contactSectionRef.current);

    return () => {
      intObs.unobserve(contactSectionRef.current);
    };
  }, [contactSectionRef]);

  return (
    <Section boxRef={contactSectionRef} id="contact" bgColor={bg}>
      <Center h="100%">
        <Flex flexDirection="column" alignItems="center" sx={{ gap: '1rem' }} maxW="4xl">
          <Heading textAlign="center" size="4xl" mb="1rem">
            Contact Me
          </Heading>
          <Image
            transform={`translateY(${isVisible ? '0' : '100%'})`}
            transition="transform 0.25s cubic-bezier(0, 0, 0, 1)"
            boxSize="250px"
            objectFit="cover"
            borderRadius="full"
            src="images/me.jpg"
            alt="Image of Woon Eusean"
          />
          <Heading>Woon Eusean</Heading>
          <HStack justifyContent="center">
            <Link href="https://github.com/euseanwoon2016">
              <Icon>
                <FaGithub size="32px" />
              </Icon>
            </Link>
            <Popover>
              <PopoverTrigger>
                <Link>
                  <Icon>
                    <FaDiscord size="32px" />
                  </Icon>
                </Link>
              </PopoverTrigger>
              <PopoverContent>
                <PopoverArrow />
                <PopoverBody>
                  <Link href="https://discord.com/users/160232471198302208">whoon#5321</Link>
                </PopoverBody>
              </PopoverContent>
            </Popover>
            <Link href="https://steamcommunity.com/id/whoon/">
              <Icon>
                <FaSteam size="32px" />
              </Icon>
            </Link>
            <Link href="https://www.linkedin.com/in/woon-eusean-9233b8187/">
              <Icon>
                <FaLinkedin size="32px" />
              </Icon>
            </Link>
            <Link href="mailto:euseanwoon2015@gmail.com">
              <Icon>
                <AiFillMail size="32px" />
              </Icon>
            </Link>
          </HStack>
        </Flex>
      </Center>
    </Section>
  );
};

export default ContactSection;
