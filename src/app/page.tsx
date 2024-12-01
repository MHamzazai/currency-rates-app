import Rates from "../components/displayRates/rates";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full h-full">

      <nav className="w-full h-40 overflow-hidden bg-slate-100 flex md:justify-between items-center
      shadow-black shadow-sm md:shadow-lg mb-4">

        <div className="hidden md:inline-block">
          <Link href="https://github.com/mhamzazai/" target="_blank" className="xl:ml-5 xl:text-3xl ml-2
          text-xl font-semibold capitalize tracking-wide hover:bg-black hover:text-white hover:scale-105
          hover:px-3 hover:py-1 hover:rounded-md transition-all">Go to GitHub</Link>
        </div>

        <div className="text-center md:h-full md:w-56 md:pt-3 xl:h-full xl:w-80 xl:pt-6 2xl:w-1/2 2xl:text-4xl
        text-3xl font-bold font-sans capitalize xl:border-b-4 border-black tracking-wider hover:border-0
        hover:border-x-2 hover:px-2 hover:border-slate-300 hover:rounded-md hover:text-slate-700
        hover:scale-105 hover:bg-slate-50 hover:py-2 transition-all">
          <span className="text-3xl 2xl:text-5xl font-semibold xl:px-1 text-slate-600">welcome</span> to check currency rates
          <span className="text-3xl 2xl:text-5xl font-semibold xl:px-1 text-slate-600"> website</span>
        </div>

        <div className="hidden md:inline-block">
          <Link href="https://www.npmjs.com/~mhamzazai" target="_blank" className="text-xl xl:text-3xl mr-2
          xl:mr-5 capitalize font-semibold tracking-wide hover:bg-black hover:text-white hover:scale-105
          hover:px-3 hover:py-1 hover:rounded-md transition-all">Got to Npm</Link>
        </div>

      </nav>

      <div className="w-full h-48 md:h-36 overflow-hidden bg-slate-50 mt-16">
        <h1 className="text-4xl capitalize font-sans px-1 py-5 font-bold">here you can find</h1>
        <p className="text-2xl capitalize px-3 font-semibold mb-5">
          different types of <strong className="px-1 bg-slate-100">latest</strong> currency rates in the world.
        </p>
      </div>
      <Rates />
    </div>
  );
}
