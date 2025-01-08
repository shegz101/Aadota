// import { Link } from 'react-router'
import { Link } from 'react-router'
import logo from '../../assets/Àádọ́ta.png'

const PaymentProcess: React.FC = () => {
  return (
    <div className="relative h-[120vh] overflow-hidden px-[12px] bg-[#0d0f36] pt-12">
      <div className='relative z-20 flex flex-col h-full'>
        <div className='text-left w-[35vw]'>
            <img src={logo} alt="Logo" className=''/>
            <p className="text-[8px] text-[#FFFFFF] mx-auto w-[30vw] mt-[-5px] font-['Clash_Display']">
                Celebrating 50 Golden Years
            </p>
        </div>

        <div className='mt-10'>
            <h1 className="text-[#FFFFFF] font-medium font-['Voggiet'] text-3xl">Secure your Spot!</h1>

            <p className='pt-5 text-justify text-[#F8F1E8]'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud. Lorem ipsum dolor sit amet, consectetur adipiscing 
            </p>

            <hr className="my-5 w-full h-[1px] bg-gradient-to-r from-transparent via-[#FFD700] to-transparent border-0" />


            {/* Payment Details */}
            <div className="space-y-1 text-[#F8F1E8] font-medium text-lg font-['Clash_Display']">
                <p>Please pay the sum of 00000 to the account details below.</p>
                <p>Account Name: Aminat Olorunkemi Giwa</p>
                <p>Account Number: <span className='font-black'>1003348429</span></p>
                <p>Bank: Lotus Bank</p>
            </div>

            <div className="text-[#F8F1E8] mt-10 font-['Clash_Display'] text-base">
                <p>Kindly send proof of payment to 
                    <a href="https://wa.me/2349081753725"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#FFBB00] underline"> this number </a> 
                so we can confirm your payment</p>
            </div>

            <div className="text-center mt-5">
                <Link to="/registrationSuccessful" style={{ textDecoration: "None"}}>
                    <button className="relative z-30 mt-5 px-6 py-2 text-base font-medium text-[#0d0f36] bg-gradient-to-r from-[#B46A11] via-[#D68D15] to-[#FBF491] rounded-full shadow-md hover:opacity-90 transition-all">
                        Conclude Payment
                    </button>
                </Link>
            </div>
        </div>
      </div>
    </div>
  )
}

export default PaymentProcess
