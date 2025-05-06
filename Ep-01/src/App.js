import React from "react";
import { Header } from "./components/Header/Header.js";
import { Outlet } from "react-router-dom";
import useOnlineStatus from "./utils/hooks/useOnlineStatus.js";
import OfflinePage from "./components/OfflinePage/OfflinePage.js";
import UserContext from "./context/UserContext.js";
import appStore from "./redux/appStore.js";
import { Provider } from "react-redux";

const App = () => {
  const { onlineStatus } = useOnlineStatus();

  // if (onlineStatus === false) return <OfflinePage />;

  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: "manthan" }}>
        <div>
          <Header />
          {onlineStatus ? <Outlet /> : <OfflinePage />}
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

export default App;
