import video from "../assets/video.mp4";
function Video() {
  return (
    <div className="w-full h-full flex justify-center items-center relative">
        
            <video src={video} autoPlay muted loop className="w-full h-full object-cover" />
            <div className="absolute inset-0 z-10 pointer-events-none bg-black opacity-15 bg-black/80 backdrop-blur-md shadow-lg"></div>
    </div>
  );
}

export default Video;
