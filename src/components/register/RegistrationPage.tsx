import { Link } from 'react-router';
import logo from '../../assets/Àádọ́ta.png';
import { FaChevronDown } from 'react-icons/fa';
import { useState } from 'react';

const RegistrationPage: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTicket, setSelectedTicket] = useState<string | null>(null);

  const ticketTypes = [
    { type: 'Single AIESECer', price: '₦15,000' },
    { type: 'Guest', price: '₦17,500' },
    { type: 'AIESEC Couple', price: '₦30,000' },
    { type: 'Partial AIESEC Couple', price: '₦32,000' },
    { type: 'Alumni', price: '₦20,000' },
  ];

  const handleSelect = (ticket: string) => {
    setSelectedTicket(ticket);
    setIsOpen(false);
  };

  return (
    <div className="relative h-[140vh] overflow-hidden px-[12px] bg-[#0d0f36] pt-12">
      <div className="relative z-20 flex flex-col h-full">
        <div className="text-left w-[35vw]">
          <img src={logo} alt="Logo" className="" />
          <p className="text-[8px] text-[#FFFFFF] mx-auto w-[30vw] mt-[-5px] font-['Clash_Display']">
            Celebrating 50 Golden Years
          </p>
        </div>

        {/* The form */}
        <div className="mt-10">
          <h2 className="text-[#FFFFFF] font-medium tracking-[0.1em] font-['Voggiet'] text-2xl">
            Are you ready?
          </h2>

          <form className="mt-5 font-['Clash_Display'] space-y-5">
            <div>
              <label className="text-[#F8F1E8] text-sm font-semibold">
                Your Full Name
              </label>
              <input
                placeholder="Jane Doe"
                className="rounded-full mt-1 h-[45px] w-full border-[#F8F1E8] text-[#F8F1E8] border-2 px-2 bg-inherit outline-none"
              />
            </div>

            <div>
              <label className="text-[#F8F1E8] text-sm font-semibold">
                Your Email Address
              </label>
              <input
                placeholder="janedoe@gmail.com"
                className="rounded-full mt-1 h-[45px] w-full border-[#F8F1E8] text-[#F8F1E8] border-2 px-2 bg-inherit outline-none"
              />
            </div>

            <div className="relative">
              <label className="text-[#F8F1E8] text-sm font-semibold">
                Ticket Type
              </label>
              <div
                className="rounded-full mt-1 h-[45px] w-full border-[#F8F1E8] text-[#F8F1E8] border-2 px-4 flex items-center justify-between bg-inherit outline-none cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
              >
                <span>
                  {selectedTicket || 'Select your ticket type'}
                </span>
                <FaChevronDown className="text-[#F8F1E8]" />
              </div>
              {isOpen && (
                <ul className="absolute mt-2 w-full bg-[#1a1c50] border border-[#F8F1E8] z-10 text-[#F8F1E8] text-lg font-['Clash_Display'] text-center bg-white/10 backdrop-blur-lg py-2 rounded-[25px] shadow-lg border-white/20">
                  {ticketTypes.map((ticket, index) => (
                    <>
                        <li
                        key={index}
                        className="px-2 py-2 flex justify-between text-[#F8F1E8] hover:bg-[#33366a] cursor-pointer"
                        onClick={() => handleSelect(ticket.type)}
                        >
                            <span>{ticket.type}</span>
                            <span>{ticket.price}</span>
                        </li>

                        <hr className="my-1w-full h-[1px] bg-gradient-to-r from-transparent via-[#585b8d] to-transparent border-0" />
                    </>
                  ))}
                </ul>
              )}
            </div>

            <div>
              <label className="text-[#F8F1E8] text-sm font-semibold">
                Any Suggestions for Us?
              </label>
              <textarea
                placeholder="Input your suggestions"
                className="rounded-[10px] mt-1 h-[60px] w-full border-[#F8F1E8] text-[#F8F1E8] border-2 px-2 bg-inherit outline-none"
              />
            </div>

            <div className="text-center">
              <Link to="/payment" style={{ textDecoration: 'None' }}>
                <button className="relative mt-5 px-6 py-2 text-base font-medium text-[#0d0f36] bg-gradient-to-r from-[#B46A11] via-[#D68D15] to-[#FBF491] rounded-full shadow-md hover:opacity-90 transition-all">
                  Proceed to Payment
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>

      {/* Background Image Container with Extended Gradient */}
      <div className="absolute bottom-10 left-0 right-0 w-full h-[65vh]">
        {/* Extended Gradient Overlay */}
        <div className="absolute -top-20 inset-x-0 bottom-0 bg-gradient-to-b from-[#0d0f36] via-[#0d0f36]/70 to-transparent z-10"></div>
      </div>
    </div>
  );
};

export default RegistrationPage;
