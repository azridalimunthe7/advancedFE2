import { useState } from "react";

function VideoCard({ video, deleteVideo, updateVideo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(video.title);

  const handleSave = () => {
    updateVideo({
      ...video,
      title: newTitle,
    });
    setIsEditing(false);
  };

  return (
    <div
      className="
        bg-white 
        rounded-lg 
        p-4 
        border 
        shadow 
        hover:shadow-lg 
        hover:scale-[1.02] 
        transition 
        cursor-pointer

        /* RESPONSIVE */
        w-full
        max-w-[300px]        /* batas maksimal card */
        mx-auto              /* center di mobile */
      "
    >
      <img
        src={video.image}
        className="
          w-full 
          h-36 sm:h-40 md:h-44 
          object-cover 
          rounded-lg
        "
        alt={video.title}
      />

      {/* MODE VIEW */}
      {!isEditing && (
        <>
          <h3 className="text-base sm:text-lg font-semibold mt-3">
            {video.title}
          </h3>

          <p className="text-xs sm:text-sm text-gray-500">{video.instructor}</p>

          <div className="flex gap-2 sm:gap-3 mt-3 flex-wrap">
            <button
              onClick={() => deleteVideo(video.id)}
              className="
                px-2 sm:px-3 
                py-1 
                bg-red-500 
                text-white 
                rounded 
                text-xs sm:text-sm
                cursor-pointer
                hover:bg-red-600
              "
            >
              Delete
            </button>

            <button
              onClick={() => setIsEditing(true)}
              className="
                px-2 sm:px-3 
                py-1 
                bg-blue-500 
                text-white 
                rounded 
                text-xs sm:text-sm
                cursor-pointer
                hover:bg-blue-600
              "
            >
              Edit
            </button>
          </div>
        </>
      )}

      {/* MODE EDIT */}
      {isEditing && (
        <div className="mt-3">
          <input
            type="text"
            className="border p-2 rounded w-full text-sm"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />

          <div className="flex gap-2 sm:gap-3 mt-3 flex-wrap">
            <button
              onClick={handleSave}
              className="
                px-3 py-1 
                bg-green-600 
                text-white 
                rounded 
                text-sm
                cursor-pointer
                hover:bg-green-700
              "
            >
              Save
            </button>

            <button
              onClick={() => {
                setIsEditing(false);
                setNewTitle(video.title);
              }}
              className="
                px-3 py-1 
                bg-gray-400 
                text-white 
                rounded 
                text-sm
                cursor-pointer
                hover:bg-gray-500
              "
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default VideoCard;
