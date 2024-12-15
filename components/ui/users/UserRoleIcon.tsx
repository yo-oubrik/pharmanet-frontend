import { RoleUtilisateur } from "@/types/types";
import {
  FaUserShield,
  FaHeartbeat,
  FaCapsules,
  FaUserTag,
} from "react-icons/fa";
interface UserRoleIconProps {
  role: RoleUtilisateur;
}
export const UserRoleIcon: React.FC<UserRoleIconProps> = ({ role }) => {
  switch (role) {
    case RoleUtilisateur.Admin:
      return (
        <FaUserShield className="text-blue-500 mr-2" title="Admin" size={18} />
      );
    case RoleUtilisateur.Patient:
      return (
        <FaHeartbeat className="text-red-500 mr-2" title="Patient" size={18} />
      );
    case RoleUtilisateur.Pharmacist:
      return (
        <FaCapsules
          className="text-green-500 mr-2"
          title="Pharmacist"
          size={18}
        />
      );
    default:
      return (
        <FaUserTag
          className="text-gray-500 mr-2"
          title="Autre rôle"
          size={18}
        />
      );
  }
};
