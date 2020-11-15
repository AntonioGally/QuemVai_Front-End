import React from "react";

import { Route, HashRouter, Switch, Redirect } from "react-router-dom";

import { isAuthenticatedAdmin, isAuthenticated } from "./services/auth";

import Friends from "./Pages/Mobile/Friends";
import SearchByName from "./Pages/Mobile/SearchByName";
import ManagementUser from "./Pages/Mobile/ManagementUser";
import Sports from "./Pages/Mobile/Sports";
import Spaces from "./Pages/Mobile/Spaces";
import FriendsInfo from "./Pages/Mobile/FriendsInfo";
import EventInformation from "./Pages/Mobile/EventInformation";
import SpaceInformation from "./Pages/Mobile/SpaceInformation";

const src: React.FC = () => {
  const PrivateRouteUser = ({ component: Component, ...rest }: any) => {
    return (
      <Route
        {...rest}
        render={(props) => {
          if (isAuthenticated() || isAuthenticatedAdmin()) {
            return <Component {...props} />;
          } else {
            return (
              <Redirect
                to={{ pathname: "/", state: { from: props.location } }}
              />
            );
          }
        }}
      />
    );
  };
  return (
    <HashRouter>
      <Switch>
        <PrivateRouteUser path="/MobileFriends" component={Friends} />
        <PrivateRouteUser path="/MobileSearchByName" component={SearchByName} />
        <PrivateRouteUser
          path="/MobileManegementUser"
          component={ManagementUser}
        />
        <PrivateRouteUser path="/MobileSports" component={Sports} />
        <PrivateRouteUser path="/MobileSpaces" component={Spaces} />
        <PrivateRouteUser
          path="/MobileFriendInfo/:id_Friend"
          component={FriendsInfo}
        />
        <PrivateRouteUser
          path="/MobileEventInfo/:id_Event"
          component={EventInformation}
        />
        <PrivateRouteUser
          path="/MobileSpaceInfo/:id_space/:from_favorites"
          component={SpaceInformation}
        />
      </Switch>
    </HashRouter>
  );
};

export default src;
