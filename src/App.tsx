import React from "react";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.app} lang="en">
      <ul className={styles.sideBar}>
        <li>English</li>
        <li>Chinese (left to right)</li>
        <li>Chinese Traditional</li>
        <li>Arabic</li>
        <li>Mongolian</li>
      </ul>
      <section className={styles.content}>
        <h1>This is my header title</h1>
        <p>This is my child content</p>
        <p lang="zh">写出来的中文</p>
      </section>
    </div>
  );
}

export default App;
