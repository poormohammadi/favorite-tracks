import { useQuery } from "react-query";

import { UseQueryOptions } from "../config/types";
import { getTracksList } from "./utils";

export const useTrackList = (options?: UseQueryOptions<typeof getTracksList>) =>
	useQuery("useTrackList", () => getTracksList(), { select: (res) => res.data, ...options });
