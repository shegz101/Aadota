import logo from '../../assets/Àádọ́ta.png'
import bg from "../../assets/moneybg.png";
import { Link } from 'react-router';

const ThanksPage: React.FC = () => {
  return (
    <div className="relative small:h-[130vh] medium:h-[130vh] large:h-[120vh] larger:h-[110vh] overflow-hidden px-[14px] bg-[#0d0f36] pt-10">
      <div className='relative z-20 flex flex-col h-full'>
        <Link to="/" style={{ textDecoration: "None"}}>
          <div className='text-left w-[35vw]'>
            <img src={logo} alt="Logo"/>
            <p className="text-[7.5px] text-[#FFFFFF] flex justify-center text-center mt-[-5px] font-clash">
                Celebrating 50 Golden Years
            </p>
          </div>
        </Link>
        
        <div className='text-center small:mt-10 medium:mt-10 large:mt-10 larger:mt-14'>
            <h1 className="text-[#FFFFFF] font-medium font-voggiet small:text-[25px] medium:text-[30px] large:text-[35px] larger:text-[40px]">Get your Gele and Fila ready!</h1>

            <hr className="my-5 w-full h-[1px] bg-gradient-to-r from-transparent via-[#FFD700] to-transparent border-0" />

            <p className="text-[#F8F1E8] font-medium font-clash text-center">
            It’s time to bring your A-game to the most epic dinner of the year— Àádọta!
            I can already picture you slaying in that aso-ebi.
            Lagos won’t know what hit it!
            Your payment would be confirmed and your ticket would be sent to your email. 
            </p>
        </div>
        
        {/* Preorder Owo */}
        <div className="text-[#F8F1E8] text-lg small:mt-8 medium:mt-10 large:mt-14 larger:mt-20 font-clash text-center bg-white/10 backdrop-blur-lg px-4 py-2 rounded-[25px] shadow-lg border border-white/20">
            <p>
              P.S, Aadota bands is ready? As the saying goes, there is no owambe without owo!
            </p>
            <p>
                <a
                href="https://wa.me/2348054866906"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#FFBB00] underline"
                >
                Click here to Pre-order.
                </a>
            </p>
        </div>

      </div>

      {/* Background Image Container with Extended Gradient */}
      <div className="absolute bottom-0 left-0 right-0 w-full h-[60vh]">
        {/* Extended Gradient Overlay */}
        <div className="absolute -top-20 inset-x-0 bottom-0 bg-gradient-to-b from-[#0d0f36] via-[#0d0f36]/70 to-transparent z-10"></div>
        
        {/* Background Image */}
        <img 
          src={bg} 
          alt="Background" 
          className="w-full h-full object-cover pt-10"
        />
      </div>
    </div>
  )
}

export default ThanksPage
