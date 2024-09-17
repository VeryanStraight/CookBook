interface Props {
  children: string;
  onClick: () => void;
  colour?: "primary" | "secondary" | "success";
}

const ExerciseButton = ({ children, onClick, colour = "primary" }: Props) => {
  return (
    <button type="button" className={"btn btn-" + colour} onClick={onClick}>
      {children}
    </button>
  );
};

export default ExerciseButton;
