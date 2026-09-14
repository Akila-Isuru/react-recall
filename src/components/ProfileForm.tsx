import React, { useState } from "react";

type ProfileData = {
  fullName: string;
  role: string;
};

function ProfileForm() {
  const [profileData, setProfileData] = useState<ProfileData>({
    fullName: "",
    role: "",
  });

  const handleOnChnage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setProfileData({
      ...profileData,
      [name]: value,
    });
  };

  const clearData = () => {
    setProfileData({ fullName: "", role: "" });
  };
  return (
    <div className="m-3 mb-3 mb-3">
      <div className="flex flex-col">
        <input
          className="border border-gray-300 w-100 rounded-lg mb-3"
          type="text"
          name="fullName"
          value={profileData.fullName}
          onChange={handleOnChnage}
          placeholder="full name"
        />
        <input
          className="border border-gray-300 w-100 rounded-lg mb-3"
          type="text"
          name="role"
          value={profileData.role}
          onChange={handleOnChnage}
          placeholder="role"
        />
      </div>
      <h4>Full name : {profileData.fullName}</h4>
      <h4>Role : {profileData.role}</h4>

      <button className="mt-3 bg-blue-500 rounded-lg p-3" onClick={clearData}>
        ClearAll
      </button>
    </div>
  );
}

export default ProfileForm;
