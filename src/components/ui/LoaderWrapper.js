"use client";

import React from "react";
import Loader from "./Loader/Loader";

export default function LoaderWrapper({ children }) {
  const [loading, setLoading] = React.useState(true);

  const onFinish = React.useCallback(() => {
    setLoading(false);
  }, []);

  React.useEffect(() => {
    // Fallback: hide loader after 5 seconds regardless of video/onFinish
    const fallback = setTimeout(() => {
      setLoading(false);
    }, 5000);
    return () => clearTimeout(fallback);
  }, []);

  return (
    <>
      {loading && <Loader onFinish={onFinish} />}
      {children}
    </>
  );
}