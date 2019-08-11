
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
      name: "caption",
      title: "Caption",
    },
    {
      type: "file",
      name: "source",
      title: "Video source"
    },
  ],
  preview: {
    select: {
      title: "caption",
      sourceUrl: "source.asset.url",
    },
    prepare(props) {
      return {
        title: props.caption,
        media: <VideoPreviewComponent src={props.sourceUrl} />
      };
    }
  }
};