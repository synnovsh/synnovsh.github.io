
import React from "react";

function VideoPreviewComponent(props) {
  return (
    <video style={{ width: "100%", height: "100%" }} autoPlay loop muted>
      <source type="video/mp4" src={props.src} />
    </video>
  );
}

export default {
  type: "object",
  name: "video",
  title: "Video",
  fields: [
    {
      type: "string",
      name: "title",
      title: "Title",
      description: "A short title for the video for readability"
    },
    {
      type: "file",
      name: "source",
      title: "Video source"
    },
  ],
  preview: {
    select: {
      title: "title",
      sourceUrl: "source.asset.url",
    },
    prepare(props) {
      return {
        title: props.title,
        media: <VideoPreviewComponent src={props.sourceUrl} />
      };
    }
  }
};