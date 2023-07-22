import { TUserProfile } from "libs";
import Image from "next/image";

export const Profile = ({ profile }: { profile: TUserProfile }) => {
  return (
    <div className="p-10">
      <div className="bg-[#38383fb7] w-fit px-10 py-5 flex rounded-[50px] items-center">
        <Image
          src={"img/eth.png"}
          width={64}
          height={64}
          alt="eth"
          className="w-16 mr-3 object-contain"
        />
        <div>
          <h1 className="m-0 p-0">
            {profile?.ENS}
            {profile?.ENS && (
              <svg
                onClick={() => window.open("https://web3.bio/" + profile.ENS)}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="ml-5 w-6 h-6 cursor-pointer"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                />
              </svg>
            )}
          </h1>
          <p className="m-0 p-0">{profile?.identity}</p>
        </div>
      </div>
      {profile?.neighbors.map((neighbor, index) => {
        return (
          <div
            key={index}
            className="bg-[#38383fb7] w-6/12 px-10 py-5 flex rounded-[50px]"
          >
            <Image
              src={"img/" + neighbor.source + ".png"}
              className="w-16 mr-3 object-contain"
              width={64}
              height={64}
              alt={neighbor.source}
            />
            <div>
              <h1 className="m-0 p-0">{neighbor.displayName}</h1>
              <p className="m-0 p-0">{neighbor.identity}</p>
              <p className="m-0 p-0">{neighbor.source}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
