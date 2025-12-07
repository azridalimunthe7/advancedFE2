import VideoCard from "./videoCard";

function VideoList({ videos, selectedCategory, deleteVideo, updateVideo }) {
  const filteredVideos =
    selectedCategory === "Semua Kelas"
      ? videos
      : videos.filter((video) => video.category === selectedCategory);

  return (
    <div
      className="
        grid 
        grid-cols-1
        xs:grid-cols-2
        sm:grid-cols-2 
        md:grid-cols-3 
        lg:grid-cols-4
        gap-4 sm:gap-6 
        px-4 sm:px-6 md:px-10 
        my-10
      "
    >
      {filteredVideos.map((video) => (
        <VideoCard
          key={video.id}
          video={video}
          deleteVideo={deleteVideo}
          updateVideo={updateVideo}
        />
      ))}
    </div>
  );
}

export default VideoList;
