import React from "react";
import styles from "./App.module.scss";

function App() {
  return (
    <div className={styles.app}>
      <section className={styles.languageSection} lang="en">
        <ul className={styles.sideBar}>
          <h3>Sidebar heading</h3>
          <li>Item 1</li>
          <li>Item 2</li>
        </ul>
        <section className={styles.content}>
          <h1>This is my header title</h1>
          <p>This is my child content</p>
          <p>
            This is a long piece of text that's purpose is to show how vertical
            languages need to wrap on a page. In a horizontal top to bottom
            context, it doesn't make much difference as we're very familiar with
            it
          </p>
          <div className={styles.spacer} />
          <h3>This is my header title</h3>
          <p>This is my child content</p>
        </section>
      </section>
      <section className={styles.languageSection} lang="zh">
        <ul className={styles.sideBar}>
          <h3>侧栏标题</h3>
          <li>
            项目<span className={styles.combined}>1</span>
          </li>
          <li>
            项目<span className={styles.combined}>2</span>
          </li>
        </ul>
        <section className={styles.content}>
          <h1>这个是我的标头</h1>
          <p>写出来的中文</p>
          <p>
            這是一長段文字，目的是說明垂直語言如何在頁面上換行。
            在上下水平的環境中，它並沒有太大的區別，因為我們對此非常熟悉
          </p>
          <div className={styles.spacer} />
          <h3>这个是我的标头</h3>
          <p>写出来的中文</p>
          <div className={styles.spacer} />
          <h3>这个是我的标头</h3>
          <p>写出来的中文</p>
          <div className={styles.spacer} />
          <h3>这个是我的标头</h3>
          <p>写出来的中文</p>
          <div className={styles.spacer} />
          <h3>这个是我的标头</h3>
          <p>写出来的中文</p>
        </section>
      </section>
      <section className={styles.languageSection} lang="mn">
        <ul className={styles.sideBar}>
          <h3>ᠬᠠᠵᠠᠭᠤ ᠶᠢᠨ ᠬᠡᠰᠡᠭ</h3>
          <li>
            <span className={styles.combined}>1</span> ᠍ ᠳᠤᠭᠠᠷ ᠵᠦᠢᠯ
          </li>
          <li>
            <span className={styles.combined}>2</span> ᠍ ᠳᠤᠭᠠᠷ ᠵᠦᠢᠯ
          </li>
        </ul>
        <section className={styles.content}>
          <h1>ᠡᠨᠡ ᠪᠣᠯ ᠮᠢᠨᠤ ᠭᠠᠷᠴᠠᠭ</h1>
          <p>ᠡᠨᠡ ᠪᠣᠯ ᠮᠢᠨᠤ ᠬᠡᠦᠬᠡᠳ ᠦᠨ ᠠᠭᠤᠯᠭ᠎ᠠ</p>
          <p>
            ᠡᠨᠡ ᠪᠣᠯ ᠲᠧᠺᠰᠲ ᠦᠨ ᠤᠷᠲᠤ ᠬᠡᠰᠡᠭ ᠪᠥᠭᠡᠳ ᠪᠣᠰᠤᠭ᠎ᠠ ᠬᠡᠯᠡ ᠨᠦᠭᠦᠳ ᠨᠢ ᠬᠠᠭᠤᠳᠠᠰᠤ ᠶᠢ
            ᠬᠡᠷᠬᠢᠨ ᠪᠣᠭᠣᠵᠤ ᠥᠭᠬᠦ ᠶᠢ ᠬᠠᠷᠠᠭᠤᠯᠬᠤ ᠶᠠᠪᠤᠳᠠᠯ ᠶᠤᠮ᠃ ᠬᠡᠪᠲᠡᠭᠡ ᠳᠡᠭᠡᠳᠦ ᠳᠣᠭᠣᠳᠤ
            ᠬᠡᠰᠡᠭ ᠡᠴᠡ ᠬᠠᠷᠠᠬᠤ ᠳᠤ ᠡᠨᠡ ᠨᠢ ᠲᠡᠶᠢᠮᠦ ᠴᠤ ᠶᠡᠬᠡ ᠢᠯᠭᠠᠭ᠎ᠠ ᠲᠠᠢ ᠪᠢᠰᠢ ᠶᠤᠮ
          </p>
          <div className={styles.spacer} />
          <h3>ᠡᠨᠡ ᠪᠣᠯ ᠮᠢᠨᠤ ᠭᠠᠷᠴᠠᠭ</h3>
          <p>ᠡᠨᠡ ᠪᠣᠯ ᠮᠢᠨᠤ ᠬᠡᠦᠬᠡᠳ ᠦᠨ ᠠᠭᠤᠯᠭ᠎ᠠ</p>
          <div className={styles.spacer} />
          <h3>ᠡᠨᠡ ᠪᠣᠯ ᠮᠢᠨᠤ ᠭᠠᠷᠴᠠᠭ</h3>
          <p>ᠡᠨᠡ ᠪᠣᠯ ᠮᠢᠨᠤ ᠬᠡᠦᠬᠡᠳ ᠦᠨ ᠠᠭᠤᠯᠭ᠎ᠠ</p>
          <div className={styles.spacer} />
          <h3>ᠡᠨᠡ ᠪᠣᠯ ᠮᠢᠨᠤ ᠭᠠᠷᠴᠠᠭ</h3>
          <p>ᠡᠨᠡ ᠪᠣᠯ ᠮᠢᠨᠤ ᠬᠡᠦᠬᠡᠳ ᠦᠨ ᠠᠭᠤᠯᠭ᠎ᠠ</p>
          <div className={styles.spacer} />
          <h3>ᠡᠨᠡ ᠪᠣᠯ ᠮᠢᠨᠤ ᠭᠠᠷᠴᠠᠭ</h3>
          <p>ᠡᠨᠡ ᠪᠣᠯ ᠮᠢᠨᠤ ᠬᠡᠦᠬᠡᠳ ᠦᠨ ᠠᠭᠤᠯᠭ᠎ᠠ</p>
          <div className={styles.spacer} />
          <h3>ᠡᠨᠡ ᠪᠣᠯ ᠮᠢᠨᠤ ᠭᠠᠷᠴᠠᠭ</h3>
          <p>ᠡᠨᠡ ᠪᠣᠯ ᠮᠢᠨᠤ ᠬᠡᠦᠬᠡᠳ ᠦᠨ ᠠᠭᠤᠯᠭ᠎ᠠ</p>
        </section>
      </section>
      <section className={styles.languageSection} lang="ar">
        <ul className={styles.sideBar}>
          <h3>عنوان الشريط الجانبي</h3>
          <li>البند 1</li>
          <li>البند 2</li>
        </ul>
        <section className={styles.content}>
          <h1>هذا رأسي</h1>
          <p>هذا المحتوى الخاص بي</p>
        </section>
      </section>
    </div>
  );
}

export default App;
