"use client";
import { useEffect, useState } from "react";

export default function ResponsiveWrapper({ children }: { children: React.ReactNode }) {
  const [width, setWidth] = useState<number | null>(null);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 분기점별 스타일
  let wrapperStyle: React.CSSProperties = {
    margin: "0 auto",
    background: "#23232b",
    borderRadius: 16,
    boxShadow: "0 0 24px 0 rgba(0,0,0,0.25)",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    position: "relative",
    padding: 0,
    minHeight: "100vh",
  };

  if (width === null) {
    // SSR: 기본값 (모바일 기준)
    wrapperStyle = {
      ...wrapperStyle,
      minWidth: 314,
      maxWidth: 375,
      width: "100vw",
      height: 812,
    };
  } else if (width >= 1200) {
    wrapperStyle = {
      ...wrapperStyle,
      width: 1200,
      height: "100vh",
      minWidth: 1200,
      maxWidth: 1200,
      padding: 32,
    };
  } else if (width >= 430) {
    wrapperStyle = {
      ...wrapperStyle,
      width: 430,
      height: 932,
      minWidth: 430,
      maxWidth: 430,
      padding: 16,
    };
  } else if (width >= 375) {
    wrapperStyle = {
      ...wrapperStyle,
      width: 375,
      height: 812,
      minWidth: 375,
      maxWidth: 375,
      padding: 8,
    };
  } else {
    wrapperStyle = {
      ...wrapperStyle,
      width: 314,
      height: 812,
      minWidth: 314,
      maxWidth: 375,
      padding: 4,
    };
  }

  return <div style={wrapperStyle}>{children}</div>;
} 