import {UserOrganizationData} from "@/lib/api/api-types";

type HeadersType = {
    'Content-Type': string;
    'Authorization'?: string;
}

const apiUrl = process.env.NEXT_PUBLIC_API_URL;
const headers: HeadersType = {
    'Content-Type': 'application/json',
}

export async function ApiUserLogin(email: string, password: string) {
    try {
        const response = await fetch(`${apiUrl}/user/login`, {
            method: 'POST',
            headers: headers,
            credentials: 'include',
            body: JSON.stringify({
                'email': email,
                'password': password,
            })
        })

        const json = await response.json();

        if (json.statusCode == 400) {
            return {message: json.message, status: 400}
        }

        if (json.statusCode == 401) {
            return {message: json.message, status: 401}
        }

        return json;
    } catch (error) {
        return {message: 'Failed to fetch API', status: 401};
    }
}

export async function getAllLoggedUserTransactions(organizationId: string, accessToken: string) {
    headers.Authorization = `Bearer ${accessToken}`;

    const response = await fetch(`${apiUrl}/transaction/user-organization/${organizationId}`, {
        method: 'GET',
        headers: headers,
    })

    return response.json();
}

export async function getAllLoggedUserOrganization(accessToken: string): Promise<UserOrganizationData[]> {
    headers.Authorization = `Bearer ${accessToken}`;

    const response = await fetch(`${apiUrl}/organization/by-user`, {
        method: 'GET',
        headers: headers,
    })

    return await response.json();
}

export async function health() {
    const response = await fetch(`${apiUrl}/health`, {
        method: 'GET',
        headers: headers,
    })

    return await response.json();
}
