import starIcon from '@assets/icons/Star.svg';

export default function ReviewStars({ n }) {
  return (
    <div className="flex gap-0.5">
      {[0, 1, 2, 3, 4].map((i) => (
        <img
          key={i}
          src={starIcon}
          alt=""
          aria-hidden="true"
          className={`w-3.5 h-3.5 ${i < n ? '' : 'opacity-20'}`}
        />
      ))}
    </div>
  );
}
