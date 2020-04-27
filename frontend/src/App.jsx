import React from "react";
import cx from "classnames";

import styles from "./App.module.css";

const App = () => (
  <div className={styles.app}>
    <h1 className={cx(styles.heading, styles.underlined_text)}>Homepage</h1>
  </div>
);

export default App;
