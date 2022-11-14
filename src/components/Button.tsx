type Props = {
  text: string;
  onClick?: () => void;
};

export default function Button({text, onClick}: Props) {
  return (
    <div className="bg-neutral-200 border-2 border-neutral-300 p-2 rounded-md">
      <button onClick={onClick}>{text}</button>
    </div>
  );
}
