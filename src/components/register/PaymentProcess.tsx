import { useLocation } from 'react-router-dom';
import { Link } from 'react-router'
import logo from '../../assets/Àádọ́ta.png'

const PaymentProcess: React.FC = () => {
  const location = useLocation();
  const { ticketPrice } = location.state || {};
  return (
    <div className="relative small:h-[110vh] larger:h-screen overflow-hidden px-[16px] bg-[#0d0f36] pt-12 pb-10">
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
      <div className='relative z-20 flex flex-col h-full'>
        <div className='text-left w-[35vw]'>
            <img src={logo} alt="Logo" className=''/>
            <p className="text-[7.5px] pl-2 text-[#FFFFFF] mx-auto w-[35vw] mt-[-5px] font-clash">
              Celebrating 50 Golden Years
            </p>
        </div>

        <div className='small:mt-10 medium:mt-10 large:mt-10 larger:mt-14'>
            <h1 className="text-[#FFFFFF] small:pb-2 medium:pb-4 large:pb-6 larger:pb-8 font-medium font-voggiet small:text-[30px] medium:text-[30px] large:text-[35px] larger:text-[40px]">Secure your Spot!</h1>

            <p className='pt-5 text-lg font-medium text-[#F8F1E8] font-clash'>
            Celebrate 50 golden years of innovation and leadership in style.
            Follow the steps below to get your ticket. Be part of the legacy. 
            </p>

            <hr className="small:my-5 medium:my-7 larger:my-10 w-full h-[1px] bg-gradient-to-r from-transparent via-[#FFD700] to-transparent border-0" />

            {/* Payment Details */}
            <div className="space-y-1 text-[#F8F1E8] font-medium text-lg font-clash">
                <p>Please pay the sum of <span className="font-bold">{ticketPrice || '0000'}</span> to the account details below.</p>
                <p>Account Name: Aminat Olorunkemi Giwa</p>
                <p>Account Number: <span className='font-black'>1003348429</span></p>
                <p>Bank: Lotus Bank</p>
            </div>

            <div className="text-[#F8F1E8] mt-10 font-clash text-base">
                <p>Kindly send proof of payment to 
                    <a href="https://wa.me/2349081753725"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#FFBB00] underline"> this number </a> 
                so we can confirm your payment</p>
            </div>

            <div className="text-center mt-5">
              <Link to="/registrationSuccessful" style={{ textDecoration: "None"}}>
                <button type="button" className="relative mx-auto items-center text-center justify-center h-10 w-48 z-30 mt-6 px-[2.5px] py-[2.5px] text-base font-medium font-clash text-[#1B1E4A] bg-[#E7AC18] rounded-full shadow-md hover:opacity-90 transition-all">
                  <div className='flex justify-center rounded-full bg-gradient-to-b from-[#B46A11] via-[#D68D15] to-[#E7AC18] h-full w-full text-center items-center'>
                    Conclude Payment
                  </div>
                </button>   
              </Link>
            </div>
        </div>
      </div>
    </div>
  )
}

export default PaymentProcess
