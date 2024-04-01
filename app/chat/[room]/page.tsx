"use client";
import Chat from "@/components/chat/Chat";
function page({ params }: { params: { room: string } }) {
  return (
    <div>
      <Chat room={params.room} />
    </div>
  );
}
export default page;
