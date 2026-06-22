import StatusIcon from './StatusIcon';

const STATUS_COLOR = {
  ok: 'text-bb-green-light',
  no: 'text-[#e35d5d]',
  warn: 'text-[#e0b84a]',
  na: 'text-white/40',
};

export default function CompareCell({ cell }) {
  const [status, text] = cell;
  return (
    <span
      className={`inline-flex items-start justify-center gap-1.5 text-[0.875rem] leading-snug text-center ${STATUS_COLOR[status]}`}
    >
      <StatusIcon status={status} />
      <span className="whitespace-nowrap">{text}</span>
    </span>
  );
}
