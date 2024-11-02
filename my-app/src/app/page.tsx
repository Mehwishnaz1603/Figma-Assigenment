import Link from "next/link"
import Navbar  from "./components/header";
import Banner_1 from "./components/banner_1";
import Banner_2 from "./components/banner_2";
import Category from "./components/category";
import Products from "./components/products";
import Banner_3 from "./components/banner_3";
import Discount_Products from "./components/dicount_products";
import Banner_4 from "./components/banner_4";
import Footer from "./components/footer";
export default function Home() {
  return (
    <div>
    <Navbar />
    <Banner_1/>
    <Banner_2/>
    <Category />
    <Products/>
    <Banner_3 />
    <Discount_Products />.
    <Banner_4 />
    <Footer />
 </div>
  );
}
