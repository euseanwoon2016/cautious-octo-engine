import { ArrowDownIcon } from '@chakra-ui/icons';
import {
  Box,
  Container,
  Text,
  Image,
  Flex,
  Link,
  Grid,
  Center,
  Heading,
  Button,
  Icon,
  VStack,
  ChakraProps,
} from '@chakra-ui/react';
import React from 'react';
import Meta from '../../components/Meta';

import coffeeStyles from '../../styles/Coffee.module.scss';
import Repeat from '../../utils/Repeat';

const Coffee = () => {
  const GridSection = ({ children }) => {
    return (
      <Grid
        h={['900px', '900px', '900px', '600px']}
        gap={8}
        className={coffeeStyles.hero}
        templateColumns={['1fr', '1fr', '1fr', 'repeat(2, 1fr)']}
      >
        {children}
      </Grid>
    );
  };

  return (
    <>
      <Meta
        title="Coffee Cat"
        description="Coffee Cat is a place where you can explore your coffee tastes and find out your perfect brew."
        url="https://woon.win/coffee.html"
        img="/images/coffee/cat.png"
      />
      <Box as="main" className={coffeeStyles.bodyStyle}>
        <Container id="home" as="section" className={coffeeStyles.coffeeSection} maxW="container.xl">
          <Grid as="nav" templateColumns={['1fr', '1fr 1fr']}>
            <Flex justifyContent={['center', 'initial']} className={coffeeStyles.logo}>
              <Image src="images/coffee/cat.png" />
              <Text>Coffee Cat</Text>
            </Flex>
            <Flex className={coffeeStyles.navigation}>
              <Link href="#home">Home</Link>
              <Link href="#explore">Explore</Link>
              <Link href="#quiz">Quiz</Link>
              <Link href="#contact">Contact Us</Link>
            </Flex>
          </Grid>
          <GridSection>
            <Box>
              <Text as="h1" className={coffeeStyles.heroHeader}>
                Coffee is our passion
              </Text>
              <Text className={coffeeStyles.heroBody} fontSize={['16px', '18px', '24px', '24px']}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi facilis excepturi tempore, beatae
                architecto cum? Labore, impedit repellendus. Earum, fugit esse? Vero, maiores optio. Facilis, obcaecati
                saepe similique totam numquam, illo dolorum voluptatibus explicabo sit eligendi accusamus, blanditiis
                praesentium iste nihil optio incidunt repellat culpa ratione. Error eius neque voluptas ipsum
                recusandae, id, numquam, fugiat molestiae laboriosam repellendus necessitatibus est.
              </Text>
              <Center margin={4}>
                <Button className={coffeeStyles.button}>Explore Our Blends</Button>
              </Center>
            </Box>
            <Image w="100%" h="100%" objectFit="cover" src="images/coffee/coffee.png" />
          </GridSection>
        </Container>
        <Box id="explore" as="section" className={coffeeStyles.coffeeSection}>
          <Box className={coffeeStyles.coffeeGradient}>
            <Container maxW="container.xl" pos="relative" zIndex="1" centerContent>
              <Heading mb={8} textAlign="center">
                Explore Our Blends
              </Heading>
              <Grid
                gap={['0.25rem', '0.5rem', '1.5rem', '2.5rem']}
                templateColumns={['repeat(2, 1fr)', 'repeat(2, 1fr)', 'repeat(3, 1fr)', 'repeat(3, 1fr)']}
              >
                <Repeat times={6}>
                  <Box
                    className={coffeeStyles.brewBox}
                    boxSize={['10rem', '10rem', '15rem', '15rem', '20rem']}
                    bgImage="url('images/coffee/coffee.png')"
                    bgSize="cover"
                  >
                    <Center position="relative" zIndex="1" w="100%" h="100%">
                      <Box textShadow="0 0 0.25rem white" display={['none', 'none', 'block']}>
                        <Text fontSize={['12px', '12px', '1.5rem', '1.5rem', '2rem']}>Arabica</Text>
                        <Text fontSize={['12px', '12px', '0.75rem', '0.75rem', '1rem']}>
                          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos recusandae vero omnis laboriosam
                          soluta, cumque voluptatum ea debitis nostrum labore!
                        </Text>
                      </Box>
                    </Center>
                  </Box>
                </Repeat>
              </Grid>
              <Center>
                <ArrowDownIcon
                  mt="1.5rem"
                  boxSize={['64px', '96px']}
                  color="white"
                  filter="drop-shadow(0px 2px 4px rgba(100,100,100,0.5))"
                />
              </Center>
            </Container>
          </Box>
        </Box>
        <Container id="quiz" as="section" className={coffeeStyles.coffeeSection} maxW="container.xl">
          <GridSection>
            <Image w="100%" h="100%" objectFit="contain" src="images/coffee/wantcoffee.png" />
            <Box>
              <Text as="h1" className={coffeeStyles.heroHeader}>
                Whats the right brew?
              </Text>
              <Text className={coffeeStyles.heroBody} fontSize={['16px', '18px', '24px', '24px']}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi facilis excepturi tempore, beatae
                architecto cum? Labore, impedit repellendus. Earum, fugit esse? Vero, maiores optio. Facilis, obcaecati
                saepe similique totam numquam, illo dolorum voluptatibus explicabo sit eligendi accusamus, blanditiis
                praesentium iste nihil optio incidunt repellat culpa ratione. Error eius neque voluptas ipsum
                recusandae, id, numquam, fugiat molestiae laboriosam repellendus necessitatibus est.
              </Text>
              <Center margin={4}>
                <Button className={coffeeStyles.button}>Take The Quiz</Button>
              </Center>
            </Box>
          </GridSection>
        </Container>
        <Box id="contact" as="section" className={coffeeStyles.coffeeSection}>
          <Box className={coffeeStyles.coffeeGradient2}>
            <Container maxW="container.xl" pos="relative" zIndex="1">
              <Heading textAlign="center" fontSize="3rem" fontWeight="400">
                Give us a holler
              </Heading>
              <Grid
                templateColumns={['1fr', 'repeat(2, 1fr)']}
                gap={['1rem', '4rem 1rem']}
                padding={['0', '4rem']}
                mt="2rem"
              >
                <Box>
                  <Heading size="md" fontWeight="400" color="#888" fontSize="1.5rem">
                    Shoot us an email
                  </Heading>
                  <Text className={coffeeStyles.button} marginY={8}>
                    hello@coffeecat.club
                  </Text>
                </Box>
                <Box>
                  <Heading size="md" fontWeight="400" color="#888" fontSize="1.5rem">
                    Call us
                  </Heading>
                  <Text className={coffeeStyles.button} marginY={8}>
                    (446) 464-0829
                  </Text>
                </Box>
                <Box>
                  <Heading size="md" fontWeight="400" color="#888" fontSize="1.5rem">
                    Visit us
                  </Heading>
                  <Text fontSize="24px">
                    3315 NW Hunting Hill Street,
                    <br /> 257 Towers Building,
                    <br /> Boise, Idaho, 59057
                  </Text>
                </Box>
                <Box>
                  <Heading size="md" fontWeight="400" color="#888" fontSize="1.5rem">
                    Were social!
                  </Heading>
                  <Flex sx={{ gap: '12px' }} my={2} fontSize="52px">
                    <Icon viewBox="0 0 52 52">
                      <path
                        fill="#ec6d00"
                        d="M15.0938 0C6.78125 0 0 6.78125 0 15.0938L0 36.9063C0 45.2188 6.78125 52 15.0938 52L36.9063 52C45.2188 52 52 45.2188 52 36.9063L52 15.0938C52 6.78125 45.2188 0 36.9063 0L15.0938 0ZM15.0938 4L36.9063 4C43.0547 4 48 8.9375 48 15.0938L48 36.9063C48 43.0547 43.0625 48 36.9063 48L15.0938 48C8.94531 48 4 43.0625 4 36.9063L4 15.0938C4 8.94531 8.9375 4 15.0938 4L15.0938 4ZM41 8C39.3438 8 38 9.34375 38 11C38 12.6563 39.3438 14 41 14C42.6563 14 44 12.6563 44 11C44 9.34375 42.6563 8 41 8L41 8ZM26 12C18.2891 12 12 18.2891 12 26C12 33.7109 18.2891 40 26 40C33.7109 40 40 33.7109 40 26C40 18.2891 33.7109 12 26 12L26 12ZM26 16C31.5469 16 36 20.4531 36 26C36 31.5469 31.5469 36 26 36C20.4531 36 16 31.5469 16 26C16 20.4531 20.4531 16 26 16L26 16Z"
                      />
                    </Icon>
                    <Icon viewBox="0 0 52 52">
                      <path
                        fill="#ec6d00"
                        d="M45.3333 0L5.66667 0C2.53583 0 0 2.53583 0 5.66667L0 45.3333C0 48.4642 2.53583 51 5.66667 51L27.2595 51L27.2595 31.2772L20.621 31.2772L20.621 23.5563L27.2595 23.5563L27.2595 17.8755C27.2595 11.2908 31.2857 7.701 37.162 7.701C39.1425 7.69533 41.1202 7.79733 43.0893 7.9985L43.0893 14.8835L39.0433 14.8835C35.8417 14.8835 35.2183 16.3965 35.2183 18.6292L35.2183 23.545L42.8683 23.545L41.8738 31.2658L35.173 31.2658L35.173 51L45.3333 51C48.4642 51 51 48.4642 51 45.3333L51 5.66667C51 2.53583 48.4642 0 45.3333 0L45.3333 0Z"
                      />
                    </Icon>
                    <Icon viewBox="0 0 52 52">
                      <path
                        fill="#ec6d00"
                        d="M52 4.98503C50.0534 5.84831 48.0983 6.5 45.9316 6.72006C48.0983 5.41667 49.8333 3.25 50.6966 0.863283C48.5299 2.16667 46.3633 3.02995 43.985 3.47005C41.8184 1.30339 39 0 35.9701 0C30.1133 0 25.3483 4.76498 25.3483 10.6133C25.3483 11.485 25.3483 12.3483 25.5684 13C16.6816 12.5684 8.88672 8.44662 3.68164 1.94662C2.59831 3.47005 2.16667 5.41667 2.16667 7.36329C2.16667 11.0534 4.11328 14.3034 6.93164 16.25C5.19662 16.03 3.47005 15.5983 2.16667 14.9466C2.16667 14.9466 2.16667 14.9466 2.16667 15.1667C2.16667 20.3633 5.84831 24.6966 10.6133 25.5684C9.75 25.78 8.88672 26 7.80339 26C7.15169 26 6.5 26 5.84831 25.78C7.15169 30.1133 11.0534 33.1517 15.8184 33.1517C12.1367 35.9701 7.58333 37.6966 2.59831 37.6966C1.73503 37.6966 0.863282 37.6966 0 37.485C4.76497 40.515 10.4017 42.25 16.25 42.25C35.9701 42.25 46.5833 26 46.5833 11.9167C46.5833 11.485 46.5833 11.0534 46.5833 10.6133C48.75 9.09831 50.485 7.15169 52 4.98503"
                        transform="translate(0 4.333252)"
                      />
                    </Icon>
                  </Flex>
                </Box>
              </Grid>
              <Flex fontSize="20px" color="#888" mt="6rem" flexWrap="wrap" justifyContent="space-between">
                <VStack alignItems="start">
                  <Link>Contact Us</Link>
                  <Link>About Us</Link>
                  <Link>Directions</Link>
                  <Link>Blog</Link>
                </VStack>
                <VStack alignItems="start">
                  <Link>Promotions</Link>
                  <Link>Partners</Link>
                  <Link>Careers</Link>
                  <Link>FAQs</Link>
                </VStack>
                <VStack alignItems="start">
                  <Link>Join Newsletter</Link>
                  <Link>Lorem, ipsum dolor.</Link>
                  <Link>Lorem, ipsum.</Link>
                  <Link>Lorem ipsum dolor sit.</Link>
                </VStack>
              </Flex>
            </Container>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Coffee;
