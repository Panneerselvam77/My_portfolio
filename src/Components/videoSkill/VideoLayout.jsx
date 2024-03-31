import React from "react";
import "./videoLayout.css";
const videos = [
  {
    url: "https://www.youtube.com/embed/-oM_txiAXRs?si=1TD5UgpZ2YcJztEb",
  },
  {
    url: "https://www.youtube.com/embed/mondE5gl0Rs?si=BHxpzSoKIDp7PH-o&amp;start=3",
  },
  {
    url: "https://www.youtube.com/embed/broEJecJnrA?si=oRGvJR5n6lj4spxD",
  },
  {
    url: "https://www.youtube.com/embed/JjC3zNlxE1k?si=AeyK4nlmBSEiXWXa",
  },
  {
    url: "https://www.youtube.com/embed/Fa2sT2YtzGM?si=3TX3EvnHY4oDa753",
  },
  {
    url: "https://www.youtube.com/embed/P0MMe9Lndno?si=XSCxyN3bC2Fao_Vg",
  },
  {
    url: "https://www.youtube.com/embed/5K3iLtC-AR4?si=Fq7zswMNONgYTVg_",
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

// const videos = [
//   {
//     url: `<iframe width="560" height="315" src="https://www.youtube.com/embed/-oM_txiAXRs?si=1TD5UgpZ2YcJztEb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
//   },
//   {
//     url: `<iframe width="560" height="315" src="https://www.youtube.com/embed/mondE5gl0Rs?si=BHxpzSoKIDp7PH-o&amp;start=3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
//   },
//   {
//     url: `<iframe width="560" height="315" src="https://www.youtube.com/embed/broEJecJnrA?si=oRGvJR5n6lj4spxD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
//   },
//   {
//     url: `<iframe width="560" height="315" src="https://www.youtube.com/embed/JjC3zNlxE1k?si=AeyK4nlmBSEiXWXa" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
//   },
//   {
//     url: `<iframe width="560" height="315" src="https://www.youtube.com/embed/Fa2sT2YtzGM?si=3TX3EvnHY4oDa753" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
//   },
//   {
//     url: `<iframe width="560" height="315" src="https://www.youtube.com/embed/P0MMe9Lndno?si=XSCxyN3bC2Fao_Vg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
//   },
// ];
