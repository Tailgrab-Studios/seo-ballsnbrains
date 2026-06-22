import starIcon from '@assets/icons/Star.svg';

export default function StarRating() {
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-0.5">
        {[0, 1, 2, 3, 4].map((i) => (
          <img key={i} src={starIcon} alt="" aria-hidden="true" className="w-4 h-4" />
        ))}
      </div>
      <span className="text-white/55 text-[0.8125rem]">
        <span className="text-white font-semibold">Rated 4.8/5</span> (1,847 Reviews)
      </span>
    </div>
  );
}
