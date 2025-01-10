import { FaSpinner } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/Àádọ́ta.png';
import { FaChevronDown } from 'react-icons/fa';
import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RegistrationPage: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false); // Loading state
  const [selectedTicket, setSelectedTicket] = useState<string | null>(null);

  const ticketTypes = [
    { type: 'Idan (Single AIESECer)', price: '₦15,000' },
    { type: 'Ọmọ̀ Jáyé Jáyé (Guest)', price: '₦17,500' },
    { type: 'Ọbá àti olórí  (AIESEC Couple)', price: '₦30,000' },
    { type: 'Ọbá àti olórí  (Partial AIESEC Couple)', price: '₦32,000' },
    { type: 'Olówó Èkó (Alumni)', price: '₦20,000' },
  ];

  const initialValues = {
    name: '',
    email: '',
    ticket_type: '',
    couple_name: '',
    suggestions: '',
  };

  const navigate = useNavigate();
  
  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    ticket_type: Yup.string().required('Ticket type is required'),
    couple_name: Yup.string()
      .test(
        'is-required-for-couples',
        "Name of the person you're coming with is required",
        function (value) {
          const { ticket_type } = this.parent;
          return (
            ticket_type !== 'Ọbá àti olórí  (AIESEC Couple)' &&
            ticket_type !== 'Ọbá àti olórí  (Partial AIESEC Couple)'
          ) || !!value;
        }
      ),
    suggestions: Yup.string(),
  });  

  const onSubmit = async (values: typeof initialValues, { resetForm }: any) => {
    setLoading(true);
    try {
      await axios.post('https://ain-backend.fly.dev/api/ail-dinner/register', {
        name: values.name,
        email: values.email,
        ticket_type: values.ticket_type,
        couple_name: values.couple_name || '', // Send empty string if not provided
        suggestions: values.suggestions,
      });
  
      toast.success('Registration successful! Proceed to payments.');
  
      resetForm(); // Reset form after successful submission
  
      // Delay navigation by 3 seconds to show the toast notification
      setTimeout(() => {
        setLoading(false); 
        const selectedTicket = ticketTypes.find(
          (ticket) => ticket.type === values.ticket_type
        );
        navigate('/payment', { state: { ticketPrice: selectedTicket?.price } });
      }, 3000); // 3000ms = 3 seconds
    } catch (error) {
      console.error(error);
      toast.error('Registration failed. Please try again later.');
      setLoading(false);
    }
  }; 

  return (
    <>
    <ToastContainer/>
    <div className="relative small:h-[135vh] medium:h-[130vh] large:h-[120vh] larger:h-screen overflow-hidden px-[10px] bg-[#0d0f36] pt-12 pb-12">
      <div
        className="absolute inset-0 z-10"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 60%, #0d0f36 100%), url('./assets/grainbg - Copy.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 1,
        }}
      ></div>
      <div className="relative z-20 flex flex-col h-full">
        <Link to="/" style={{ textDecoration: "None"}}>
          <div className="text-left w-[35vw]">
            <img src={logo} alt="Logo" />
            <p className="text-[7.5px] flex justify-center text-center text-[#FFFFFF] mt-[-5px] font-clash">
              Celebrating 50 Golden Years
            </p>
          </div>
        </Link>

        {/* Form */}
        <div className="small:mt-10 medium:mt-10 large:mt-10 larger:mt-14">
          <h2 className="text-[#FFFFFF] small:pb-2 medium:pb-4 large:pb-6 larger:pb-8 font-medium tracking-[0.1em] font-voggiet small:text-2xl medium:text-2xl large:text-3xl larger:text-[40px]">
            Are you ready?
          </h2>

          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {({ values, setFieldValue }) => (
              <Form className="mt-5 font-clash space-y-5">
                <div>
                  <label className="text-[#F8F1E8] text-sm font-semibold">
                    Your Full Name
                  </label>
                  <Field
                    name="name"
                    placeholder="John Doe"
                    className="rounded-full mt-1 h-[45px] w-full border-[#FFFFFF] text-[#F8F1E8] border-2 px-2 outline-none bg-white/10 backdrop-blur-lg py-2 shadow-lg border-white/20"
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                <div>
                  <label className="text-[#F8F1E8] text-sm font-semibold">
                    Your Email Address
                  </label>
                  <Field
                    name="email"
                    type="email"
                    placeholder="janedoe@gmail.com"
                    className="rounded-full mt-1 h-[45px] w-full border-[#FFFFFF] text-[#F8F1E8] border-2 px-2 outline-none bg-white/10 backdrop-blur-lg py-2 shadow-lg border-white/20"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                <div className="relative">
                  <label className="text-[#F8F1E8] text-sm font-semibold">Ticket Type</label>
                  <div
                    className="rounded-full mt-1 h-[45px] w-full flex items-center justify-between outline-none cursor-pointer border-[#FFFFFF] text-[#F8F1E8] border-2 px-2 bg-white/10 backdrop-blur-lg py-2 shadow-lg border-white/20"
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    <span>{selectedTicket || "Select your ticket type"}</span>
                    <FaChevronDown className="text-[#F8F1E8]" />
                  </div>
                  {isOpen && (
                    <ul className="absolute mt-2 w-full bg-[#1a1c50] border border-[#F8F1E8] z-20 text-[#F8F1E8] text-lg font-['Clash_Display'] text-center bg-white/10 backdrop-blur-lg py-2 rounded-[25px] shadow-lg border-white/20">
                      {ticketTypes.map((ticket, index) => (
                        <li
                          key={index}
                          className="px-2 py-2 flex justify-between text-[#F8F1E8] hover:bg-[#33366a] cursor-pointer"
                          onClick={() => {
                            setSelectedTicket(ticket.type);
                            setFieldValue("ticket_type", ticket.type); // Update Formik value
                            setIsOpen(false);
                          }}
                        >
                          <span className='text-left'>{ticket.type}</span>
                          <span>{ticket.price}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  <ErrorMessage
                    name="ticket_type"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                {values.ticket_type === 'Ọbá àti olórí  (AIESEC Couple)' ||
                values.ticket_type === 'Ọbá àti olórí  (Partial AIESEC Couple)' ? (
                  <div>
                    <label className="text-[#F8F1E8] text-sm font-semibold">
                      Name of the person you're coming with?
                    </label>
                    <Field
                      name="couple_name"
                      placeholder="Jane Doe"
                      className="rounded-full mt-1 h-[45px] w-full border-[#FFFFFF] text-[#F8F1E8] border-2 px-2 outline-none bg-white/10 backdrop-blur-lg py-2 shadow-lg border-white/20"
                    />
                    <ErrorMessage
                      name="couple_name"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>
                ) : null}

                <div>
                  <label className="text-[#F8F1E8] text-sm font-semibold">
                    Any Suggestions for Us?
                  </label>
                  <Field
                    name="suggestions"
                    as="textarea"
                    placeholder="Input your suggestions"
                    className="rounded-[26px] mt-1 h-[120px] w-full border-[#FFFFFF] text-[#F8F1E8] border-2 px-2 outline-none bg-white/10 backdrop-blur-lg py-2 shadow-lg border-white/20"
                  />
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    disabled={loading} // Disable button while loading
                    className={`relative mx-auto items-center text-center justify-center font-clash h-10 w-48 mt-5 px-[2.5px] py-[2.5px] text-base font-medium bg-[#E7AC18] text-[#1B1E4A] rounded-full shadow-md hover:opacity-90 transition-all ${
                      loading ? 'opacity-70 cursor-not-allowed' : ''
                    }`}
                  >
                    <div className='flex justify-center rounded-full bg-gradient-to-r from-[#B46A11] via-[#D68D15] to-[#FBF491] h-full w-full text-center z-30 items-center'>
                    {loading ? (
                      <div className="flex items-center justify-center">
                        <FaSpinner className="animate-spin mr-2" /> Processing...
                      </div>
                    ) : (
                      'Proceed to Payment'
                    )}
                    </div>
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
    </>
  );
};

export default RegistrationPage;
