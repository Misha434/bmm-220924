import fs from "fs";
import matter from "gray-matter";
import rehypeStringify from "rehype-stringify";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";
import { IFrontMatter } from "pages";

interface IPostDetail {
  frontMatter: IFrontMatter;
  content: string;
}

export const getStaticProps = async ({ params }: any) => {
  const file = fs.readFileSync(`src/posts/${params.slug}.md`, "utf-8");
  const { data, content } = matter(file);

  const result = await unified()
    .use(remarkParse)
    .use(remarkRehype)
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
      <div>hello</div>
      <div>{frontMatter.title}</div>
      <div dangerouslySetInnerHTML={{ __html: content }}></div>
    </>
  );
};

export default Post;
