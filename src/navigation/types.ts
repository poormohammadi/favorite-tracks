import { RouteProp } from "@react-navigation/native";

export type RouteListBase = {
  trackList: undefined;
  trackDetails: undefined;
};

export type RootRouteProps<RouteName extends keyof RouteListBase> = RouteProp<RouteListBase, RouteName>;
