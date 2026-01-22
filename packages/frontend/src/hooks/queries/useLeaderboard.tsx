"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import config from "@/config";
import { CanvasInfo, LeaderboardRequest } from "@blurple-canvas-web/types";

export function useLeaderboard(canvasId: CanvasInfo["id"], fromRank = 1) {
  const getLeaderboard = async () => {
    const response = await axios.get<LeaderboardRequest.ResBody>(
      `${config.apiUrl}/api/v1/statistics/leaderboard/${canvasId}`,
      { params: { fromRank } },
    );
    return response.data;
  };

  return useQuery({
    queryKey: ["leaderboard", canvasId, fromRank],
    queryFn: getLeaderboard,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    staleTime: 30_000, // 30 seconds
  });
}
