import Image from 'next/image'

const YoutubeVideo = ({ video }) => {
  console.log(video)
  return (
    <a target="_blank" href={"https://www.youtube.com/watch?v=" + video.id.videoId }>
      <div className="flex flex-row mt-1">
        <Image
          src={video.snippet.thumbnails.default.url}
          width={video.snippet.thumbnails.default.width}
          height={video.snippet.thumbnails.default.height} />

        <p className="pl-2 font-semibold">
          {video.snippet.title}
        </p>
      </div>
    </a>
  )
}

export default YoutubeVideo;