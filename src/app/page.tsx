import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";

export default async function Home() {
  const session = await getServerSession(authOptions);
  console.log(session);
  return (
    <div>
      <h1>Welcome</h1>
    </div>
  );
}
