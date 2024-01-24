import { title, subtitle } from "@/components/primitives";

export default function Home() {
	return (
		<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
			<div className="inline-block max-w-lg text-center justify-center">
				<h1 className={title()}>Benvingut a la APP&nbsp;</h1>
				<br />
				<h1 className={title({ color: "violet" })}>Mes Festa&nbsp;</h1>
				<br />
				<h2 className={subtitle({ class: "mt-4" })}>
					Consulta els dinerets que tens guardat
				</h2>
				<h2 className={subtitle({ class: "mt-4" })}>
					a la teua filà o barraca
				</h2>
			</div>

			<div className="flex gap-3">
			</div>

		</section>
	);
}
