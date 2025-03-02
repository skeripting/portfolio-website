import { useEffect } from "react";

const useScript = (url) => {
  useEffect(() => {
    const script = document.createElement("script");

    script.src = url;
    script.async = true;
    script["data-uid"] = "a3feecfba8";
    script.onload = () => {
      console.log(`Script loaded: ${url}`);
    };
    script.onerror = () => console.error(`Script failed to load: ${url}`);

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [url]);
};

export default useScript;
