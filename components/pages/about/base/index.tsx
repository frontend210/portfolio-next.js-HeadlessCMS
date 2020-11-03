import React, { FC } from "react";
import {
  Box,
  Grid,
  Stack,
  Heading,
  Image,
  Text,
  Link,
  useColorMode, Flex, Progress,
} from "@chakra-ui/core";
import withNavbarLayout from "lib/with-navbar-layout";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io";

const Page: FC = () => {
  const { colorMode } = useColorMode();
  const cardBgColor = { light: "white", dark: "rgba(0,0,0,0.7)" };
  const cardColor = { light: "gray.900", dark: "white" };

  const headingNode = () => {
    return (
      <Stack isInline spacing={4} alignItems="center">
        <Box>
          <Image
            objectFit="cover"
            objectPosition="0 0"
            src="/images/common/avatar1.jpg"
            alt="Li Ke"
            width="8rem"
            height="8rem"
            color={cardBgColor[colorMode]}
            rounded="full"
            p={1}
          />
        </Box>
        <Box>
          <Stack spacing={2}>
            <Heading as="h1" size="xl">
              Li Ke
            </Heading>
            <Text fontWeight="bold">FullStack Engineer, Javascript Enthusiast</Text>
          </Stack>
        </Box>
      </Stack>
    );
  };

  const bioDescriptionNode = () => {
    return (
      <Box id="about" className="about">
        {/* About Me */}
        <div className="about-me">

          <div className="section-title">
            <h2>About</h2>
            {/*<p>Learn more about me</p>*/}
          </div>

          <Flex flexDirection={["column", "column", "row", "row"]}>
            <Flex size={["100%", "100%", "65%", "65%"]} className="content" pt={[4, 4, 0, 0]} data-aos="fade-left" display="block">
              <h3>Senior FullStack Web Developer, Javascript Enthusiast</h3>
              <Text as="i" color="#FFF" size="25px">
                Specialized in ES6+, Typescript, Python and PHP
              </Text>

              <br/>
              <br/>
              <Grid templateColumns={["repeat(1, 1fr)", "repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(2, 1fr)"]} gap={6}>
                <Box><i className="icofont-rounded-right"/> <strong>Email:</strong> sr.frontenddev210@gmail.com</Box>
                <Box><i className="icofont-rounded-right"/> <strong>Phone:</strong> +86 187 4150 9250</Box>
                <Box><i className="icofont-rounded-right"/> <strong>City:</strong> TianJin, China</Box>
                <Box><i className="icofont-rounded-right"/> <strong>Age:</strong> 30</Box>
                <Box><i className="icofont-rounded-right"/> <strong>Degree:</strong> Bachelor</Box>
                <Box><i className="icofont-rounded-right"/> <strong>Freelance:</strong> Available</Box>
              </Grid>

              <br/>
              <Text>
                I have over 10 years of experience working on a wide range of technologies and projects from LAMP stack
                to modern Angular, React and Vue application, static website with Node.js, PHP and Python backend.
              </Text>
              <br/>
              <Text>
                Throughout my career, I have acquired advanced technical knowledge, practical experience and the best practices
                in Software Architecture, Design Principles, Cybersecurity, DevOps, etc.
              </Text>
              <br/>
              <Text>
                I'm eager to learn new languages, frameworks and technologies. Recently I have an interest in
                Blockchain, AI technology, Functional programming, Golang, Microservice Architecture, Kubernetes.
              </Text>

              <br/>
              <br/>
              {socialLinksNode()}
            </Flex>
          </Flex>

        </div>{/*End About Me*/}

        {/* Counts */}
        <Grid className="counts" templateColumns={["repeat(2, 1fr)", "repeat(2, 1fr)", "repeat(4, 1fr)", "repeat(4, 1fr)"]} gap={6}>
          <Box className="count-box">
            <i className="icofont-simple-smile"/>
            <span data-toggle="counter-up">232</span>
            <p>Happy Clients</p>
          </Box>
          <Box className="count-box" mt={[0,0,5,5]}>
            <i className="icofont-document-folder"/>
            <span data-toggle="counter-up">521</span>
            <p>Projects</p>
          </Box>
          <Box className="count-box" mt={[0,0,5,5]}>
            <i className="icofont-live-support"/>
            <span data-toggle="counter-up">1,463</span>
            <p>Hours Of Support</p>
          </Box>
          <Box className="count-box" mt={[0,0,5,5]}>
            <i className="icofont-users-alt-5"/>
            <span data-toggle="counter-up">15</span>
            <p>Hard Workers</p>
          </Box>
        </Grid>
        {/* End Counts */}

        {/* Skills */}
        <Box className="skills">
          <Box className="section-title">
            <h2>Skills</h2>
          </Box>

          <Grid className="skills-content" templateColumns={["repeat(1, 1fr)", "repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(2, 1fr)"]} gap={6}>

            <Box className="progress">
              <span className="skill">Javascript <i className="val">90%</i></span>
              <Progress size="sm" value={90} />
              {/*<Box className="progress-bar-wrap">*/}
              {/*  <Box className="progress-bar" role="progressbar" aria-valuenow={90} aria-valuemin={0} aria-valuemax={100}/>*/}
              {/*</Box>*/}
            </Box>

            <Box className="progress">
              <span className="skill">Node.js <i className="val">90%</i></span>
              <Progress size="sm" value={90} />
            </Box>

            <Box className="progress">
              <span className="skill">Typescript <i className="val">80%</i></span>
              <Progress size="sm" value={80} />
            </Box>

            <Box className="progress">
              <span className="skill">PHP <i className="val">90%</i></span>
              <Progress size="sm" value={90} />
            </Box>

            <Box className="progress">
              <span className="skill">Python <i className="val">80%</i></span>
              <Progress size="sm" value={80} />
            </Box>

            <Box className="progress">
              <span className="skill">REST API development <i className="val">90%</i></span>
              <Progress size="sm" value={90} />
            </Box>

            <Box className="progress">
              <span className="skill">GraphQL <i className="val">80%</i></span>
              <Progress size="sm" value={80} />
            </Box>

            <Box className="progress">
              <span className="skill">Database <i className="val">80%</i></span>
              <Progress size="sm" value={80} />
            </Box>

            <Box className="progress">
              <span className="skill">Git <i className="val">90%</i></span>
              <Progress size="sm" value={90} />
            </Box>

            <Box className="progress">
              <span className="skill">Angular 8+ <i className="val">90%</i></span>
              <Progress size="sm" value={90} />
            </Box>

            <Box className="progress">
              <span className="skill">React.js <i className="val">80%</i></span>
              <Progress size="sm" value={80} />
            </Box>

            <Box className="progress">
              <span className="skill">Vue.js <i className="val">70%</i></span>
              <Progress size="sm" value={70} />
            </Box>

            <Box className="progress">
              <span className="skill">DevOps, CI/CD<i className="val">60%</i></span>
              <Progress size="sm" value={60} />
            </Box>

            <Box className="progress">
              <span className="skill">Networking, Cybersecurity Standards<i className="val">80%</i></span>
              <Progress size="sm" value={80} />
            </Box>

            <Box className="progress">
              <span className="skill">Server administration<i className="val">70%</i></span>
              <Progress size="sm" value={70} />
            </Box>

            <Box className="progress">
              <span className="skill">AWS, Firebase, Google Cloud<i className="val">70%</i></span>
              <Progress size="sm" value={70} />
            </Box>
          </Grid>
        </Box>{/* End Skills */}

        {/* Interests */}
        <Box className="interests">
          <div className="section-title">
            <h2>Interests</h2>
          </div>

          <Grid className="skills-content" templateColumns={["repeat(2, 1fr)", "repeat(3, 1fr)", "repeat(4, 1fr)", "repeat(4, 1fr)"]} gap={6}>
            <Box className="icon-box" mt={[0,0,4,4]}>
              <i className="ri-store-line" style={{color: "#ffbb2c"}}/>
              <h3>Blockchain</h3>
            </Box>
            <Box className="icon-box" mt={[0,0,4,4]}>
              <i className="ri-bar-chart-box-line" style={{color: "#5578ff"}}/>
              <h3>Artificial Intelligence</h3>
            </Box>
            <Box className="icon-box" mt={[0,0,4,4]}>
              <i className="ri-calendar-todo-line" style={{color: "#e80368"}}/>
              <h3>Software Architecture(monorepo, microservice)</h3>
            </Box>
            <Box className="icon-box" mt={[0,0,4,4]}>
              <i className="ri-paint-brush-line" style={{color: "#e361ff"}}/>
              <h3>Functional Programming</h3>
            </Box>
            <Box className="icon-box" mt={[0,0,4,4]}>
              <i className="ri-database-2-line" style={{color: "#47aeff"}}/>
              <h3>DevOps(Kubernetes)</h3>
            </Box>
          </Grid>
        </Box>{/* End Interests */}

        {/* Testimonials  */}
        {/*<Box className="testimonials">*/}
        {/*    <Box className="section-title">*/}
        {/*      <h2>Testimonials</h2>*/}
        {/*    </Box>*/}

        {/*    <Box className="owl-carousel testimonials-carousel">*/}

        {/*      <Box className="testimonial-item">*/}
        {/*        <p>*/}
        {/*          <i className="bx bxs-quote-alt-left quote-icon-left"/>*/}
        {/*          Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.*/}
        {/*          <i className="bx bxs-quote-alt-right quote-icon-right"/>*/}
        {/*        </p>*/}
        {/*        <img src="img/testimonials/testimonials-1.jpg" className="testimonial-img" alt=""/>*/}
        {/*          <h3>Saul Goodman</h3>*/}
        {/*          <h4>Ceo &amp; Founder</h4>*/}
        {/*      </Box>*/}

        {/*      <Box className="testimonial-item">*/}
        {/*        <p>*/}
        {/*          <i className="bx bxs-quote-alt-left quote-icon-left"/>*/}
        {/*          Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.*/}
        {/*          <i className="bx bxs-quote-alt-right quote-icon-right"/>*/}
        {/*        </p>*/}
        {/*        <img src="img/testimonials/testimonials-2.jpg" className="testimonial-img" alt=""/>*/}
        {/*          <h3>Sara Wilsson</h3>*/}
        {/*          <h4>Designer</h4>*/}
        {/*      </Box>*/}

        {/*      <Box className="testimonial-item">*/}
        {/*        <p>*/}
        {/*          <i className="bx bxs-quote-alt-left quote-icon-left"></i>*/}
        {/*          Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.*/}
        {/*          <i className="bx bxs-quote-alt-right quote-icon-right"></i>*/}
        {/*        </p>*/}
        {/*        <img src="img/testimonials/testimonials-3.jpg" className="testimonial-img" alt=""/>*/}
        {/*          <h3>Jena Karlis</h3>*/}
        {/*          <h4>Store Owner</h4>*/}
        {/*      </Box>*/}

        {/*      <Box className="testimonial-item">*/}
        {/*        <p>*/}
        {/*          <i className="bx bxs-quote-alt-left quote-icon-left"/>*/}
        {/*          Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.*/}
        {/*          <i className="bx bxs-quote-alt-right quote-icon-right"/>*/}
        {/*        </p>*/}
        {/*        <img src="img/testimonials/testimonials-4.jpg" className="testimonial-img" alt=""/>*/}
        {/*          <h3>Matt Brandon</h3>*/}
        {/*          <h4>Freelancer</h4>*/}
        {/*      </Box>*/}
        {/*    </Box>*/}

        {/*  </Box>*/}
        {/* End Testimonials */}
        </Box>
    );
  };

  const socialLinksNode = () => {
    return (
      <Stack spacing={4}>
        <Stack spacing={8}>
          <Heading as="h2" size="lg">
            Social profiles
          </Heading>
          <Text>You can find me in the following social websites:</Text>
        </Stack>
        <Box d="flex" alignItems="center">
          <Stack spacing={4} isInline>
            <Link
              py={2}
              px={4}
              href="https://github.com/frontend210"
              rounded="md"
              bg="#333"
              color="#fff"
              fontWeight="bold"
              isExternal
            >
              <Stack spacing={2} isInline alignItems="center">
                <Box as={IoLogoGithub} /> <Text>Github</Text>
              </Stack>
            </Link>
            <Link
              py={2}
              px={4}
              href="https://www.linkedin.com/in/ke-li-466256190"
              rounded="md"
              bg="#0e76a8"
              color="#fff"
              fontWeight="bold"
              isExternal
            >
              <Stack spacing={2} isInline alignItems="center">
                <Box as={IoLogoLinkedin} /> <Text>LinkedIn</Text>
              </Stack>
            </Link>
          </Stack>
        </Box>
      </Stack>
    );
  };

  return (
    <Box maxW="6xl" mx="auto" px={4} py={8}>
      <Grid templateColumns="1fr">
        <Box as="section" backgroundColor="rgba(0, 0, 0, 0.7)" p={["3", "3", "6", "6"]}>
          <Stack spacing={8}>
            {/*{headingNode()}*/}
            {bioDescriptionNode()}
            {/*{socialLinksNode()}*/}
          </Stack>
        </Box>
      </Grid>
    </Box>
  );
};

// export default withNavbarLayout(Page);
export default Page;
