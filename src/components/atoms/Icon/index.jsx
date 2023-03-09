import React from "react";

export const Icon = (props) => {
  if (props.type === "youtube") {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
        <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" />
      </svg>
    );
  }

  if (props.type === "search") {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
        <path d="M416 208c0 45.9-14.9 88.3-40 122.7l126.6 126.7c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0s208 93.1 208 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
      </svg>
    );
  }

  if (props.type === "mic") {
    return (
      <svg
        viewBox="0 0 24 24"
        className="style-scope yt-icon"
        style={{
          pointerEvents: "none",
          display: "block",
          width: "25px",
          height: "100%",
        }}
        {...props}
      >
        <g className="style-scope yt-icon">
          <path
            d="M12 3c-1.66 0-3 1.37-3 3.07v5.86c0 1.7 1.34 3.07 3 3.07s3-1.37 3-3.07V6.07C15 4.37 13.66 3 12 3Zm6.5 9h-1c0 3.03-2.47 5.5-5.5 5.5A5.51 5.51 0 0 1 6.5 12h-1c0 3.24 2.39 5.93 5.5 6.41V21h2v-2.59c3.11-.48 5.5-3.17 5.5-6.41Z"
            className="style-scope yt-icon"
          />
        </g>
      </svg>
    );
  }

  if (props.type === "audio") {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
        <path d="M176 0c-53 0-96 43-96 96v160c0 53 43 96 96 96s96-43 96-96V96c0-53-43-96-96-96zM48 216c0-13.3-10.7-24-24-24S0 202.7 0 216v40c0 89.1 66.2 162.7 152 174.4V464h-48c-13.3 0-24 10.7-24 24s10.7 24 24 24h144c13.3 0 24-10.7 24-24s-10.7-24-24-24h-48v-33.6c85.8-11.7 152-85.3 152-174.4v-40c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 70.7-57.3 128-128 128S48 326.7 48 256v-40z" />
      </svg>
    );
  }

  if (props.type === "video") {
    return (
      <svg
        viewBox="0 0 24 24"
        className="style-scope yt-icon"
        style={{
          pointerEvents: "none",
          display: "block",
          width: "20px",
          height: "100%",
        }}
        {...props}
      >
        <g className="style-scope yt-icon">
          <path
            d="M14 13h-3v3H9v-3H6v-2h3V8h2v3h3v2zm3-7H3v12h14v-6.39l4 1.83V8.56l-4 1.83V6m1-1v3.83L22 7v8l-4-1.83V19H2V5h16z"
            className="style-scope yt-icon"
          />
        </g>
      </svg>
    );
  }

  if (props.type === "bell") {
    return (
      <svg
        viewBox="0 0 24 24"
        className="style-scope yt-icon"
        style={{
          pointerEvents: "none",
          display: "block",
          width: "20px",
          height: "100%",
        }}
        {...props}
      >
        <g className="style-scope yt-icon">
          <path
            d="M10 20h4c0 1.1-.9 2-2 2s-2-.9-2-2zm10-2.65V19H4v-1.65l2-1.88v-5.15C6 7.4 7.56 5.1 10 4.34v-.38c0-1.42 1.49-2.5 2.99-1.76.65.32 1.01 1.03 1.01 1.76v.39c2.44.75 4 3.06 4 5.98v5.15l2 1.87zm-1 .42-2-1.88v-5.47c0-2.47-1.19-4.36-3.13-5.1-1.26-.53-2.64-.5-3.84.03C8.15 6.11 7 7.99 7 10.42v5.47l-2 1.88V18h14v-.23z"
            className="style-scope yt-icon"
          />
        </g>
      </svg>
    );
  }

  if (props.type === "hamburger") {
    return (
      <div style={{ width: props.width }}>
        <div
          style={{
            borderBottom: "1.5px solid black",
            backgroundColor: "black",
            marginBottom: "6px",
          }}
        ></div>
        <div
          style={{
            borderBottom: "1.5px solid black",
            backgroundColor: "black",
            marginBottom: "6px",
          }}
        ></div>
        <div
          style={{
            borderBottom: "1.5px solid black",
            backgroundColor: "black",
          }}
        ></div>
      </div>
    );
  }

  if (props.type === "home") {
    return (
      <svg
        viewBox="0 0 24 24"
        className="style-scope yt-icon"
        style={{
          pointerEvents: "none",
          display: "block",
          width: "30px",
          height: "100%",
        }}
        {...props}
      >
        <g className="style-scope yt-icon">
          <path
            d="M4 10v11h6v-6h4v6h6V10l-8-7Z"
            className="style-scope yt-icon"
          />
        </g>
      </svg>
    );
  }

  if (props.type === "short-video") {
    return (
      <svg
        viewBox="0 0 24 24"
        className="style-scope yt-icon"
        style={{
          pointerEvents: "none",
          display: "block",
          width: "30px",
          height: "100%",
        }}
        {...props}
      >
        <g className="style-scope yt-icon">
          <path
            d="M10 14.65v-5.3L15 12l-5 2.65zm7.77-4.33-1.2-.5L18 9.06c1.84-.96 2.53-3.23 1.56-5.06s-3.24-2.53-5.07-1.56L6 6.94a3.744 3.744 0 0 0-2 3.49c.07 1.42.93 2.67 2.22 3.25.03.01 1.2.5 1.2.5L6 14.93a3.751 3.751 0 0 0 3.51 6.63l8.5-4.5A3.736 3.736 0 0 0 20 13.57a3.762 3.762 0 0 0-2.23-3.25zm-.23 5.86-8.5 4.5c-1.34.71-3.01.2-3.72-1.14-.71-1.34-.2-3.01 1.14-3.72l2.04-1.08v-1.21l-.69-.28-1.11-.46A2.751 2.751 0 0 1 5 10.38c-.05-1.06.52-2.06 1.46-2.56l8.5-4.5c1.34-.71 3.01-.2 3.72 1.14.71 1.34.2 3.01-1.14 3.72L15.5 9.26v1.21l1.8.74c.99.41 1.65 1.35 1.7 2.41.05 1.06-.52 2.06-1.46 2.56z"
            className="style-scope yt-icon"
          />
        </g>
      </svg>
    );
  }

  if (props.type === "subscription") {
    return (
      <svg
        viewBox="0 0 24 24"
        className="style-scope yt-icon"
        style={{
          pointerEvents: "none",
          display: "block",
          width: "30px",
          height: "100%",
        }}
        {...props}
      >
        <g className="style-scope yt-icon">
          <path
            d="M10 18v-6l5 3-5 3zm7-15H7v1h10V3zm3 3H4v1h16V6zm2 3H2v12h20V9zM3 10h18v10H3V10z"
            className="style-scope yt-icon"
          />
        </g>
      </svg>
    );
  }
  if (props.type === "library") {
    return (
      <svg
        viewBox="0 0 24 24"
        className="style-scope yt-icon"
        style={{
          pointerEvents: "none",
          display: "block",
          width: "30px",
          height: "100%",
        }}
        {...props}
      >
        <g className="style-scope yt-icon">
          <path
            d="m11 7 6 3.5-6 3.5V7zm7 13H4V6H3v15h15v-1zm3-2H6V3h15v15zM7 17h13V4H7v13z"
            className="style-scope yt-icon"
          />
        </g>
      </svg>
    );
  }

  if (props.type === "History") {
    return (
      <svg
        viewBox="0 0 24 24"
        className="style-scope yt-icon"
        style={{
          pointerEvents: "none",
          display: "block",
          width: "30px",
          height: "100%",
        }}
        {...props}
      >
        <g className="style-scope yt-icon">
          <path
            d="M14.97 16.95 10 13.87V7h2v5.76l4.03 2.49-1.06 1.7zM22 12c0 5.51-4.49 10-10 10S2 17.51 2 12h1c0 4.96 4.04 9 9 9s9-4.04 9-9-4.04-9-9-9C8.81 3 5.92 4.64 4.28 7.38c-.11.18-.22.37-.31.56L3.94 8H8v1H1.96V3h1v4.74c.04-.09.07-.17.11-.25.11-.22.23-.42.35-.63C5.22 3.86 8.51 2 12 2c5.51 0 10 4.49 10 10z"
            className="style-scope yt-icon"
          />
        </g>
      </svg>
    );
  }

  if (props.type === "yourvid") {
    return (
      <svg
        viewBox="0 0 24 24"
        className="style-scope yt-icon"
        style={{
          pointerEvents: "none",
          display: "block",
          width: "30px",
          height: "100%",
        }}
        {...props}
      >
        <g className="style-scope yt-icon">
          <path
            d="m10 8 6 4-6 4V8zm11-5v18H3V3h18zm-1 1H4v16h16V4z"
            className="style-scope yt-icon"
          />
        </g>
      </svg>
    );
  }

  if (props.type === "watchlater") {
    return (
      <svg
        viewBox="0 0 24 24"
        className="style-scope yt-icon"
        style={{
          pointerEvents: "none",
          display: "block",
          width: "30px",
          height: "100%",
        }}
        {...props}
      >
        <g className="style-scope yt-icon">
          <path
            d="M14.97 16.95 10 13.87V7h2v5.76l4.03 2.49-1.06 1.7zM12 3c-4.96 0-9 4.04-9 9s4.04 9 9 9 9-4.04 9-9-4.04-9-9-9m0-1c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2z"
            className="style-scope yt-icon"
          />
        </g>
      </svg>
    );
  }
  if (props.type === "likedvid") {
    return (
      <svg
        viewBox="0 0 24 24"
        className="style-scope yt-icon"
        style={{
          pointerEvents: "none",
          display: "block",
          width: "30px",
          height: "100%",
        }}
        {...props}
      >
        <g className="style-scope yt-icon">
          <path
            d="M18.77 11h-4.23l1.52-4.94C16.38 5.03 15.54 4 14.38 4c-.58 0-1.14.24-1.52.65L7 11H3v10h14.43c1.06 0 1.98-.67 2.19-1.61l1.34-6c.27-1.24-.78-2.39-2.19-2.39zM7 20H4v-8h3v8zm12.98-6.83-1.34 6c-.1.48-.61.83-1.21.83H8v-8.61l5.6-6.06c.19-.21.48-.33.78-.33.26 0 .5.11.63.3.07.1.15.26.09.47l-1.52 4.94-.4 1.29h5.58c.41 0 .8.17 1.03.46.13.15.26.4.19.71z"
            className="style-scope yt-icon"
          />
        </g>
      </svg>
    );
  }

  if (props.type === "next-arrow") {
    return (
      <svg
        viewBox="0 0 24 24"
        className="style-scope yt-icon"
        style={{
          pointerEvents: "none",
          display: "block",
          width: "20px",
          height: "100%",
        }}
        {...props}
      >
        <g className="style-scope yt-icon">
          <path
            d="m9.4 18.4-.7-.7 5.6-5.6-5.7-5.7.7-.7 6.4 6.4-6.3 6.3z"
            className="style-scope yt-icon"
          />
        </g>
      </svg>
    );
  }
  return <div>Icon</div>;
};
