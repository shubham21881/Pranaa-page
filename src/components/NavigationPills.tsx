import Image from "next/image";




export default function NavigationPills(){
    return (
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
    )
}