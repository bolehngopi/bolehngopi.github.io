// app/api/og/route.ts
import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";

// export const runtime = "edge"; // Use Edge runtime for faster response times
export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);

  const title = searchParams.get("title") || "Welcome to My Portofolio";
  const subtitle = searchParams.get("subtitle") || "Crafted with passion";
  const author = searchParams.get("author") || "Aziz Khasyi";

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex", // Ensure the parent has a proper layout
          width: "100%",
          height: "100%",
          backgroundColor: "#000",
          color: "#fff",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column", // Ensure proper stacking of children
          fontFamily: "Arial, sans-serif",
          textAlign: "center",
          position: "relative",
        }}
      >
        {/* Background Decorations */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex", // Make sure this child has a layout too
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              width: 280,
              height: 280,
              background: "linear-gradient(to right, #38bdf8, #3b82f6)",
              borderRadius: "50%",
              filter: "blur(120px)",
              opacity: 0.4,
              position: "absolute",
              top: 50,
              left: "25%",
            }}
          />
          <div
            style={{
              width: 300,
              height: 300,
              background: "linear-gradient(to right, #ec4899, #a855f7)",
              borderRadius: "50%",
              filter: "blur(120px)",
              opacity: 0.4,
              position: "absolute",
              bottom: 50,
              right: "25%",
            }}
          />
        </div>

        {/* Content */}
        <h1
          style={{
            fontSize: 48,
            fontWeight: 800,
            background: "linear-gradient(to right, #38bdf8, #3b82f6, #a855f7)",
            backgroundClip: "text",
            color: "transparent",
            margin: 0,
          }}
        >
          {title}
        </h1>
        <p style={{ fontSize: 20, opacity: 0.8, marginTop: 10 }}>{subtitle}</p>
        <p style={{ fontSize: 18, fontWeight: "bold", marginTop: 5 }}>
          {author}
        </p>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
