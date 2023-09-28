interface Props {
  title: string;
  className?: any;
  funcName?: () => void;
}

export const CustomButton = ({ title, className, funcName }: Props) => {
  return (
    <>
      <button onClick={funcName} className={className} type="submit">
        {title}
      </button>
    </>
  );
};
