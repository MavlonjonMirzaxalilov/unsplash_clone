import { useGlobalContext } from "../hooks/useGlobalContext";

//firebase
import { sendEmailVerification } from "firebase/auth";
import { auth } from "../firebase/firebaseconfig";
import { toast } from "react-toastify";
function ProfilePage() {
  const { user } = useGlobalContext();

  const sendVerificationEmail = () => {
    sendEmailVerification(auth.currentUser, { url: "" }).then(() => {
      toast.success("Verification email sent✅");
    });
  };

  const usercreatetime = user.reloadUserInfo.createdAt;
  const timestamp = parseInt(usercreatetime, 10);
  const date = new Date(timestamp);
  const formattedDate = date.toLocaleString();

  return (
    <div className="align-elements py-10">
      <div className="flex gap-5">
        <div>
          <img
            src={user.photoURL}
            className="h-40 w-40 rounded-full"
            alt={user.displayName + "avatar"}
          />
        </div>
        <div className="grid grow gap-10 rounded-lg bg-base-200 p-5 md:grid-cols-2">
          <div>
            <h2>
              <span className="block font-display text-2xl font-bold">
                Username:
              </span>
              <span className="font-display text-xl font-normal">
                {user.displayName}
              </span>
            </h2>
          </div>
          <div>
            <h2>
              <span className="block font-display text-2xl font-bold">
                Email:
              </span>
              <span className="font-display text-xl font-normal">
                {user.email}
              </span>
            </h2>
          </div>
          <div>
            <h2>
              <span className="block font-display text-2xl font-bold">
                Status User:
              </span>
              <span className="font-display text-xl font-normal">
                {user.emailVerified ? (
                  "Verified✅"
                ) : (
                  <span className="flex items-center gap-2">
                    <span>Not verified❌</span>
                    <button
                      className="btn btn-success btn-xs"
                      onClick={sendVerificationEmail}
                    >
                      Verify
                    </button>
                  </span>
                )}
              </span>
            </h2>
          </div>
          <div>
            <h2>
              <span className="block font-display text-2xl font-bold">
                Registration time:
              </span>
              <span className="font-display text-xl font-normal">
                {formattedDate}
              </span>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
