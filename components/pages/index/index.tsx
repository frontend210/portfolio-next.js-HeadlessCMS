import React, { FC } from "react";
import {Box, Flex, Grid, Stack} from "@chakra-ui/core";
import IArticle from "types/article";
import IPublication from "types/publication";
import IProject from "types/project";
import LazyLoad from "react-lazyload";
import dynamic from "next/dynamic";

const About = dynamic(import("components/pages/about/base"));
const Jumbotron = dynamic(import("components/pages/index/jumbotron"));
const NewsletterSubscriptionForm = dynamic(
  import("components/pages/index/newsletter-subscription-form")
);
const Articles = dynamic(
  import(/* webpackChunkName: "Articles" */ "components/layouts/articles")
);
const Publications = dynamic(
  import(
    /* webpackChunkName: "Publications" */ "components/layouts/publications"
  )
);
const Projects = dynamic(
  import(/* webpackChunkName: "Projects" */ "components/pages/index/projects")
);
const SocialLinks = dynamic(
  import(/* webpackChunkName: "SocialLinks" */ "components/social-links")
);
const Navbar = dynamic(
  import(/* webpackChunkName: "Navbar" */ "components/navbar")
);
const Footer = dynamic(
  import(/* webpackChunkName: "Footer" */ "components/footer")
);

interface Props {
  articles: IArticle[];
  publications: IPublication[];
  projects: IProject[];
}

const Page: FC<Props> = ({
  articles = [],
  publications = [],
  projects = [],
}) => {
  const sortedArticles = articles.sort(
    (a: IArticle, b: IArticle) =>
      Number(new Date(b.date)) - Number(new Date(a.date))
  );

  return (
    <>
      <Navbar />
      <Box>
        <Box maxW="10xl" mx="auto" px={4} py={8}>
          <Flex align="center" justifyContent="center" alignContent="center">
            <Box as="section">
              <LazyLoad once offset={100}>
                <About />
              </LazyLoad>
            </Box>
          </Flex>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default Page;
