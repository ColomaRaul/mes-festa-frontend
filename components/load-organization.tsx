import {getAllLoggedUserOrganization} from "@/lib/api/backend-api";
import {UserOrganizationData} from "@/lib/api/api-types";

export async function getDefaultOrganizationByUser(access_token: string): Promise<UserOrganizationData|null> {
    const allLoggedUserOrganization = await getAllLoggedUserOrganization(access_token);

    return allLoggedUserOrganization?.[0] || null;
}