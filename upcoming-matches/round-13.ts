import type { Team } from "../teams";

export type UpcomingMatch = {
  homeTeam: Team;
  awayTeam: Team;
};

export const ROUND_13: UpcomingMatch[] = [
  {
    homeTeam: { name: "Pennant Hills Demons MD5" },
    awayTeam: { name: "East Coast Eagles MD5" },
  },
  {
    homeTeam: { name: "Newtown Breakaways MD5" },
    awayTeam: { name: "Southern Power MD5" },
  },
];
