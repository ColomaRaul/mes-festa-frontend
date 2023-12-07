import logo from "../public/img/mesfesta1.png"
import Image from "next/image";

export default function Header() {
    return (
        <div>
            <Image src={logo.src} alt={"logo"} width={400} height={100} className="mt-5 mb-5" />
        </div>
    )
}
