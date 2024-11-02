import { FaMobileAlt, FaCamera, FaHeadphones, FaDesktop, FaGamepad, FaClock } from 'react-icons/fa';

export default function Category() {
  return (
    <div className="categoryContainer">
      <h3>Browse By Category</h3>
      <div className="categories">
        <div className="categoryItem">
          <FaMobileAlt className="icon" />
          <p>Phones</p>
        </div>
        <div className="categoryItem">
          <FaClock className="icon" />
          <p>Smart Watches</p>
        </div>
        <div className="categoryItem">
          <FaCamera className="icon" />
          <p>Cameras</p>
        </div>
        <div className="categoryItem">
          <FaHeadphones className="icon" />
          <p>Headphones</p>
        </div>
        <div className="categoryItem">
          <FaDesktop className="icon" />
          <p>Computers</p>
        </div>
        <div className="categoryItem">
          <FaGamepad className="icon"/>
          <p>Gaming</p>
        </div>
      </div>
      <div className="arrows">
        <span className="arrow">❮</span>
        <span className="arrow">❯</span>
      </div>
    </div>
  );
}
