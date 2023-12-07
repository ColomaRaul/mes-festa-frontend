interface Characteristic {
    key: string;
    value: string;
}

interface UserOrganizationData {
    organization_id: string;
    organization_name: string;
    organization_type: string;
    organization_created_at: string;
    organization_updated_at: string;
    userOrganization_id: string;
    userOrganization_user_id: string;
    userOrganization_organization_id: string;
    userOrganization_member_since: string;
    userOrganization_is_active: boolean;
    userOrganization_characteristics: Characteristic[];
    userOrganization_is_admin: boolean;
    userOrganization_created_at: string;
    userOrganization_updated_at: string;
}

export type { Characteristic, UserOrganizationData }