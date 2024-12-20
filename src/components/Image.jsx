import React from "react";
import { FaDownload, FaHeart, FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useGlobalContext } from "./../hooks/useGlobalContext";
import { useFireStore } from "../hooks/useFIrestore";
import { toast } from "react-toastify";
function Image({ image, added }) {
  const { likedImages, user: authUser } = useGlobalContext();

  const { addDocument, deleteDocument } = useFireStore();
  const { links, urls, alt_description, user } = image;

  const addLikedImage = (image, event) => {
    event.preventDefault();
    if (!authUser.emailVerified) {
      return toast.info("Please verify your email, go to profile");
    }
    const alreadyAdded = likedImages.find((img) => {
      return img.id === image.id;
    });

    if (!alreadyAdded) {
      addDocument("likedImages", { ...image, uid: authUser.uid });
    } else {
      deleteDocument("likedImages", alreadyAdded._id);
    }
  };
  const downloadImage = (e) => {
    e.preventDefault();
    if (!authUser.emailVerified) {
      return toast.info("Please verify your email, go to profile");
    }
    window.open(links.download + "&force=true", "_blank");
  };

  return (
    <Link to={`/image-info/${image.id}`}>
      <div className="group relative">
        {!added && (
          <span
            onClick={(event) => {
              addLikedImage(image, event);
            }}
            className="heart-icon hover-icons absolute"
          >
            <FaRegHeart className="text-white" />
          </span>
        )}
        {added && (
          <span
            className="heart-icon hover-icons absolute rounded-md bg-white"
            onClick={(event) => {
              addLikedImage(image, event);
            }}
          >
            <FaHeart className="text-red-600" />
          </span>
        )}
        <img
          src={urls.regular}
          alt={alt_description}
          className="w-full rounded-md"
        />
        <span className="hover-icons absolute bottom-2 left-2 flex items-center gap-2">
          <img
            src={user.profile_image.large}
            alt={user.name + "avatar"}
            className="h-5 w-5 rounded-md md:h-8 md:w-8"
          />
          <p className="font-display text-xs text-white md:text-lg">
            {user.name}
          </p>
        </span>
        <span className="hover-icons absolute bottom-2 right-2 flex h-7 w-7 cursor-pointer items-center justify-center">
          <span onClick={(event) => downloadImage(event)}>
            <FaDownload className="text-white" />
          </span>
        </span>
      </div>
    </Link>
  );
}

export default Image;
