import SecFooter from "@/components/SecFooter";
import Card from "./Card";

export default function Page() {
  return (
    <div className="flex flex-row h-screen">
      <div className="flex flex-col justify-center items-center basis-3/5">
        <div className="flex flex-col justify-center grow">
          <Card />
        </div>
        <SecFooter />
      </div>
      <div className="basis-2/5 bg-inputBg"></div>
    </div>
  );
}