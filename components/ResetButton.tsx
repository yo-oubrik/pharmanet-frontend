import { Button } from "./ui/button";

interface ButtonProps {
  className?: string;
  children: React.ReactNode;
}

const ResetButton = ({ className, children }: ButtonProps) => {
  return (
    <Button
      type="reset"
      variant="destructive"
      className={className ?? "shad-primary-btn w-full"}
    >
      {children}
    </Button>
  );
};

export default ResetButton;
