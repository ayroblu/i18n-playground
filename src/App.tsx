import React from 'react';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.app} lang='en'>
      <ul className={styles.sideBar}>
        <li>English</li>
        <li>Chinese (left to right)</li>
        <li>Chinese Traditional</li>
        <li>Arabic</li>
        <li>Mongolian</li>
      </ul>
      <h1>This is my header title</h1>
      <p>This is my child content</p>
    </div>
  );
}

export default App;
