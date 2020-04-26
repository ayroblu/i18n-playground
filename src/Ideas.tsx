import React from "react";
import styles from "./Ideas.module.scss";
import { getMessage } from "./Ideas.messages";

// https://www.freecodecamp.org/news/how-to-get-started-with-internationalization-in-javascript-c09a0d2cd834/
export const Ideas: React.FC = () => {
  return (
    <div>
      <h1>Thoughts behind internationalisation</h1>
      <ClickedParagraph messageFn={getMessage("clickedParagraph")} />
      <ClickedParagraph messageFn={getMessage("ordinalClickedParagraph")} />
      <ClickedParagraph messageFn={getMessage("diffOrdinalClickedParagraph")} />
    </div>
  );
};

type ClickedParagraphProps = {
  messageFn: (counter: number) => string;
};
const ClickedParagraph: React.FC<ClickedParagraphProps> = ({ messageFn }) => {
  const [counter, setCounter] = React.useState(0);
  const handleCounter = React.useCallback(() => {
    setCounter(counter + 1);
  }, [counter]);

  return (
    <p className={styles.noSelect} onClick={handleCounter}>
      {messageFn(counter)}
    </p>
  );
};
