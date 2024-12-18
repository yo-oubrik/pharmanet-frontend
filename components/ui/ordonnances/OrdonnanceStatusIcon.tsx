import { OrdonnanceStatus } from "@/types/types";
import {
  FaCheckCircle,
  FaClock,
  FaSpinner,
  FaTimesCircle,
} from "react-icons/fa";
interface UserRoleIconProps {
  status: OrdonnanceStatus;
}
export const OrdonnanceStatusIcon: React.FC<UserRoleIconProps> = ({
  status,
}) => {
  switch (status) {
    case OrdonnanceStatus.Pending:
      return (
        <FaClock className="text-blue-500 mr-2" title="Pending" size={18} />
      );
    case OrdonnanceStatus.Processing:
      return (
        <FaSpinner
          className="text-yellow-500 mr-2 animate-spin duration-[2000]"
          title="Processing"
          size={18}
        />
      );
    case OrdonnanceStatus.Completed:
      return (
        <FaCheckCircle
          className="text-green-500 mr-2"
          title="Completed"
          size={18}
        />
      );
    case OrdonnanceStatus.Rejected:
      return (
        <FaTimesCircle
          className="text-red-500 mr-2"
          title="Rejected"
          size={18}
        />
      );
  }
};
