import React, { Fragment } from "react";
import LibraryWindow from "./../Common/LibraryWindow";

const Home = () => {
  const text = (
    <Fragment>
      <p>Click on the menu items to get some facts about ocean.</p>
      <small>Content creation in progress.</small>
    </Fragment>
  );

  return <LibraryWindow title="Welcome!" text={text} />;
};

export default Home;
