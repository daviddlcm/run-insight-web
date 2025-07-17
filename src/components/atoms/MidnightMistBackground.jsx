import React from "react";

const MidnightMistBackground = () => (
  <div
    className="absolute inset-0 z-0"
    style={{
      backgroundImage: `
        radial-gradient(circle at 50% 100%, rgba(253, 224, 71, 0.4) 0%, transparent 60%),
        radial-gradient(circle at 50% 100%, rgba(251, 191, 36, 0.4) 0%, transparent 70%),
        radial-gradient(circle at 50% 100%, rgba(244, 114, 182, 0.5) 0%, transparent 80%)
      `,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    }}
  />
);

export default MidnightMistBackground; 