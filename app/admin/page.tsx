'use client'
import { useSession } from "next-auth/react";

export default function AdminPage() {
    const {data: session, status} = useSession();

	return (
		<div>
			<h1>Admin Page</h1>
		</div>
	);
}
