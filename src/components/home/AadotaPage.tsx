import Aadota from '../../assets/Àádọ́ta.png';
import bg from "../../assets/newbg - Copy.png";
import { Link } from "react-router";

const AadotaPage: React.FC = () => {
  return (
    <div className="sm:relative md:hidden h-screen overflow-hidden bg-[#0d0f36]">
      {/* Radial Gradient Background */}
      <div
        className="absolute inset-0 z-10"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 60%, #0d0f36 100%), url('./assets/grainbg - Copy.png')`,
          backgroundSize: 'cover', // Ensure the image covers the container
          backgroundPosition: 'center', // Center the image
          backgroundRepeat: 'no-repeat', // Avoid repeating the image
          opacity: 1, // Adjust for transparency
        }}
      ></div>

      <div className="z-30 flex flex-col h-full mx-auto small:mt-14 medium:mt-16 large:mt-28 larger:mt-52">
        <div className="text-center px-5">
          <h1 className="mx-auto">
            <img src={Aadota} alt="Logo" className="w-full h-auto" />
          </h1>
          <p className="text-sm text-[#FFFFFF] flex justify-center text-center mt-[-5px] tracking-[0.1em] font-clash">
            Celebrating 50 Golden Years
          </p>
          <p className="text-base text-center mt-6 leading-relaxed text-gray-400 max-w-md mx-auto font-clash">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          </p>
          <Link to="/register" style={{ textDecoration: "None"}}>
            <button type="button" className="relative mx-auto items-center text-center justify-center h-10 w-36 z-30 mt-6 px-[2.5px] py-[2.5px] text-base font-medium font-clash text-[#1B1E4A] bg-[#E7AC18] rounded-full shadow-md hover:opacity-90 transition-all">
              <div className='flex justify-center rounded-full bg-gradient-to-r from-[#B46A11] via-[#D68D15] to-[#E7AC18] h-full w-full text-center items-center'>
                Register Now
              </div>
            </button>
          </Link>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 w-full h-[60vh]">
        
        {/* Background Image */}
        <img 
          src={bg} 
          alt="Background" 
          className="w-full h-full object-cover pt-10"
        />
      </div>
    </div>
  );
};

export default AadotaPage;