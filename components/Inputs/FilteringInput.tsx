import Image from "next/image";
import { Input } from "../ui/input";

interface IFilteringInput {
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  iconSrc?: string;
  iconAlt?: string;
  disabled?: boolean;
}

export const FilteringInput: React.FC<IFilteringInput> = ({
  iconSrc,
  iconAlt,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <div className="flex rounded-md border border-dark-500 bg-dark-400">
      {iconSrc && (
        <Image
          src={iconSrc}
          height={24}
          width={24}
          alt={iconAlt || "icon"}
          className="ml-2"
        />
      )}
      <Input
        placeholder={placeholder}
        className="shad-input border-0"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
