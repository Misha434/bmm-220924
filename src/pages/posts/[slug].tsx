import fs from "fs";
import { css } from "@emotion/react";
import matter from "gray-matter";
import rehypeSlug from "rehype-slug";
import rehypeStringify from "rehype-stringify";
import remarkParse from "remark-parse";
import remarkPrism from "remark-prism";
import remarkRehype from "remark-rehype";
import remarkToc from "remark-toc";
import { unified } from "unified";
import { IFrontMatter } from "pages";
import { baseStyles } from "pages/_app";

interface IPostDetail {
  frontMatter: IFrontMatter;
  content: string;
}

const styles = {
  container: css`
    padding-top: 2rem;
  `,
};

export const getStaticProps = async ({ params }: any) => {
  const file = fs.readFileSync(`src/posts/${params.slug}.md`, "utf-8");
  const { data, content } = matter(file);

  const result = await unified()
    .use(remarkParse)
    .use(remarkPrism, {
      plugins: ["line-numbers"],
    })
    .use(remarkToc)
    .use(remarkRehype)
    .use(rehypeSlug)
    .use(rehypeStringify)
    .process(content);
  return { props: { frontMatter: data, content: result.toString() } };
};

export const getStaticPaths = async () => {
  const files = fs.readdirSync("src/posts");
  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace(/\.md$/, ""),
    },
  }));
  return {
    paths,
    fallback: false,
  };
};

const Post = ({ frontMatter, content }: IPostDetail) => {
  return (
    <>
      <div css={[baseStyles.widthWrapper, styles.container]}>
        <p
          style={{
            display: "flex",
            justifyContent: "flex-end",
            color: "silver",
          }}
        >
          {frontMatter.date}
        </p>
        <h1
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "5rem 0",
            fontWeight: 600,
          }}
        >
          {frontMatter.title}
        </h1>
        <div dangerouslySetInnerHTML={{ __html: content }}></div>
      </div>
    </>
  );
};

export default Post;
