export default function AlertBanner() {
  return (
    <div className="max-w-6xl mx-auto mt-6 ">
      <div className="bg-[#fffde7] border-2 border-[#f0e68c] p-5 md:p-6 shadow-sm rounded-sm">
        <p className="text-[#222] text-base md:text-lg leading-relaxed italic">
          <span className="text-red-600 font-black uppercase underline decoration-2 underline-offset-4 mr-2">
            UPDATE:
          </span>
          As of February 16, 2026 - faster than expected! Lock in your order{' '}
          <span className="font-extrabold underline decoration-[#002855]">
            The demand for Balls & Brains has increased dramatically
          </span>{' '}
          <span className="font-black bg-yellow-200 px-1 italic">
            due to word-of-mouth from men who've transformed their testosterone
            levels, and our current batch inventory is running low.
          </span>{' '}
        </p>
      </div>
    </div>
  );
}
