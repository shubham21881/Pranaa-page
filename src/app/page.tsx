import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen  w-full overflow-x-hidden">
      {/* Header */}
      <header className="fixed top-4 left-4 right-4 z-50 bg-white shadow-sm border border-[#BCCDB4] rounded-[8px] overflow-hidden">
  {/* background overlay */}
  <div className="absolute inset-0 bg-[url('/headerbg.png')] bg-cover bg-center opacity-30 pointer-events-none"></div>

  <div className="relative max-w-7xl mx-auto px-1 sm:px-6 lg:px-8">
    <div className="flex justify-between items-center h-16">
      <div className="flex items-center space-x-2">
        <Image src="/Horizontallogo.png" alt="LOGO" width={119} height={30} />
      </div>

      <div className="flex items-center space-x-0.5 sm:space-x-6">
        <button className="bg-[#799B69] hover:bg-teal-600 text-white px-2 py-[8.5px] sm:px-6 sm:py-[10px] rounded-[8px] text-sm font-medium transition-colors min-w-[100px] min-h-[21px] sm:min-w-[168px] sm:min-h-[39px]">
          Join community
        </button>
        <button className="p-2">
          <svg
            className="w-6 h-6 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</header>
      {/* Navigation Pills */}
      <div className="bg-white mt-[100px] w-full">
         <div className="absolute inset-0 bg-[url('/headerbg.png')] bg-cover bg-center opacity-30 pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         
         <div className="flex py-4 gap-2 overflow-x-auto scrollbar-hide pr-4 sm:pr-6 lg:pr-8 snap-x snap-mandatory">
            <button className="flex-shrink-0 snap-start flex items-center bg-[#F1DECA] text-black min-w-[175px] min-h-[40px] rounded-[16px] border-[1px] border-[#B5A697] text-sm py-[10px] px-[20px] gap-2">
              <Image src='/diagnostic.svg' alt="Diagnostics Icon" width={20} height={20} />
              <span className="text-sm">Diagnostics First</span>
            </button>
            <button className="flex-shrink-0 snap-start flex items-center bg-[#FBF7F2] text-black min-w-[175px] min-h-[40px] rounded-[16px] border-[1px] border-[#F5E6D7] text-sm py-[10px] px-[20px] gap-2">
              <Image src='/therapiesicon.svg' alt="Diagnostics Icon" width={25} height={25} />
              <span>Therapies</span>
            </button>
            <button className="flex-shrink-0 snap-start flex items-center bg-[#FBF7F2] text-black min-w-[175px] min-h-[40px] rounded-[16px] border-[1px] border-[#F5E6D7] text-sm py-[10px] px-[20px] gap-2">
              <Image src='/yoga.svg' alt="Diagnostics Icon" width={20} height={20} />
              <span>Wellness</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto  sm:px-6 lg:px-8 ">
        {/* Hero Section */}
        <div className="w-full mb-12">
          <h1 className="text-4xl px-5 md:text-5xl font-light text-gray-900 mb-8">
            InnerSense
          </h1>
          
          {/* Device Image */}
          <div className="relative   mb-8">
            <Image 
              src='/image 1.png' 
              alt="InnerSense device scanning a hand" 
              width={430.93} 
              height={292.15} 
              className=" h-[292.15px] w-[430.93px]"
            />
          </div>


        </div>

        {/* What InnerSense Measures */}
        <section className=" w-full py-[24px] px-[20px] g-[64px] ">
          <h2 className="text-2xl font-light text-gray-900 mb-6">
            What InnerSense Measures
          </h2>
          <div className=" flex flex-col g-[64px] ">
            
            <div className="border-b-[1px]   border-[#BDC5E4] pb-4 ">
              <p className="text-sm text-gray-600">Essential vitamins and minerals</p>
            </div>
            <div className="border-b-[1px]  border-[#BDC5E4] pb-4">
              <p className="text-sm text-gray-600">Trace elements</p>
            </div>
            <div className="border-b-[1px]  border-[#BDC5E4] pb-4">
              <p className="text-sm text-gray-600">Trace elements</p>
            </div>
            <div className="text-sm text-gray-600">
              <p>Quick, painless testing using <strong>spectrophotometry</strong>: a clinically validated method trusted across global laboratories and medical applications.</p>
            </div>
          </div>
        </section>

        {/* Why It Matters */}
        <section className="w-full py-[24px] px-[20px]">
  <h2 className="text-2xl font-light text-gray-900 mb-6 text-left">
    Why It Matters
  </h2>
  <div className="space-y-4 text-sm text-gray-600 text-left">
    <p>
      A personalised scan helps detect imbalances that may contribute to:
    </p>
    <ul className="space-y-2 list-none pl-0 flex flex-col">
      <li className="border-b-[1px]  border-[#BDC5E4] pb-4">Lifestyle-related disorders</li>
      <li className="border-b-[1px]  border-[#BDC5E4] pb-4">Immune dysfunction</li>
      <li className="border-b-[1px]  border-[#BDC5E4] pb-4">Hormonal imbalance</li>
      <li className="border-b-[1px]  border-[#BDC5E4] pb-4">Infertility, PCOS, fatigue</li>
      <li className="border-b-[1px]  border-[#BDC5E4] pb-4">Heavy metal toxicity</li>
    </ul>
    <p className="mt-4">
      Understanding these patterns allows for targeted, data-backed care that supports true healing.
    </p>
  </div>
</section>


        {/* How It Works */}
        <section className="w-full py-[24px] px-[20px] g-[64px]">
          <h2 className="text-2xl font-light text-gray-900 mb-6">
            How It Works
          </h2>
          <div className="space-y-4 text-sm text-gray-600 flex flex-col">
            <p  className="border-b-[1px]  border-[#BDC5E4] pb-4">Uses clinical-grade spectrophotometry</p>
            <p className="border-b-[1px]  border-[#BDC5E4] pb-4">Measures the absorbance of light through skin tissue</p>
            <p className="border-b-[1px]  border-[#BDC5E4] pb-4">Compares real-time data with global database (700+ studies)</p>
            <p className="border-b-[1px]  border-[#BDC5E4] pb-4">Reports delivered in under 60 seconds</p>
            <p className="font-medium text-gray-900">
              Instant results, no blood, No needles.<br />
              Just a smart scan.
            </p>
          </div>
        </section>

        {/* What You Receive */}
        <section className=" w-full py-[24px] px-[20px] g-[64px]">
          <h2 className="text-2xl font-light text-gray-900 mb-6">
            What You Receive
          </h2>
          <div className="space-y-4 text-sm text-gray-600 flex flex-col">
            <p className="border-b-[1px]  border-[#BDC5E4] pb-4">Instant diagnostic report</p>
            <p className="border-b-[1px]  border-[#BDC5E4] pb-4">Measures the absorbance of light through skin tissue</p>
            <p className="border-b-[1px]  border-[#BDC5E4] pb-4">Supplementation recommendations</p>
            <p className="border-b-[1px]  border-[#BDC5E4] pb-4">A personalised plan tailored to your current biological needs</p>
            <p>Your roadmap to internal balance begins with insight.</p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className=" relative bg-white   w-full  min-h-[916px] pb-[24px]  ">
        <div className="absolute inset-0 bg-[url('/footerbg.png')] bg-cover bg-center opacity-30"></div>
        <div className=" relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  ">
          
            <div>
              <div className="flex   items-center min-w-[430px] min-h-[146px]  g-[10px]">
                                                                                            
                     <Image src='/logo(1).png' alt="Diagnostics Icon" width={117} height={106} />
                
              </div>
              <div className="w-full min-h-[730px]  g-[54px]">
                <div className="w-full min-h-[612px] gap-[44px]">
                    <div className=" grid grid-cols-2  w-full min-h-[308px] gap-5">
                                                <div className="  flex flex-col w-full sm:w-1/2    min-h-[308px]">
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
                           
                                         <div className="flex flex-col w-full sm:w-1/2">
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
    </div>
  );
}
