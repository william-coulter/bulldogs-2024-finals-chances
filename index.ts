import type { Team } from "./teams";
import {
  CURRENT_STANDINGS,
  type Standing,
} from "./upcoming-matches/current-standings";
import { ROUND_13, type UpcomingMatch } from "./upcoming-matches/round-13";

type PlayedMatch = {
  // Each match outcome will be a part of a theoretical scenario.
  scenario: number;
  homeTeam: Team;
  awayTeam: Team;
  winner: Team;
};

/** Given upcoming matches, evaluates all possible outcomes. */
function evaluateAllScenarios(upcomingMatches: UpcomingMatch[]): PlayedMatch[] {
  return [];
}

/** Given current standing scenarios and results, evaluates new standing scenarios. */
function evaluateAllStandings(
  currentStandings: Standing[],
  roundResults: PlayedMatch[],
): Standing[] {
  return [];
}

const round13Results = evaluateAllScenarios(ROUND_13);
const round13Standings = evaluateAllStandings(
  CURRENT_STANDINGS,
  round13Results,
);

type CSVRow = {
  scenario: number;
  team: string;
  position: number;
  winRate: number;
  wins: number;
  losses: number;
};

function printStandingsCSVHeaders(): void {
  console.log("team,position,win_rate,wins,losses");
}

/** Assumes headers have already been logged. */
function printStandingsCSV(standings: Standing[]): void {
  const orderedStandings = standings.sort(
    (a, b) => a.scenario - b.scenario || b.winRate - a.winRate,
  );

  // STARTHERE: How do I work out standings?

  standings.forEach((s) => {
    const row: CSVRow = {
      team: s.team.name,
      position: 1,
    };
  });
}
