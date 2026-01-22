import { CanvasInfo, CanvasSummary, LeaderboardEntry, Palette } from "..";

export interface Params {
  canvasId: CanvasSummary["id"];
}

export interface ResBody {
  total: number;
  entries: LeaderboardEntry[]
};

export type ReqBody = Record<string, never>;
export type ReqQuery = Record<string, never>;
