import { css } from "@emotion/react";
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { baseStyles } from "./_app";
import defalutImage from "assets/bmm-article-default.webp";

const styles = {
  heroHeader: {
    container: css`
      height: 200px;
      background: linear-gradient(45deg, #f5b161, #e66465);
    `,
    titleWrapper: css`
      ${baseStyles.widthWrapper}
      display: grid;
      justify-items: center;
      align-content: center;
      height: 100%;
      color: #fff;
      > h1 {
        font-weight: 600;
        font-size: 1.6rem;
        margin-bottom: 42px;
      }
      > p {
        font-size: 1.2rem;
      }
    `,
  },
  posts: {
    container: css`
      ${baseStyles.widthWrapper}
      padding-top: 30px;
    `,
    heading: css`
      font-size: 2rem;
      min-height: 0vw;
      font-weight: 300;
      > span {
        display: block;
        font-size: 1.4rem;
        color: #666;
      }
    `,
  },
  articles: {
    container: css`
      display: grid;
      padding: 20px 0;
      gap: 32px 25px;
      grid-template-columns: repeat(3, 1fr);

      @media (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
      }
    `,
  },
  article: {
    container: css`
      > img {
        aspect-ratio: 3 / 2;
        object-fit: cover;
        width: 100%;
      }
      > h3 {
        margin: 1em 0 0.5em;
        font-size: clamp(12px, 2vw, 20px);
        min-height: 0vw;
      }
      > p {
        max-width: 20em;
        font-size: clamp(10px, 2vw, 14px);
        min-height: 0vw;
      }
      @supports not (aspect-ratio: 3 / 2) {
        > img {
          height: 180px;
        }
      }
    `,
  },
};

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Bagel Miisha Mach</title>
        <meta key="viewport" name="viewport" content="width=device-width" />
        <meta property="og:locale" content="ja_JP" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <section css={styles.heroHeader.container}>
          <div css={styles.heroHeader.titleWrapper}>
            <h1>Bagel Miisha Mach</h1>
            <p>tech blog</p>
          </div>
        </section>
        <section>
          <div css={styles.posts.container}>
            <h2 css={styles.posts.heading}>
              POSTS <span>投稿一覧</span>
            </h2>

            <div css={styles.articles.container}>
              <article css={styles.article.container}>
                <Link href="#">
                  <>
                    <figure>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={defalutImage.src}
                        alt="article-image"
                        width={300}
                        height={200}
                      />
                    </figure>
                    <h3>title</h3>
                    <p>summary</p>
                  </>
                </Link>
              </article>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
