// You can add your edits here:
const edits = [
  {
    type: "image",
    file: "edits/edit1.jpg",
    caption: "GRWM - Pink outfit 💕 (May 29)"
  },
  {
    type: "video",
    file: "edits/edit2.mp4",
    caption: "Quick braid tutorial 🎥 (May 28)"
  },
  {
    type: "image",
    file: "edits/edit3.jpg",
    caption: "Makeup closeup 💄 (May 27)"
  }
];

const gallery = document.getElementById("edit-gallery");

edits.forEach(edit => {
  const card = document.createElement("div");
  card.className = "edit-card";

  if (edit.type === "image") {
    const img = document.createElement("img");
    img.src = edit.file;
    img.alt = "Edit";
    card.appendChild(img);
  } else if (edit.type === "video") {
    const video = document.createElement("video");
    video.src = edit.file;
    video.controls = true;
    card.appendChild(video);
  }

  const caption = document.createElement("p");
  caption.textContent = edit.caption;
  card.appendChild(caption);

  gallery.appendChild(card);
});
