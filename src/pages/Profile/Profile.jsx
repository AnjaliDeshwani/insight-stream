import { ArrowCircleRightIcon } from "@heroicons/react/outline";
import { useAuth } from "../../context/auth-context";
import { useVideo } from "../../context/video-context";
import { ACTION_TYPE } from "../../utils";
import { UserAvatar } from "../../components";

export const Profile = () => {
  const { loginUser, logoutHandler } = useAuth();
  const { videoDispatch } = useVideo();
  const userLogoutHandler = () => {
    videoDispatch({
      type: ACTION_TYPE.USER_LOGOUT,
    });
    logoutHandler();
  };

  return (
    <div className="mx-auto sm:max-w-xl sm:w-full py-12">
      <div className="flex items-center justify-center h-10 bg-sky-400 rounded-t-md font-bold">
        User Profile
      </div>
      <div className="border-2 border-sky-500 text-black dark:text-white shadow-2xl py-3">
        <div className="mt-6 px-6 flex gap-10">
          <UserAvatar profile={true} />

          <div className="flex flex-col gap-5">
            <div>
              <span className="font-bold">Name: </span>
              <span>
                {loginUser.firstName} {loginUser.lastName}
              </span>
            </div>
            <div>
              <span className="font-bold">Email: </span>
              <span>{loginUser.email}</span>
            </div>
          </div>
        </div>
        <button
          className="ml-auto flex items-center gap-3 m-4 border-sky-500 border-2 py-2 px-6 rounded-md hover:bg-sky-600 font-semibold"
          onClick={userLogoutHandler}
        >
          Logout
          <span>
            <ArrowCircleRightIcon className="h-5 w-5" />
          </span>
        </button>
      </div>
    </div>
  );
};
