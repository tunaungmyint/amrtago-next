import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-5 text-white bg-slate-700">
      <div>
        <h4 className="text-lg font-bold">Subscribe to our Newsletter</h4>
        <form className="flex flex-col justify-center py-4 gap-2">
          <input
            type="text"
            placeholder="your email"
            className="outline-none px-4 py-2 rounded-md"
          />
          <button>Subscribe</button>
        </form>
        <div className="flex gap-4">
          Follow Us <FaFacebook className="icon" />
          <FaYoutube className="icon" />
          <FaInstagram className="icon" />
        </div>
      </div>
      <div>
        <h4 className="text-lg font-bold">About us</h4>
        <p>
          Amrtago is a leading tour operator in Myanmar, specializing in
          customized tours that showcase the best of the country's culture,
          history, and natural wonders. Our experienced team of travel
          professionals is dedicated to providing you with a memorable and
          authentic travel experience.
        </p>
      </div>
      <div>
        <h4 className="text-lg font-bold">Contact Us </h4>
        <p>Email: admin@amrtago.com</p>
        <p>Phone: 0912345678</p>
        <p>Facebook: amrtago.tour.facebook.com</p>
        <p>Instagram: amrtago.example.com</p>
      </div>
      <div>
        <h4 className="text-lg font-bold">Useful Links</h4>
        <ul className="text-sm">
          <li className="text-sm p-2">Home</li>
          <li className="text-sm p-2">About Us</li>
          <li className="text-sm p-2">Tours</li>
          <li className="text-sm p-2">Terms and Conditions</li>
          <li className="text-sm p-2">Privacy Policy </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
