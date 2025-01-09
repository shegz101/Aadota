import { FaSpinner } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
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
    { type: 'Single AIESECer', price: '₦15,000' },
    { type: 'Guest', price: '₦17,500' },
    { type: 'AIESEC Couple', price: '₦30,000' },
    { type: 'Partial AIESEC Couple', price: '₦32,000' },
    { type: 'Alumni', price: '₦20,000' },
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
            ticket_type !== 'AIESEC Couple' &&
            ticket_type !== 'Partial AIESEC Couple'
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
    <div className="relative h-[140vh] overflow-hidden px-[12px] bg-[#0d0f36] pt-12">
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
        <div className="text-left w-[35vw]">
          <img src={logo} alt="Logo" />
          <p className="text-[7.5px] pl-2 text-[#FFFFFF] mx-auto w-[35vw] mt-[-5px] font-clash">
            Celebrating 50 Golden Years
          </p>
        </div>

        {/* Form */}
        <div className="mt-10">
          <h2 className="text-[#FFFFFF] font-medium tracking-[0.1em] font-voggiet text-2xl">
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

                {/* <div>
                  <label className="text-[#F8F1E8] text-sm font-semibold">
                    Ticket Type
                  </label>
                  <Field
                    as="select"
                    name="ticket_type"
                    className="rounded-full mt-1 h-[45px] w-full border-[#FFFFFF] text-[#F8F1E8] border-2 px-2 outline-none bg-white/10 backdrop-blur-lg py-2 shadow-lg border-white/20"
                  >
                    <option value="" disabled>
                      Select your ticket type
                    </option>
                    {ticketTypes.map((ticket, index) => (
                      <option key={index} value={ticket.type}>
                        {ticket.type} - {ticket.price}
                      </option>
                    ))}
                  </Field>
                  <ErrorMessage
                    name="ticket_type"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div> */}

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
                    <ul className="absolute mt-2 w-full bg-[#1a1c50] border border-[#F8F1E8] z-10 text-[#F8F1E8] text-lg font-['Clash_Display'] text-center bg-white/10 backdrop-blur-lg py-2 rounded-[25px] shadow-lg border-white/20">
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
                          <span>{ticket.type}</span>
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

                {values.ticket_type === 'AIESEC Couple' ||
                values.ticket_type === 'Partial AIESEC Couple' ? (
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
                    className="rounded-[10px] mt-1 h-[70px] w-full border-[#FFFFFF] text-[#F8F1E8] border-2 px-2 outline-none bg-white/10 backdrop-blur-lg py-2 shadow-lg border-white/20"
                  />
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    disabled={loading} // Disable button while loading
                    className={`relative font-clash mt-5 px-6 py-2 text-base font-medium text-[#1B1E4A] bg-gradient-to-r from-[#B46A11] via-[#D68D15] to-[#FBF491] rounded-full shadow-md hover:opacity-90 transition-all ${
                      loading ? 'opacity-70 cursor-not-allowed' : ''
                    }`}
                  >
                    {loading ? (
                      <div className="flex items-center justify-center">
                        <FaSpinner className="animate-spin mr-2" /> Processing...
                      </div>
                    ) : (
                      'Proceed to Payment'
                    )}
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
