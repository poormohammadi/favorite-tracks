import { useNavigation, useRoute as useBaseRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootRouteProps, RouteListBase } from "../navigation";

export const useNavigate = () => useNavigation<NativeStackNavigationProp<RouteListBase>>();

export function useRoute<RouteName extends keyof RouteListBase>() {
	return useBaseRoute<RootRouteProps<RouteName>>();
}
