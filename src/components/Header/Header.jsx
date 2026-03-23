export default function Header() {
  return (
    <header className="bg-gray-800 text-white py-3 px-6 border-b border-gray-900 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center m-4">
        <span className="text-lg md:text-2xl ">
          Advertorial
        </span>

        <div className="flex items-center gap-3">
          <img
            src="https://flagcdn.com/w40/us.png"
            alt="US Flag"
            className="w-10 h-auto shadow-sm"
          />
          <span className="font-bold text-xs md:text-sm tracking-tight uppercase">
            Trending in the <span className="text-gray-500">US</span>
          </span>
        </div>
      </div>
    </header>
  );
}
