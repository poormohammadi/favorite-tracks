import { RouteProp } from "@react-navigation/native";
import { TrackDataType } from "../api/types";

export type RouteListBase = {
  trackList: undefined;
  trackDetails: { data: TrackDataType };
};

export type RootRouteProps<RouteName extends keyof RouteListBase> = RouteProp<RouteListBase, RouteName>;
