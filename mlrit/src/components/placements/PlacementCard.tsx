type Props = {
  value: string;
  label: string;
  note?: string;
};

export default function PlacementCard({ value, label, note }: Props) {
  return (
    <div className="pl-statgrid__card pl-fade">
      <span className="pl-statgrid__value">{value}</span>
      <span className="pl-statgrid__label">{label}</span>
      {note && <span className="pl-statgrid__note">{note}</span>}
    </div>
  );
}
