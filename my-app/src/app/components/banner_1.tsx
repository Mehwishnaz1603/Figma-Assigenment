import Image from "next/image";
import iphone14 from "./images/image.png";
export default function Banner_1() {
  return (
    <div className="banner_1">
      <div className="content">
        <h3>Pro. Beyond.</h3>
        <h1>
          iPhone 14 <span>Pro</span>
        </h1>
        <p>Created to change everything for the better. For everyone</p>
        <button className="button">Shop Now</button>
      </div>
      <div className="image">
        <img src="iphone14" alt="iphone 14 pro" />
        
      </div>
    </div>
  );
}
