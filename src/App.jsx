export default function Home() {
  return (
    <div className="min-h-screen bg-[#031425] flex items-center justify-center px-4">
      {/* Card Container */}
      <div className="bg-[#05223d] shadow-2xl w-full max-w-7xl min-h-[575px] p-10 flex flex-col md:flex-row items-center md:items-start gap-10">
        
        {/* Left: Image */}
        <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-lg flex-shrink-0">
          <img
            src="/profile-image.jpeg"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right: Text */}
        <div className="text-left flex-1 flex flex-col justify-center">
          <h1 className="text-5xl md:text-7xl text-[#00c2ff] font-bold mb-4 leading-tight">
            Hey There! How You Doin' <span role="img" aria-label="wave">👋</span>
          </h1>
          <p className="text-xl md:text-3xl text-[#cef1f5] leading-relaxed mb-6">
            I’m <span className="font-semibold">Aadish</span> — a future fintech engineer, developer & writer. 
            I love building products that merge finance and technology.
          </p>
          <button className="bg-[#093c6e] hover:bg-[#00c2ff] text-white font-semibold py-2 px-6 rounded-lg transition">
            Explore My Work
          </button>
        </div>
      </div>
    </div>
  );
}
