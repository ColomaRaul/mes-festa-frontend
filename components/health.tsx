import { HealthData } from "@/lib/api/api-types";
import { health } from "@/lib/api/backend-api";

export async function getHealth(): Promise<HealthData|null> {
    return await health()
}