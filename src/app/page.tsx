import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NavigationPills
 from "@/components/NavigationPills";


export default function Home() {
  return (
    <div >
      {/* Header */}
       

      {/* Navigation Pills */}
      <NavigationPills/>

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
      
    </div>
  );
}
