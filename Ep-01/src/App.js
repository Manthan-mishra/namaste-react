import React from "react";
import { Header } from "./components/Header/Header.js";
import { Outlet } from "react-router-dom";
import useOnlineStatus from "./utils/hooks/useOnlineStatus.js";
import OfflinePage from "./components/OfflinePage/OfflinePage.js";

const App = () => {
  const { onlineStatus } = useOnlineStatus();

  // if (onlineStatus === false) return <OfflinePage />;

  return (
    <div>
      <Header />
      {onlineStatus ? <Outlet /> : <OfflinePage />}
    </div>
  );
};

export default App;
