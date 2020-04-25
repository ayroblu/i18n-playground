import React from "react";
import styles from "./Ideas.module.scss";
import { getMessage } from "./Ideas.messages";

// https://www.freecodecamp.org/news/how-to-get-started-with-internationalization-in-javascript-c09a0d2cd834/
export const Ideas: React.FC = () => {
  const [counter, setCounter] = React.useState(0);
  const handleCounter = React.useCallback(() => {
    setCounter(counter + 1);
  }, [counter]);

  return (
    <div>
      <h1>Thoughts behind internationalisation</h1>
      <p className={styles.noSelect} onClick={handleCounter}>
        {getMessage("message")(counter)}
      </p>
    </div>
  );
};
