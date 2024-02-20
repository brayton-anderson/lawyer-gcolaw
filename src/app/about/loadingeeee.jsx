"use client"

import SvgPathLoader from "../../../components/animated-logo";

const Loading = () => {
  return ( 
    <div className="flex h-screen w-full items-center justify-center">
      <SvgPathLoader />
    </div>
   );
}
 
export default Loading;