import type { Team } from "../teams";

export type Standing = {
  scenario: number;
  team: Team;
  wins: number;
  losses: number;
  winRate: number;
};

export const CURRENT_STANDINGS: Standing[] = [
  {
    scenario: 1,
    team: { name: "East Coast Eagles MD5" },
    wins: 9,
    losses: 1,
    winRate: 0.9,
  },
  {
    scenario: 1,
    team: { name: "Newtown Breakaways MD5" },
    wins: 2.5,
    losses: 6,
    winRate: 2.5 / 9,
  },
  {
    scenario: 1,
    team: { name: "Pennant Hills Demons MD5" },
    wins: 4,
    losses: 4,
    winRate: 0.5,
  },
  {
    scenario: 1,
    team: { name: "Southern Power MD5" },
    wins: 3,
    losses: 6,
    winRate: 0.33,
  },
];
