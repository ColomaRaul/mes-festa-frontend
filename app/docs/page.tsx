'use client';

import { title } from "@/components/primitives";
import {useSession} from "next-auth/react";

export default function DocsPage() {
	const session = useSession();
	return (
		<div>
			<h1 className={title()}>Docs</h1>
		</div>
	);
}
