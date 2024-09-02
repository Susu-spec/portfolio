import { useEffect, useState } from "react";
import SpotifyLoader from "./SpotifyLoader";

// set up prop to pass iframe src value

export default function SpotifyEmbed() {
    const [ loading, setLoading ] = useState(true);
    useEffect(() => {
     
      const timeoutId = setTimeout(() => {
        setLoading(false);
      }, 4000);
  
      return () => clearTimeout(timeoutId);
    }, [setLoading]);
    if (loading) {
        return (
            <SpotifyLoader />
        )
    }
    // add flowers to the stones
    return (
        <>
            {/* <iframe className="border: none" 
                src="https://open.spotify.com/embed/album/4eLPsYPBmXABThSJ821sqY?utm_source=generator&theme=0"
                width="100%" height="100%" 
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                loading="lazy"></iframe> */}
                 <iframe  
                    src="https://open.spotify.com/embed/album/4eLPsYPBmXABThSJ821sqY?utm_source=generator&theme=0" 
                    width="100%" height="428" 
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                    loading="lazy"></iframe>
        </>
       
    )
}