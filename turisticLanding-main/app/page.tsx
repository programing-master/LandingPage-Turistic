import Boat from "@/components/Boat";
import Features from "@/components/Features";
import GetOnly from "@/components/GetOnly";
import Help from "@/components/Help";
import Rate from "@/components/Rate";

export default function Home() {
  return (
   <div className="min-h-screen">
   <Rate></Rate>
   <Boat></Boat>
   <Help></Help>
   <Features></Features>
   <GetOnly></GetOnly>
   </div>
  );
}
