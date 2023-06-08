interface Props {
  title: string;
  className?: any;
  onClick?: () => void;
}

export const CustomButton = ({ title, className, onClick }: Props) => {
  return (
    <>
      <button onClick={onClick} className={className} type="submit">
        {title}
      </button>
    </>
  );
};
