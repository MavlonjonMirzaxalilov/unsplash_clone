import { Form, useActionData } from "react-router-dom";
import FormInput from "./FormInput";

//firebase
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase/firebaseconfig";
import { useEffect } from "react";
import { toast } from "react-toastify";

function Modal() {
  const data = useActionData();

  useEffect(() => {
    if (data?.email_for_reset) {
      sendPasswordResetEmail(auth, data.email_for_reset)
        .then(() => {
          toast.success("Verification email sent successfully");
          document.getElementById("my_modal_1").close();
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          toast.error(errorMessage);
        });
    }
  }, [data]);

  return (
    <dialog id="my_modal_1" className="modal">
      <div className="modal-box">
        <h3 className="mb-3 text-lg font-bold text-black">Reset password</h3>
        <Form method="post">
          <FormInput name="email_for_reset" placeholder="Email" type="email" />
          <div className="modal-action justify-between">
            {/* if there is a button in form, it will close the modal */}
            <button
              onClick={() => document.getElementById("my_modal_1").close()}
              type="button"
              className="btn btn-secondary"
            >
              Close
            </button>
            <button className="btn btn-primary">Send</button>
          </div>
        </Form>
      </div>
    </dialog>
  );
}

export default Modal;
