"use client";

import { Skeleton, styled } from "@mui/material";

import {
  formatTimestamp,
  formatTimestampLocalTZ,
  getOrdinalSuffix,
} from "@/util";
import { UserStats } from "@blurple-canvas-web/types";

const EmptyStateMessage = styled("div")`
  border-radius: var(--card-border-radius);
  background-color: var(--discord-legacy-not-quite-black);
  padding: 1rem;
`;

const Table = styled("table")`
  margin-block-start: 1rem;
  font-size: 1.125rem;

  th,
  td {
    padding: 0.5rem;
  }

  th {
    font-weight: 600;
    text-align: start;
  }

  td {
    text-align: end;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
`;

interface StatsTableProps {
  stats?: UserStats;
  isStatsLoading: boolean;
}

export default function StatsTable({ stats, isStatsLoading }: StatsTableProps) {
  if (!stats && !isStatsLoading)
    return (
      <EmptyStateMessage>You don’t have any stats (yet)!</EmptyStateMessage>
    );

  const { totalPixels, mostFrequentColor, mostRecentTimestamp, rank } =
    stats ?? {};

  return (
    <Table>
      <tbody>
        <tr>
          <th>
            {isStatsLoading ?
              <Skeleton width={150} />
            : <>{totalPixels?.toLocaleString() ?? "?"}&nbsp;pixels placed</>}
          </th>
          <td>
            {isStatsLoading ?
              <Skeleton width={40} />
            : rank && `${rank}${getOrdinalSuffix(rank)}`}
          </td>
        </tr>
        <tr>
          <th>
            {isStatsLoading ?
              <Skeleton width={130} />
            : <>Most used color</>}
          </th>
          <td>
            {isStatsLoading ?
              <Skeleton width={80} />
            : (mostFrequentColor?.name ?? "Unknown")}
          </td>
        </tr>
        <tr>
          <th>
            {isStatsLoading ?
              <Skeleton width={170} />
            : <>Most recently placed</>}
          </th>
          <td>
            {isStatsLoading ?
              <Skeleton width={150} />
            : mostRecentTimestamp ?
              <span title={formatTimestamp(mostRecentTimestamp)}>
                {formatTimestampLocalTZ(mostRecentTimestamp)}
              </span>
            : "Unknown"}
          </td>
        </tr>
      </tbody>
    </Table>
  );
}
