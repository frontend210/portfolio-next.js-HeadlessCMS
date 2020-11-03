import React, { FC, useState, FormEvent } from "react";
import {
  Box,
  Stack,
  Heading,
  Text,
  Button,
  Link as _Link,
  Image,
  Icon,
  Input,
  useColorMode,
} from "@chakra-ui/core";
import Link from "next/link";
import IArticle from "types/article";
import { IoMdArrowRoundForward } from "react-icons/io";
import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";

dayjs.extend(localizedFormat);

interface Props {
  articles: IArticle[];
  hideViewAllLinksNode?: boolean;
}

const Articles: FC<Props> = ({
  articles = [],
  hideViewAllLinksNode = false,
}) => {
  const { colorMode } = useColorMode();
  const cardBgColor = { light: "white", dark: "rgba(0,0,0,0.7)" };
  const cardColor = { light: "gray.900", dark: "white" };
  const [searchQuery, setSearchQuery] = useState("");
  const sortedArticles = articles
    .sort(
      (a: IArticle, b: IArticle) =>
        Number(new Date(b.date)) - Number(new Date(a.date))
    )
    .filter((article) =>
      article.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

  const viewAllLinksNode = () => {
    return (
      <Link href="/articles">
        <_Link p={2} href="/articles" rounded="md">
          <Stack spacing={2} isInline alignItems="center">
            <Box fontWeight="bold">View all articles</Box>
            <Box as={IoMdArrowRoundForward} size="15px" />
          </Stack>
        </_Link>
      </Link>
    );
  };

  const searchNode = () => {
    if (!hideViewAllLinksNode) return false;

    return (
      <Box>
        <Input
          value={searchQuery}
          onChange={(e: FormEvent<HTMLInputElement>) =>
            setSearchQuery(e.currentTarget.value)
          }
          placeholder="Search for an article"
        />
      </Box>
    );
  };

  const headingNode = () => {
    if (hideViewAllLinksNode) {
      return (
        <Box>
          <Stack spacing={2}>
            <Heading as="h1" size="xl">
              Articles
            </Heading>
            <Text>Posts related to some of the latest technologies</Text>
          </Stack>
        </Box>
      );
    }

    return (
      <Box d="flex" justifyContent="space-between" alignItems="center">
        <Heading as="h2" size="xl">
          Articles
        </Heading>
        {viewAllLinksNode()}
      </Box>
    );
  };

  const metaNode = (date: string, readingTime: string) => {
    return (
      <Stack spacing={4} isInline alignItems="center">
        <Box>
          <Text fontSize="xs">{dayjs(date).format("LL")}</Text>
        </Box>
        <Icon name="minus" size="12px" />
        <Box>
          <Text fontSize="xs">{readingTime}</Text>
        </Box>
      </Stack>
    );
  };

  const titleNode = (title: string) => {
    return (
      <Heading as="h3" size="md" letterSpacing="tight" lineHeight="tall">
        {title}
      </Heading>
    );
  };

  const descriptionNode = (description: string) => {
    return <Text fontSize="sm">{description}</Text>;
  };

  const ctaNode = () => {
    return (
      <Button rightIcon="arrow-forward" variant="link" fontSize="sm">
        Read more
      </Button>
    );
  };

  const articlesNode = () => {
    if (!sortedArticles.length) {
      return (
        <Stack mx="auto" textAlign="center">
          <Image
            src="/images/common/no-items.svg"
            alt="No articles found!"
            size={64}
          />
          <Text>No articles found!</Text>
        </Stack>
      );
    }

    return sortedArticles.map((article: IArticle) => {
      const permalink = article.__resourcePath.replace(".mdx", "");

      return (
        <Box key={permalink}>
          <Link href={`/${permalink}`}>
            <a>
              <Box
                bg={cardBgColor[colorMode]}
                color={cardColor[colorMode]}
                p={8}
                rounded="md"
                shadow="md"
              >
                <Stack spacing={4}>
                  {metaNode(article.date, article.readingTime.text)}
                  {titleNode(article.title)}
                  {descriptionNode(article.description)}
                  <Box>{ctaNode()}</Box>
                </Stack>
              </Box>
            </a>
          </Link>
        </Box>
      );
    });
  };

  return (
    <Stack spacing={8}>
      {headingNode()}
      {searchNode()}
      {articlesNode()}
    </Stack>
  );
};

export default Articles;
