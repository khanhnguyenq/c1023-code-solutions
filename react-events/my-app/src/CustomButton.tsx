type Props = {
  text: string;
  className: string;
  onCustomClick: (text: string) => void;
};

export function CustomButton({ text, className, onCustomClick }: Props) {
  return (
    <button onClick={() => onCustomClick(text)} className={className}>
      {text}
    </button>
  );
}
