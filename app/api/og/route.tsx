import { ImageResponse } from "next/og";
// App router includes @vercel/og.

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const type = searchParams.get("type") || "";

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-end",
          backgroundColor: "black",
          backgroundImage:
            "radial-gradient(circle at center, #333 0%, #000 100%)",
          padding: "40px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center", // Aligns text items vertically centered
            justifyContent: "flex-start",
            gap: "10px", // Adds space between the name and type
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 60,
              fontStyle: "normal",
              color: "#F5F5DC",
              lineHeight: 1.2,
              whiteSpace: "pre-wrap",
              textAlign: "left",
            }}
          >
            <b>Yug Bhanushali {type ? "-" : ""}</b>
          </div>
          <div
            style={{
              fontSize: 60,
              fontStyle: "normal",
              color: "#F5F5DC",
              lineHeight: 1.2,
              whiteSpace: "pre-wrap",
            }}
          >
            {type}
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
