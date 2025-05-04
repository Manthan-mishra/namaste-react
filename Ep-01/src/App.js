import React from "react";
import { Header } from "./components/Header/Header.js";
import { Outlet } from "react-router-dom";
import useOnlineStatus from "./utils/hooks/useOnlineStatus.js";
import OfflinePage from "./components/OfflinePage/OfflinePage.js";
import UserContext from "./context/UserContext.js";

const App = () => {
  const { onlineStatus } = useOnlineStatus();

  // if (onlineStatus === false) return <OfflinePage />;

  return (
    <UserContext.Provider value={{ loggedInUser: "manthan" }}>
      <div>
        <Header />
        {onlineStatus ? <Outlet /> : <OfflinePage />}
      </div>
    </UserContext.Provider>
  );
};

export default App;
