'use client'
import Link from "next/link";
import {useContext} from "react";
// import OrganizationContext from "@/context/OrganizationContext";
import {Tabs, Tab, Card, CardBody, CardHeader, Button} from "@nextui-org/react";
import {usePathname} from "next/navigation";

export default function OrganizationHomePage({ params }: { params: { organizationId: string } }) {
    // const organizationContext = useContext(OrganizationContext);
    // organizationContext.addOrganizationId(params.organizationId);
    // //TODO make a search to get organization data information
    // organizationContext.addOrganizationName('Kabilenyos');

    const pathname = usePathname();

    return (
      <div>

          <h1>Hola página principal</h1>
      </div>
    )
}
