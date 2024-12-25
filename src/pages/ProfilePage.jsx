import { useGlobalContext } from "../hooks/useGlobalContext";

//firebase
import { sendEmailVerification } from "firebase/auth";
import { useState } from "react";
import { toast } from "react-toastify";
import { auth } from "../firebase/firebaseconfig";
function ProfilePage() {
  const { user,loading } = useGlobalContext();
  const [imageBase64, setImageBase64] = useState(null);

  const sendVerificationEmail = () => {
    sendEmailVerification(auth.currentUser, {
      url: "http://localhost:5173/profile",
    }).then(() => {
      toast.success("Verification email sent✅");
    });
  };

  const imageChangeBase64 = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    if (file.size % 1024 < 1024) {
      reader.addEventListener("load", () => {
        setImageBase64(reader.result);
      });

      reader.readAsDataURL(file);
    } else {
      toast.warning("Oops, Image must be less than 1MB");
    }
  };

  const cancelImagesaving = () => {
    setImageBase64(null);
  };

  const usercreatetime = user.reloadUserInfo.createdAt;
  const timestamp = parseInt(usercreatetime, 10);
  const date = new Date(timestamp);
  const formattedDate = date.toLocaleString();

  return (
    <div className="align-elements py-10">
      <div className="flex flex-col gap-5 md:flex-row">
        <div className="flex flex-col justify-center">
          <figure className="relative flex justify-center">
            {loading && (
              <span className="absolute mx-auto inline-block h-40 w-40 rounded-full bg-black bg-opacity-30">
                <span className="loading loading-spinner loading-md absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]"></span>
              </span> 
            )}
            <img
              src={imageBase64 ?? user.photoURL}
              className="mx-auto mb-5 h-40 w-40 rounded-full object-cover"
              alt={user.displayName + "avatar"}
            />
          </figure>
          {!imageBase64 && (
            <input
              onChange={(e) => imageChangeBase64(e)}
              type="file"
              accept=".jpg,.jpeg,.png,.gif"
              className="file-input file-input-bordered file-input-primary file-input-sm mx-auto max-w-96"
            />
          )}
          {imageBase64 && (
            <div className="flex justify-center gap-1">
              <button
                onClick={cancelImagesaving}
                className="btn btn-secondary btn-xs grow"
              >
                Cancel
              </button>
              <button className="btn btn-primary btn-xs grow">Save</button>
            </div>
          )}
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
