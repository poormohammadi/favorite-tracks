import axios from "../config/axios";
import { TrackListApiTypes } from "../types";

export const getTracksList = () => axios.get<TrackListApiTypes["response"]>("/data/manifest.json");