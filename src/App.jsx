import './App.css';

function App() {
  return (
    <div className="bg-[#0A192F] min-h-screen flex flex-col items-center justify-center text-white p-10">
      <img
        src="/portfolio-image.jpg"
        alt="Profile"
        className="w-48 h-48 rounded-full border-4 border-white mb-6"
      />
      <h1 className="text-4xl font-bold mb-2">Hi, I'm Aadish 👋</h1>
      <p className="text-lg text-gray-300 mb-6">
        I’m building this site to share my blogs, projects, and tech-finance reflections.
      </p>
      <div className="flex gap-4">
        <a href="https://github.com/CommanderOfCodes" target="_blank" rel="noreferrer" className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200 transition">GitHub</a>
        <a href="https://linkedin.com/in/your-link" target="_blank" rel="noreferrer" className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200 transition">LinkedIn</a>
      </div>
    </div>
  );
}

export default App;
