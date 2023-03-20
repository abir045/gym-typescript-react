
import ActionButton from "@/shared/ActionButton"
import HText from "@/shared/HText"
import { BenefitType, SelectedPage } from "@/shared/types"
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from "@heroicons/react/24/solid"
import {motion} from "framer-motion"
import Benefit from "./Benefit"
import BenefitsPageGraphic from '@/assets/BenefitsPageGraphic.png'
 
type Props = {

    setSelectedPage: (value: SelectedPage) => void

}


const container = {
     hidden: { opacity: 0},
     visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2 ,  staggerDirection:1 , duration:1 }
    }
     
}

const benefits: Array<BenefitType> = [

{ icon: <HomeModernIcon className="w-6 h-6 " /> ,
  title: "State of The Art Facilities" ,
  desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dictum velit sapien, sed eleifend leo auctor ut. Ut at porttitor eros. Donec accumsan varius nisi, et convallis tortor cursus sed. Proin quis elit ipsum. Morbi consectetur orci sit amet interdum elementum. Sed feugiat augue id varius blandit. Praesent laoreet in ligula vitae dapibus. Proin quis felis vitae velit lobortis dictum vel in erat. Proin vehicula iaculis condimentum. Integer vel orci at metus dapibus pharetra. Nullam nec orci eget odio dapibus ultrices. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse nisl libero, sagittis a ipsum in, sollicitudin pretium massa.",

},
{ icon: <UserGroupIcon className="w-6 h-6 " /> ,
  title: "100's of Diverse Classes" ,
  desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dictum velit sapien, sed eleifend leo auctor ut. Ut at porttitor eros. Donec accumsan varius nisi, et convallis tortor cursus sed. Proin quis elit ipsum. Morbi consectetur orci sit amet interdum elementum. Sed feugiat augue id varius blandit. Praesent laoreet in ligula vitae dapibus. Proin quis felis vitae velit lobortis dictum vel in erat. Proin vehicula iaculis condimentum. Integer vel orci at metus dapibus pharetra. Nullam nec orci eget odio dapibus ultrices. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse nisl libero, sagittis a ipsum in, sollicitudin pretium massa.",

},
{ icon: < AcademicCapIcon  className="w-6 h-6" /> ,
  title: "Expert and pro trainers" ,
  desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dictum velit sapien, sed eleifend leo auctor ut. Ut at porttitor eros. Donec accumsan varius nisi, et convallis tortor cursus sed. Proin quis elit ipsum. Morbi consectetur orci sit amet interdum elementum. Sed feugiat augue id varius blandit. Praesent laoreet in ligula vitae dapibus. Proin quis felis vitae velit lobortis dictum vel in erat. Proin vehicula iaculis condimentum. Integer vel orci at metus dapibus pharetra. Nullam nec orci eget odio dapibus ultrices. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse nisl libero, sagittis a ipsum in, sollicitudin pretium massa.",

}


]



const Benefits = ({setSelectedPage }: Props) => {
  return (
    <section 
    id="benefits"
    className="mx-auto min-h-full w-5/6 py-20"
    >
     <motion.div
     onViewportEnter={()=> setSelectedPage(SelectedPage.Benefits)}
     >
        {/* Header */}
          
      <motion.div 
      className="md:my-5 md:w-3/5"
      initial="hidden"
      whileInView="visible"
      viewport={{once: true, amount: 0.5}}
      transition={{  duration:0.5 }}
      variants={{
              hidden: { opacity: 0, x: -50},
              visible: { opacity: 1, x: 0} 
            }}
      >
         
         <HText>
         MORE THAN JUST A GYM
        </HText>     
        <p className="my-5 text-sm ">
           We provide world class fitness equipment, trainers and classes to
            get you to your ultimate fitness goals with ease. We provide true
            care into each and every member.   
        </p>
        
        </motion.div>  

   {/* Benefits */}

    <motion.div 
    className="md:flex mt-5 items-center justify-between gap-8 "
    initial="hidden"
    whileInView="visible"
    viewport={{once: true, amount: 0.5}}
    variants={container}
    
    >
   {benefits.map((benefit: BenefitType)=> (
    <Benefit
      key={benefit.title}
      icon={benefit.icon}
      title={benefit.title}
      desc={benefit.desc}
      setSelectedPage={setSelectedPage}
      
    />
   )) }


     </motion.div>

     {/* graphics & desc */}
       
     <div className="md:flex mt-16 items-center justify-between gap-20 md:mt-28">
        {/* graphic */}
        <img className="mx-auto" alt="benefits page graphic" src={BenefitsPageGraphic}  />
      <div>
      {/* title */}
      <div className="relative" >
        <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves ">
         
         <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{once: true, amount: 0.5}}
      transition={{  duration:0.5 }}
      variants={{
              hidden: { opacity: 0, x: 50},
              visible: { opacity: 1, x: 0} 
            }}
         >
         <HText>
            MILLIONS OF HAPPY MEMBERS GETTING  {" "}
            <span className="text-primary-500"> FIT</span>
         </HText>
         </motion.div>
         
        </div>
      </div>


      {/* desc */}
      <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{once: true, amount: 0.5}}
      transition={{ delay:0.2, duration:0.5 }}
      variants={{
              hidden: { opacity: 0, x: 50},
              visible: { opacity: 1, x: 0} 
            }}
      >
        <p className="my-5">
         Nam eu tincidunt magna, sed venenatis ante. Donec nunc massa, pellentesque nec erat vitae, porttitor porta risus. Maecenas ut libero sagittis, rhoncus risus non, scelerisque lacus. Etiam vehicula orci ac dui pretium, vel ultrices eros pulvinar. Nulla aliquam ipsum in orci accumsan pulvinar. Donec laoreet ex id dolor molestie euismod. Suspendisse at libero at metus lobortis rhoncus. Fusce massa magna, dapibus ut dui nec, commodo cursus nunc. Suspendisse consectetur sodales lacus a sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Curabitur efficitur arcu non metus molestie fringilla. Praesent eleifend accumsan pharetra. Mauris sit amet risus mauris.
        </p>


        <p className="mb-5">
        Praesent sodales facilisis rhoncus. Suspendisse eu posuere lectus. Morbi quis urna sit amet sapien blandit gravida non vel diam. Suspendisse sed nunc felis. Suspendisse eget interdum mi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In eu mauris rhoncus elit malesuada placerat nec a elit. Curabitur tortor odio, condimentum nec odio id, ullamcorper accumsan tellus. Proin auctor nisl justo, vel volutpat lorem euismod eu. Duis placerat mauris non justo blandit commodo. In auctor risus quis quam sagittis gravida nec quis justo. Suspendisse nec maximus nisl.
        </p>
      
      
      </motion.div>
      
      
      {/* button */}
      <div className="relative mt-16">
        <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles ">
          <ActionButton setSelectedPage={setSelectedPage}>

           Join Now            
          </ActionButton>
        </div>


      </div>
      </div>
     
     </div>
        
        
        
   </motion.div>     



   </section>
  )
}

export default Benefits