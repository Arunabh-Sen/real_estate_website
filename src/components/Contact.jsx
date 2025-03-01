import React from 'react'
import { toast } from 'react-toastify';
import { motion } from "framer-motion";

const Contact = () => {

    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "ba57c46d-bc31-4387-97f0-e1913ce01f85");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      toast.success("Form Submitted Successfully")
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error(data.message)
      setResult("");
    }
  };

  return (
    <motion.div
    initial={{opacity: 0, x:-100}}
    transition={{duration: 1.05}}
    whileInView={{opacity: 1, x:0}}
    viewport={{once:true}}
    className='text-centre p-6 py-20 lg:px-32 w-full overflow-hidden' id='Contact'>
        <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Contact <span className='underline underline-offset-4 decoration-1 under font-light'>With Us</span></h1>
        <p className='text-center text-gray-500 mb-12 max-w-80 mx-auto'>Ready to make a move? Let's build your future together!</p>
            <form  onSubmit={onSubmit} className='max-w-2xl mx-auto text-gray-600 rounded py-3 px-4 mt-2 flex flex-col items-center'>
        <div className='flex flex-wrap w-full'>
            <div className='w-full md:w-1/2 text-left'>
                Your Name
                <input className='w-full border border-gray-300 rounded-lg py-3 px-4 mt-2' type="text" name='Name' placeholder='Your Name' required/>
            </div>
            <div className='w-full md:w-1/2 text-left md:pl-4'>
                Your Email
                <input className='w-full border border-gray-300 rounded-lg py-3 px-4 mt-2' type="email" name='Email' placeholder='Your Email' required/>
            </div>
        </div>
        <div className='my-6 text-left w-full'>
            Message
            <textarea className='w-full border border-gray-300 rounded-lg py-3 px-4 mt-2 h-48 resize-none' name="Message" placeholder='Your Message' required></textarea>
        </div>
        <button className='bg-blue-600 text-white py-2 px-12 rounded-lg hover:bg-blue-700 transition'>{result ? result : "Send Message"}</button>
    </form>
    </motion.div>
  )
}

export default Contact