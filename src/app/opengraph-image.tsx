import { ImageResponse } from "next/og";

export const alt = "Prof. Rabian Wangkeeree — Full Professor of Mathematics";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background:
            "linear-gradient(135deg, #0a1628 0%, #111c34 55%, #0a1628 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", height: "8px", background: "linear-gradient(90deg,#3b82f6,#6366f1)", position: "absolute", top: 0, left: 0, right: 0 }} />
        <div style={{ display: "flex", fontSize: 30, fontWeight: 700, color: "#818cf8", letterSpacing: 2, marginBottom: 18 }}>
          FULL PROFESSOR OF MATHEMATICS
        </div>
        <div style={{ display: "flex", fontSize: 96, fontWeight: 800, color: "#f1f5f9", lineHeight: 1.05 }}>
          Prof. Rabian
        </div>
        <div style={{ display: "flex", fontSize: 96, fontWeight: 800, color: "#60a5fa", lineHeight: 1.05 }}>
          Wangkeeree
        </div>
        <div style={{ display: "flex", fontSize: 38, color: "#cbd5e1", marginTop: 28 }}>
          Optimization Theory · Machine Learning · Deep Learning
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 20, marginTop: 40 }}>
          <div style={{ display: "flex", fontSize: 32, fontWeight: 700, color: "#60a5fa" }}>
            rabian.deepmathai.ai
          </div>
          <div style={{ display: "flex", fontSize: 26, color: "#64748b" }}>
            · Naresuan University
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
