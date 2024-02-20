"use client"

import PreLoaderContext from "./pre-loader-context";
// import AnimeText from "./anime-text";

const LoadingContextProvider = ({children}) => {
  return ( 
    <div>
        <PreLoaderContext>
      {children}
      </PreLoaderContext>
      {/* <AnimeText>
        {children}
      </AnimeText> */}
    </div>
   );
}
 
export default LoadingContextProvider;