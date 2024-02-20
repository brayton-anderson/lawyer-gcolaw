"use client"
import React,{useState, useEffect} from 'react';
import {useRouter} from 'next/navigation'
import SvgPathLoader from './animated-logo';
import SvgPathLoader1 from './textG';
import TextG from './textG';

export default function PreLoaderContext({ children }) {

  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingName, setIsLoadingName] = useState(true);

  useEffect(() => {
    window.addEventListener("load", () => {
      setIsLoading(false);
    });
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 4000);

    const timeout2 = setTimeout(() => {
      setIsLoadingName(false);
    }, 5500);

    return () => {
      clearTimeout(timeout);
      clearTimeout(timeout2);
    };
    // clearTimeout(timeout).clearTimeout2(timeout2);
  }, []);

  const router = useRouter();

  useEffect(() => {
    const handleStart = () => setIsLoading(true);
    const handleComplete = () => setIsLoading(false);

    const handleStartName = () => setIsLoadingName(true);
    const handleCompleteName = () => setIsLoadingName(false);

    router?.events?.on("routeChangeStart", handleStart);
    router?.events?.on("routeChangeComplete", handleComplete);
    router?.events?.on("routeChangeError", handleComplete);

    router?.events?.on("routeChangeStart", handleStartName);
    router?.events?.on("routeChangeComplete", handleCompleteName);
    router?.events?.on("routeChangeError", handleCompleteName);

    return () => {
      router?.events?.off("routeChangeStart", handleStart);
      router?.events?.off("routeChangeComplete", handleComplete);
      router?.events?.off("routeChangeError", handleComplete);

      router?.events?.off("routeChangeStart", handleStartName);
      router?.events?.off("routeChangeComplete", handleCompleteName);
      router?.events?.off("routeChangeError", handleCompleteName);
    };
  }, [router]);

return(
<>
  {isLoading ? 
   
      <SvgPathLoader />
      // <SvgPathLoader1 />
    
   : isLoadingName? <TextG/>:  children}
</>
)

}