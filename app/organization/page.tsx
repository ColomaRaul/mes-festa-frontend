'use client'

import {getAllLoggedUserOrganization} from "@/lib/api/backend-api";
import Link from "next/link";
import {UserOrganizationData} from "@/lib/api/api-types";
import {useSession} from "next-auth/react";
import {useEffect, useState} from "react";
import {useRouter} from "next/navigation";

export default function OrganizationPage() {
    const [organizations, setOrganizations] = useState<UserOrganizationData[]>([]);
    const {data: session, status} = useSession();
    const router = useRouter();

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (session) {
                    const allLoggedUserOrganization = await getAllLoggedUserOrganization(session?.user?.access_token);
                    if (allLoggedUserOrganization.length === 1) {
                        router.push(`/organization/${allLoggedUserOrganization[0].organization_id}/home`)
                    }
                    setOrganizations(allLoggedUserOrganization);
                }
            } catch (error) {
                console.log('error! help!')
            }
        };

        fetchData();
    }, [session]);


    if (status === 'loading' || !session) {
        return (
            <div>
                <h1>Cargant organitzacions</h1>
            </div>
        )
    }

    if (session?.user) {
        return (
            <div>
                <h1>{`Elegis l'organització que corresponga`}</h1>
                <ul>
                    {organizations.map((organization: UserOrganizationData) => (
                        <li key={organization.organization_id}>
                            <Link
                                href={`/organization/${organization.organization_id}/home`}>{organization.organization_name}</Link>
                            {/*Insert admin if has administrador or superadmin role*/}
                        </li>
                    ))}
                </ul>
            </div>
        )
    }

    return (
        <div>
            <h1>Nada</h1>
        </div>
    )
}