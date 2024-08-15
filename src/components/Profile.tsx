import React, { useState } from "react";
import ProfileForm from "./ProfileForm";

interface User {
  firstName: string;
  lastName: string;
  bio: string;
  email: string;
  phone: string;
  location: string;
}

const Profile: React.FC = () => {
  const [user, setUser] = useState<User>({
    firstName: "John",
    lastName: "Doe",
    bio: "A frontend developer(ReactJs/NextJs).",
    email: "xyz@example.com",
    phone: "123-456-7890",
    location: "New Delhi, Delhi",
  });

  const [profilePicture, setProfilePicture] = useState<string>("/Profile.jpg");
  const [coverPicture, setCoverPicture] = useState<string>("/Cover.png");

  const handleImageChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    setImage: React.Dispatch<React.SetStateAction<string>>
  ) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (event: ProgressEvent<FileReader>) => {
        if (event.target && event.target.result) {
          setImage(event.target.result as string);
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleRemoveImage = () => {
    setProfilePicture("");
  };

  return (
    <div className="max-w-lg mx-auto p-4">
      <div className="bg-opacity-80 bg-slate-800  shadow-md rounded-lg p-6 relative">
        <div className="relative">
          {coverPicture ? (
            <img
              src={coverPicture}
              alt="Cover"
              className="w-full h-32 sm:h-48 md:h-64 object-cover rounded-t-lg"
            />
          ) : (
            <div className="w-full h-32 sm:h-48 md:h-64 bg-gray-200 rounded-t-lg flex items-center justify-center text-gray-500">
              No Cover Image
            </div>
          )}
          <label
            htmlFor="cover-picture-upload"
            className="cursor-pointer text-white border border-blue-500 rounded-md hover:bg-blue-300 absolute top-2 right-2 bg-blue-500"
          >
            Upload Cover
          </label>
          <input
            id="cover-picture-upload"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => handleImageChange(e, setCoverPicture)}
          />
        </div>
        <div className="flex flex-col items-center space-y-2 mt-4">
          {profilePicture ? (
            <img
              src={profilePicture}
              alt="Profile"
              className="w-20 h-20 sm:w-16 sm:h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 rounded-full"
            />
          ) : (
            <div className="w-20 h-20 sm:w-16 sm:h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
              No Image
            </div>
          )}
          <div className="flex space-x-4">
            <label
              htmlFor="profile-picture-upload"
              className="cursor-pointer text-blue-500 border border-blue-500 rounded-md px-4 py-2 hover:bg-blue-100"
            >
              Change
            </label>
            <input
              id="profile-picture-upload"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => handleImageChange(e, setProfilePicture)}
            />
            <button
              onClick={handleRemoveImage}
              className="text-red-500 border border-red-500 rounded-md px-4 py-2 hover:bg-red-100"
            >
              Remove
            </button>
          </div> 
          <h2 className="text-xl text-white font-semibold">
            {user.firstName} {user.lastName}
          </h2>
          <p className="text-white">{user.location}</p>
        </div>
        <p className="mt-4 text-white">{user.bio}</p>
        <div className="mt-4 text-white">
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
        </div>
        <ProfileForm user={user} setUser={setUser} />
      </div>
    </div>
  );
};

export default Profile;
