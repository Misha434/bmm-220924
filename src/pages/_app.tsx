/** @jsxImportSource @emotion/react */

import "../styles/initialize.css";
import "../styles/globals.css";
import { css } from "@emotion/react";
import type { AppProps } from "next/app";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
// import component 👇
import Drawer from "react-modern-drawer";
import BMMLogo from "assets/bmm-logo.png";

//import styles 👇
import "react-modern-drawer/dist/index.css";

export const baseStyles = {
  base: css`
    padding: 0 20px;
  `,
  widthWrapper: css`
    width: min(92%, 1166px);
    margin: auto;
  `,
};

const styles = {
  header: css`
    background-color: #fff;
    height: 60px;
  `,
  headerContainer: css`
    ${baseStyles.widthWrapper}
    display: flex;
    height: 100%;
    font-size: 2rem;
    align-items: center;
  `,
  logo: css`
    margin-right: auto;
  `,
  bargerMenu: css`
    width: 20px;
    padding: 0;
    outline: none;
    border: none;
    background: transparent;
    cursor: pointer;
    color: #aaa;
    font-size: 30px;
  `,
  headerLink: css`
    margin: 16px 0;
    text-align: center;
  `,
};

const HeaderLogo = () => {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={`${BMMLogo.src}`} alt="header-logo" width={45} height={45} />
  );
};

function MyApp({ Component, pageProps }: AppProps) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => setIsOpen((prevState) => !prevState);
  return (
    <>
      <header css={styles.header}>
        <div css={styles.headerContainer}>
          <div css={styles.logo}>
            <HeaderLogo />
          </div>
          <div>
            <button css={styles.bargerMenu} onClick={toggleDrawer}>
              <AiOutlineMenu />
            </button>
            <Drawer open={isOpen} onClose={toggleDrawer} direction="right">
              <div>Hello World</div>
              <ol>
                <li css={styles.headerLink}>
                  <Link href="/about">
                    <a>about</a>
                  </Link>
                </li>
              </ol>
            </Drawer>
          </div>
        </div>
      </header>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
