import React from "react";
import { ProvideAuth } from "./hooks/auth";
import MyRouter from "./routers";

function App() {
  return (
    <React.Fragment>

      <ProvideAuth>
        <MyRouter />
      </ProvideAuth>
    </React.Fragment>
  );
}

export default App;
