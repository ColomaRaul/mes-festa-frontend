import {getAllLoggedUserOrganization} from "@/lib/api/backend-api";

export async function loadDefaultOrganization(access_token: string): Promise<string|null> {
    const allLoggedUserOrganization = await getAllLoggedUserOrganization(access_token);

    return allLoggedUserOrganization?.[0]?.organization_id || null;
}