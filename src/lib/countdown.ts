import { ELECTION_DATE } from "@/data/constants";

export function getDaysUntilElection(): number {
  const now = new Date();
  const diff = ELECTION_DATE.getTime() - now.getTime();
  return Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)));
}
