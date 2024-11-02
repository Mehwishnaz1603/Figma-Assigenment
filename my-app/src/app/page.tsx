import Link from "next/link"
import Navbar  from "./components/header";
import Main_Banner from "./components/mainbanner";
import Category from "./components/category";
import Footer from "./components/footer";
export default function Home() {
  return (
    <div>
    <Navbar />
    <Main_Banner/>
    <Category />
    <Footer />
 </div>
  );
}
