import Image from "next/image";



export default function Footer() {
  return (
    <footer className=" relative bg-white   w-full  min-h-[916px] pb-[24px]  ">
            <div className="absolute inset-0 bg-[url('/footerbg.png')] bg-cover bg-center opacity-30"></div>
            <div className=" sm:flex sm:justify-center  relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  ">
              
                <div>
                  <div className="flex   items-center min-w-[430px] min-h-[146px]  g-[10px]">
                                                                                                
                         <Image src='/logo(1).png' alt="Diagnostics Icon" width={117} height={106} />
                    
                  </div>
                  <div className="w-full min-h-[730px]  g-[54px]">
                    <div className="w-full min-h-[612px] gap-[44px]">
                        <div className=" grid grid-cols-2  w-full min-h-[308px] gap-5 sm:gap-[100px]">
                                                    <div className="  flex flex-col w-full sm:w-full   min-h-[308px]">
                                                                            <h4 className="  font-bold text-gray-900">Location</h4>
                                                                            <p className="text-sm">Inside Kanwar Nursing Home  Shankar Nagar Raipur</p>
                                                                            <h4 className="font-bold text-gray-900 mt-4">Phone</h4>
                                                                            <p>+91 XXXXXXXXX</p>
                                                                            <h4 className="font-bold text-gray-900 mt-4">Email</h4>
                                                                             <p>hello@pranaa.in</p>
                                                                             <h4 className="font-bold text-gray-900 mb-1 mt-4">Social</h4>
                                                                                 <div className="flex space-x-4">
                                                                                    <a href="#" className="text-gray-600 hover:text-gray-900">
                                                                                   <Image src='/whatsapp.svg' alt="whatsapp" width={24} height={24} />
                                                                                    
                                                                                    </a>
                                                                                    <a href="#" className="text-gray-600 hover:text-gray-900">
                                                                                   <Image src='/instagram.svg' alt="instagram" width={24} height={24} />
                                                                                    
                                                                                    </a>
                                                                                    <a href="#" className="text-gray-600 hover:text-gray-900">
                                                                                   <Image src='/twitter.svg' alt="instagram" width={24} height={24} />
                                                                                    
                                                                                    </a>
                                                                              </div>
                                                       </div> 
                               
                                             <div className="flex flex-col w-full sm:w-full">
                                                <h4 className="font-bold text-gray-900 mb-4">Pranaa</h4>
                                                <div className="space-y-2 text-sm text-gray-600">
                                                  <a href="#" className="block hover:text-gray-900 border-b-[1px]  border-[#BDC5E4]">About</a>
                                                  <a href="#" className="block hover:text-gray-900 border-b-[1px]  border-[#BDC5E4]">Community</a>
                                                  <a href="#" className="block hover:text-gray-900 border-b-[1px]  border-[#BDC5E4]">Contact</a>
                                                  <a href="#" className="block hover:text-gray-900 border-b-[1px]  border-[#BDC5E4]">Team</a>
                                                  <a href="#" className="block hover:text-gray-900 border-b-[1px]  border-[#BDC5E4]">Collaboration</a>
                                                  <a href="#" className="block hover:text-gray-900 break-words">Advance Medical Equipment</a>
                                                </div>
                                              </div>   
                          
    
                        </div>
                           <div className="w-full min-h-[260px] g-[12px] mt-6">
                                    <h4 className="font-bold text-gray-900 mb-4">Our key services</h4>
                                    <ul className="space-y-2 text-sm text-gray-600 flex flex-col">
                                      <li>Holistic Healing</li>
                                      <li>Chronic Diseases</li>
                                      <li>Gut Health</li>
                                      <li>Musculoskeletal Issues</li>
                                      <li>Skin Conditions</li>
                                      <li>Women's Health including reproductive health</li>
                                      <li>Children's Health</li>
                                      <li>General Health</li>
                                      <li>Anti-Aging and Skin Care for Wellness</li>
                                    </ul>
                                 </div>
                     
                     
                                    <div className="w-full  mt-[25px]  min-h-[64px] pt-8  text-sm text-gray-600">
                                        <p>TERMS OF USE | PRIVACY POLICY</p>
                                         <p className="mt-2">©2024 Pranaa All Rights Reserved.</p>
                                     </div>
    
    
                                    </div>
                    
                    
                   
                   
                    
                  </div>
                </div>
               
    
                <div>
                  
                </div>
    
               
              
              
             
            </div>
          </footer>
  )
}