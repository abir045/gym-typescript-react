import { SelectedPage } from '@/shared/types'
import { motion } from 'framer-motion'
import ContactUsPageGraphic from '@/assets/ContactUsPageGraphic.png'
import HText from '@/shared/HText'
import {useForm} from 'react-hook-form'

type Props = {

    setSelectedPage: (value: SelectedPage) => void 
}

const ContactUs = ({setSelectedPage}: Props) => {

const {
    register, trigger, formState: {errors} 
} = useForm() ;

const onSubmit = async (e: any) => {
    const isValid = await trigger();
}


const inputStyles = `mb-5 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white`

    return (
    <section id="contactus" className='mx-auto w-5/6 pt-24 pb-32 '>
        
        <motion.div
        onViewportEnter={()=> setSelectedPage(SelectedPage.ContactUs)}
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, amount: 0.5}}
            transition={{ duration:0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50},
              visible: { opacity: 1, x: 0} 
            }}
        > 

        <HText>
            <span className='text-primary-500'>
              JOIN NOW                 
            </span> TO GET IN SHAPE
        </HText>

        <p className='my-5'>
         Donec tincidunt ac dolor mollis fringilla. 
        Vestibulum pulvinar egestas elit at consequat.
        </p>
            
        </motion.div> 

        {/* form and image */}
        <div className='mt-10 justify-between gap-8 md:flex'>
            <motion.div
            className='mt-10 basis-3/5  md:mt-0'
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, amount: 0.5}}
            transition={{ duration:0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50},
              visible: { opacity: 1, y: 0} 
            }}

            >
            
            <form
            target='_blank'
            onSubmit={onSubmit}
            method="POST"
            action="https://formsubmit.co/14a8d6ed0911ae4a1636893c78624744"
            >
           
           <input 
           className={inputStyles} 
           type="text"
           placeholder='NAME'
           {...register("name", {
            required: true,
            maxLength: 100,

           })}
           />
            
           {errors.name && (
            <p className='mt-1 text-primary-500 '>
             { errors.name.type === "required" && "this is a required field" }
             {errors.name.type === "maxLenth" && "the max length of characters is 100" }
            </p>
           )}



           {/* email input */}

        <input 
           className={inputStyles} 
           type="text"
           placeholder='EMAIL'
           {...register("email", {
            required: true,
            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            

           })}
           />
            
           {errors.email && ( 
            <p className='mt-1 text-primary-500 '>
             { errors.email.type === "required" && "this is a required field" }
             {errors.email.type === "pattern" && "invalid email address" }
            </p>
           )}


           {/* message */}

           <textarea
           rows={4}
           cols={50}
           className={inputStyles} 
           
           placeholder='Message'
           {...register("message", {
            required: true,
            maxLength: 2000,

           })}
           />
            
           {errors.message && (
            <p className='mt-1 text-primary-500 '>
             { errors.message.type === "required" && "this is a required field" }
             {errors.message.type === "maxLenth" && "the max length of characters is 2000" }
            </p>
           )}

           <button
           type='submit'
           className='mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white '

           >
            Submit
           </button>
           
            </form>


            </motion.div>
            <motion.div 
            className='relative mt-16 basis-2/5 md:mt-0'
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, amount: 0.5}}
            transition={{ delay: 0.2 ,duration:0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50},
              visible: { opacity: 1, y: 0} 
            }}
            >
            <div className='md:before:content-evolvetext w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1]'>
            <img className='w-full' src={ContactUsPageGraphic} alt="contact-us-page-graphic" />   
            </div>
             
            </motion.div>
 
        </div>


        </section>
  )
}

export default ContactUs