import React from "react";
import "./videoLayout.css";
const videos = [
  {
    url: "https://www.youtube.com/embed/mondE5gl0Rs?si=MjUxqKdzpzKOsXkn", //
  },
  {
    url: "https://www.youtube.com/embed/-oM_txiAXRs?si=zrkwQFqVUYWTkVOi", //
  },
  {
    url: "https://www.youtube.com/embed/broEJecJnrA?si=LVW9xyMGmEp_Blso", //
  },
  {
    url: "https://www.youtube.com/embed/JjC3zNlxE1k?si=4pfPhqhseFCYKB9z", // Roush
  },
  {
    url: "https://www.youtube.com/embed/Fa2sT2YtzGM?si=r-0cG7OR9qvmrE63", // sizing
  },
  {
    url: "https://www.youtube.com/embed/P0MMe9Lndno?si=fGFHDduFlTPNgRIC", // Attribute
  },
  {
    url: "https://www.youtube.com/embed/qWGob0Mg11A?si=4liVtXcN6wjrmMbs", // Thought work
  },
  {
    url: "https://www.youtube.com/embed/2oQYkhg25ig?si=LMqCzPi8C4MDfL5S", // reference
  },
  {
    url: "https://www.youtube.com/embed/5K3iLtC-AR4?si=qzy8bX1qZ4bbpJ8w", // Fun cut
  },
];

function VideoLayout() {
  return (
    <div className="video-gallery">
      {videos.map((video, index) => (
        <div className="video-item" key={index}>
          <iframe
            width="100%"
            height="100%"
            src={video.url}
            title={video.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      ))}
    </div>
  );
}

export default VideoLayout;

/* const videos = [
{
  url: "https://www.youtube.com/embed/mondE5gl0Rs?si=MjUxqKdzpzKOsXkn", //
},
{
  url: "https://www.youtube.com/embed/-oM_txiAXRs?si=zrkwQFqVUYWTkVOi", //
}, 
{
  url: "https://www.youtube.com/embed/broEJecJnrA?si=LVW9xyMGmEp_Blso", //
},
{
  url: "https://www.youtube.com/embed/JjC3zNlxE1k?si=4pfPhqhseFCYKB9z", // Roush
},
{
  url: "https://www.youtube.com/embed/Fa2sT2YtzGM?si=r-0cG7OR9qvmrE63", // sizing
},
{
  url: "https://www.youtube.com/embed/P0MMe9Lndno?si=fGFHDduFlTPNgRIC", // Attribute
},
{
  url: "https://www.youtube.com/embed/qWGob0Mg11A?si=4liVtXcN6wjrmMbs", // Thought work
},
{
  url: "https://www.youtube.com/embed/2oQYkhg25ig?si=LMqCzPi8C4MDfL5S", // reference
},
{
  url: "https://www.youtube.com/embed/5K3iLtC-AR4?si=qzy8bX1qZ4bbpJ8w", // Fun cut
},
{
  url: "https://youtube.com/shorts/mFTrPtKz89g?si=rzDtI8zSKA6A9XdH", // Dressberry perfume
},








];
 */
