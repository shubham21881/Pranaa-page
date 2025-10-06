import Image from "next/image";


 export default  function Navbar() {
  return (
     <header className="  fixed top-4 left-4 right-4 z-50 bg-white shadow-sm border border-[#BCCDB4] rounded-[8px] overflow-hidden">
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
  )
}

