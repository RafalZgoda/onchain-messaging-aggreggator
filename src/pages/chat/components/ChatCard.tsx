import { TConversation } from "libs";
import Image from "next/image";
export const ChatCard = ({ conversation }: { conversation: TConversation }) => {
  return (
    <div className="grid grid-cols-5 p-2 cursor-pointer hover:bg-telegram-gray-200">
      <div className="col-span-1">
        <Image
          src={conversation.imgUrl}
          alt={conversation.addressTo}
          className="rounded-full w-15"
          width={50}
          height={50}
        />
      </div>
      <div className="col-span-4">
        <div className="flex justify-between">
          <h2 className="text-white text-sm">{conversation.addressTo}</h2>
          <p className="text-xs text-telegram-gray-100">07/12/2023 : 12:43</p>
        </div>
        <div className="flex justify-between text-right">
          <p className="text-xs text-telegram-gray-100">last message preview</p>
          <div className="p-1 px-2 h-5 leading-3 text-xs font-bold text-white text-center rounded-full bg-telegram-gray-200">
            <p>8</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatCard;
