
import Logo from "@/assets/Logo.png"



type Props = {}

const Footer = (props: Props) => {
  return (
    <footer
    className="bg-primary-100 py-16"
    >
        <div className="justify-center mx-auto w-5/6 gap-16 md:flex">
            
            <div className="mt-16 basis-1/2 md:mt-0">
                  <img alt="logo" src={Logo} /> 
            <p className="my-5 ">
            Donec tincidunt ac dolor mollis fringilla. 
            Vestibulum pulvinar egestas elit at consequat.
            </p>
            <p> &copy; EvoGym,  All rights reserved </p>
            </div>

            <div className="mt-16 basis-1/4 md:mt-0">
            <h4 className="font-bold">
            Links

            </h4>
            <p className="my-5">
                Sed faucibus, lacus eu dignissim porttitor
            </p>

            <p className="my-5">
            dolor mollis fringilla
            </p>
            <p>
              Ullamcorper vivamus  
            </p>
            
            
            </div>

            <div className="mt-16 basis-1/4 md:mt-0">
            <h4 className="font-bold">
            Contact Us

            </h4>
            <p className="my-5">
                 elit at consequat
            </p>

            <p className="my-5">
            (333)455-4774
            </p>
            
            
            
            </div>

        </div>
        
        </footer>
  )
}

export default Footer