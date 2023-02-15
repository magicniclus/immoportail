import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";

export const CookieBanner = () => {
  const router = useRouter();
  const [accepted, setAccepted] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const acceptedFromStorage = localStorage.getItem("acceptedCookies");
      if (acceptedFromStorage === "true") {
        setAccepted(true);
      }
    }
  }, []);

  const handleAccept = () => {
    setAccepted(true);
    if (typeof window !== "undefined" && window.localStorage) {
      localStorage.setItem("acceptedCookies", "true");
    }
  };

  const handleReject = () => {
    setAccepted(false);
    router.push("google.com");
  };

  if (accepted) return null;

  return (
    <div className="fixed bottom-0 right-0 w-full bg-gray-400 text-white px-10 py-20 z-50">
      <p>
        Ce site utilise des cookies pour améliorer votre expérience. En
        continuant à naviguer sur ce site, vous acceptez notre utilisation des
        cookies.
      </p>
      <div className="mt-5">
        <button className="text-blue font-semibold mr-5" onClick={handleAccept}>
          J&apos;accepte
        </button>
        <button className="text-gray-100 font-light" onClick={handleReject}>
          Je refuse
        </button>
      </div>
    </div>
  );
};

export default CookieBanner;
