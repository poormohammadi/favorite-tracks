export type TrackDataType = {
    title: string;
    audio: string;
    cover: string;
    totalDurationMs: number;
}

export type TrackListApiTypes = {
    response: TrackDataType[];
};
