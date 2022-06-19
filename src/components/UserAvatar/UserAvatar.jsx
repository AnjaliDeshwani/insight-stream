import { useAuth } from "../../context/auth-context";
export const UserAvatar = ({ profile }) => {
  const { loginUser } = useAuth();
  const firstNameInitial = loginUser?.firstName[0];
  const lastNameInitial = loginUser?.lastName[0];

  const userInitials = firstNameInitial + lastNameInitial;

  return (
    <span
      className={`${
        profile ? "w-20 h-20" : "w-10 h-10"
      } bg-sky-400 text-sm flex font-semibold justify-center items-center rounded-full bg-primary`}
    >
      {userInitials}
    </span>
  );
};
