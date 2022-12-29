import { CricleAvatar } from "../criclle_avatar";
export default function UserAvatarStory({
  url,
  size,
  haveSeenBefore,
}: {
  url: string;
  size: number;
  haveSeenBefore: boolean;
}): JSX.Element {
  return (
    <div
      className={
        !haveSeenBefore
          ? "p-[2px] bg-gradient-to-tr from-amber-500 to-fuchsia-600 rounded-full"
          : "border-[1px] rounded-full"
      }
    >
      <div className="p-[2px] bg-white rounded-full">
        <CricleAvatar url={url} size={size} onClick={() => console.log("")} />
      </div>
    </div>
  );
}