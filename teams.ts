export const TEAMS = [
  {
    name: "Pennant Hills Demons MD5",
  },
  {
    name: "East Coast Eagles MD5",
  },
  {
    name: "Newtown Breakaways MD5",
  },
  {
    name: "Southern Power MD5",
  },
] as const;

export type Team = (typeof TEAMS)[number];
