import { SelectedPage } from '@/shared/types'
import { motion } from 'framer-motion'
import image1 from "@/assets/image1.png"
import image2 from "@/assets/image2.png"
import image3 from "@/assets/image3.png"
import image4 from "@/assets/image4.png"
import image5 from "@/assets/image5.png"
import image6 from "@/assets/image6.png"
import HText from '@/shared/HText'
import { ClassType } from '@/shared/types'
import Class from '@/scenes/class' ;



const classes: Array<ClassType> = [

    {
        name: "Weight Training Classes",
        description: "Donec tincidunt ac dolor mollis fringilla. Vestibulum pulvinar egestas elit at consequat. Proin dignissim interdum ex. Fusce a commodo urna. Sed ut turpis vel nulla luctus varius a id lectus. Integer lectus est, fringilla ac magna quis, tempor egestas quam. Donec consectetur faucibus tortor id sollicitudin. Sed ut nulla sed erat vulputate pretium. Sed semper auctor magna id venenatis",
        image: image1
     },


     {
        name: "Yoga Classes",
        description: "Donec tincidunt ac dolor mollis fringilla. Vestibulum pulvinar egestas elit at consequat. Proin dignissim interdum ex. Fusce a commodo urna. Sed ut turpis vel nulla luctus varius a id lectus. Integer lectus est, fringilla ac magna quis, tempor egestas quam. Donec consectetur faucibus tortor id sollicitudin. Sed ut nulla sed erat vulputate pretium. Sed semper auctor magna id venenatis",
        image: image2
     },
     {
        name: "Ab Core Classes",
        description: "Donec tincidunt ac dolor mollis fringilla. Vestibulum pulvinar egestas elit at consequat. Proin dignissim interdum ex. Fusce a commodo urna. Sed ut turpis vel nulla luctus varius a id lectus. Integer lectus est, fringilla ac magna quis, tempor egestas quam. Donec consectetur faucibus tortor id sollicitudin. Sed ut nulla sed erat vulputate pretium. Sed semper auctor magna id venenatis",
        image: image3
     },
     {
        name: "Adventure Classes",
        description: "Donec tincidunt ac dolor mollis fringilla. Vestibulum pulvinar egestas elit at consequat. Proin dignissim interdum ex. Fusce a commodo urna. Sed ut turpis vel nulla luctus varius a id lectus. Integer lectus est, fringilla ac magna quis, tempor egestas quam. Donec consectetur faucibus tortor id sollicitudin. Sed ut nulla sed erat vulputate pretium. Sed semper auctor magna id venenatis",
        image: image4
     },
     {
        name: "Fitness Classes",
        description: "Donec tincidunt ac dolor mollis fringilla. Vestibulum pulvinar egestas elit at consequat. Proin dignissim interdum ex. Fusce a commodo urna. Sed ut turpis vel nulla luctus varius a id lectus. Integer lectus est, fringilla ac magna quis, tempor egestas quam. Donec consectetur faucibus tortor id sollicitudin. Sed ut nulla sed erat vulputate pretium. Sed semper auctor magna id venenatis",
        image: image5
     },
     {
        name: "Training Classes",
        description: "Donec tincidunt ac dolor mollis fringilla. Vestibulum pulvinar egestas elit at consequat. Proin dignissim interdum ex. Fusce a commodo urna. Sed ut turpis vel nulla luctus varius a id lectus. Integer lectus est, fringilla ac magna quis, tempor egestas quam. Donec consectetur faucibus tortor id sollicitudin. Sed ut nulla sed erat vulputate pretium. Sed semper auctor magna id venenatis",
        image: image6
     },


]


type Props = {
    setSelectedPage: (value: SelectedPage ) => void
 }

const  OurClasses = ({setSelectedPage }: Props) => {
  return (
    <section id="ourclasses" className='w-full bg-primary-100 py-40'>
      <motion.div
      onViewportEnter={()=> setSelectedPage(SelectedPage.OurClasses)}
      
      >
        <motion.div 
        className='mx-auto w-5/6'
        initial="hidden"
            whileInView="visible"
            viewport={{once: true, amount: 0.5}}
            transition={{ duration:0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50},
              visible: { opacity: 1, x: 0} 
            }}
        
        >

        {/* Title & description */}
        <div className='md: w-3/5'>
        <HText>
            Our Classes
        </HText>

        <p 
        className='py-5'
        >
        Donec tincidunt ac dolor mollis fringilla. 
        Vestibulum pulvinar egestas elit at consequat.
         Proin dignissim interdum ex. Fusce a commodo urna.
         Sed ut turpis vel nulla luctus varius a id lectus. 
         Integer lectus est, fringilla ac magna quis, tempor egestas quam. 
         Donec consectetur faucibus tortor id sollicitudin. Sed ut nulla sed erat vulputate pretium.
         Sed semper auctor magna id venenatis.
        </p>
        </div>

         
        </motion.div>

          
         <div className='mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden'>
           <ul className='w-[2800px] whitespace-nowrap'>
            {classes.map((item: ClassType, index)=> (
                < Class 
                key={`${item.name}- ${index}`}
                name={item.name}
                description={item.name}
                image={item.image}
                />
            ) )}

           </ul>

         </div>
        </motion.div>

    </section>
  )
}

export default OurClasses