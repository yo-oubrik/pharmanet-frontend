import { Controller } from "react-hook-form";
import { Input } from "../ui/input";

const PasswordInput = ({ control }) => {
  return (
    <div>
      <label htmlFor="password">Password</label>
      <Controller
        name="password"
        control={control}
        render={({ field }) => (
          <Input type="password" {...field} placeholder="Enter your password" />
        )}
      />
    </div>
  );
};

export default PasswordInput;
