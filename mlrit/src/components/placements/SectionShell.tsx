type Props = {
  id?: string;
  className: string;
  innerClassName?: string;
  children: React.ReactNode;
};

export default function SectionShell({
  id,
  className,
  innerClassName,
  children,
}: Props) {
  return (
    <section id={id} className={className}>
      <div className={`pl-section-inner${innerClassName ? " " + innerClassName : ""}`}>
        {children}
      </div>
    </section>
  );
}
