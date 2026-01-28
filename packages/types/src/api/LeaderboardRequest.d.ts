import { CanvasInfo, CanvasSummary, LeaderboardEntry, Pagination, Palette } from "..";

export interface Params {
  canvasId: CanvasSummary["id"];
}

export type ResBody = Pagination<LeaderboardEntry>;

export type ReqBody = Record<string, never>;
export type ReqQuery = Record<string, never>;
