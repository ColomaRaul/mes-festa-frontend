import logo from "../public/img/mesfesta1.png"
import Image from "next/image";

export default function Header() {
    return (
        <div className="image-header-container">
            <Image src={logo.src} alt={"logo"} width={400} height={100} className="mt-5 mb-5" />
        </div>
        // <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
        //     <div className="container-fluid">
        //         <Link href="/" className="navbar-brand">Home
        //         </Link>
        //         <div>
        //             <ul className="navbar-nav me-auto mb-2 mb-md-0">
        //                 <li className="nav-item">
        //                     <Link href="/login" className="nav-link active">Login</Link>
        //                 </li>
        //                 <li className="nav-item">
        //                     <Link href="/register" className="nav-link active">Register</Link>
        //                 </li>
        //             </ul>
        //         </div>
        //     </div>
        // </nav>
    )
}
