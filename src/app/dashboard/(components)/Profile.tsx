import React from "react";
interface ChildProps {
  data: string;
}
const Profile: React.FC<ChildProps> = ({ data }) => {
  let username = "";
  if (data) {
    username = data.split("@")[0];
  }

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div>
        <p className="text-3xl font-semibold text-white font-mono mb-2">
          Hi <span>{username}</span>
        </p>
      </div>
    </div>
  );
};

export default Profile;
