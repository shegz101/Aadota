import logo from '../../assets/Àádọ́ta.png'
import bg from "../../assets/moneybg.png";

const ThanksPage: React.FC = () => {
  return (
    <div className="relative h-[120vh] overflow-hidden px-[12px] bg-[#0d0f36] pt-12">
      <div className='relative z-20 flex flex-col h-full'>
        <div className='text-left w-[35vw]'>
            <img src={logo} alt="Logo" className=''/>
            <p className="text-[8px] text-[#FFFFFF] mx-auto w-[30vw] mt-[-5px] font-['Clash_Display']">
                Celebrating 50 Golden Years
            </p>
        </div>

        <div className='text-center mt-10'>
            <h1 className="text-[#FFFFFF] font-medium font-['Voggiet'] text-4xl">Get your Gele and Fila ready!</h1>

            <hr className="my-5 w-full h-[1px] bg-gradient-to-r from-transparent via-[#FFD700] to-transparent border-0" />

            <p className="text-[#F8F1E8] font-medium font-['Clash_Display']">
            Get ready for Àádọ́ta, a dinner to celebrate 50 golden years of innovation and leadership. Bring you A game, ashoebi, and blah blah blah. 
            Your payment would be confirmed and your ticket would be sent to your email. 
            </p>
        </div>
        
        {/* Preorder Owo */}
        <div className="text-[#F8F1E8] text-lg mt-14 font-['Clash_Display'] text-center bg-white/10 backdrop-blur-lg px-4 py-2 rounded-[25px] shadow-lg border border-white/20">
            <p>
                P.S, Aadota bands is ready? As the saying goes, there is no owambe with owo!
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
      <div className="absolute -bottom-10 left-0 right-0 w-full h-[60vh]">
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
