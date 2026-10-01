import { Inter } from "next/font/google";
import Navbar from "../component/Navbar";
import footer from "../component/footer";

const inter = Inter({ subset: ["latin"] });

export const metadata = {
    title: "Admin: Facebook",
    description: "Admin page: jkbdsf asjfbh oiusdhfasd fouhashdbfna o ajsdofuhouh  f f ",

};

export default function Adminlayout({ children }) {
    return (

      <>
            <span>Admin Navbar</span>
                {children}
                {/* <footer /> */}
      </>

    );
}
