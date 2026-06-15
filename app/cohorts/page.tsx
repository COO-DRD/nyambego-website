import { getFeaturedCohort } from "@/lib/notion";
import CohortsClient from "./client";

export const revalidate = 60;
export const metadata = { title: "Cohorts — Brian Nyambego" };

export default async function CohortsPage() {
  const cohort = await getFeaturedCohort();
  return <CohortsClient cohort={cohort} />;
}
