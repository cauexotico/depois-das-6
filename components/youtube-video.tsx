import Image from 'next/image'

const YoutubeVideo = ({ video }) => {
  console.log(video)
  return (
    <div className="flex flex-row mt-1">
      <Image
        src={video.snippet.thumbnails.default.url}
        width={video.snippet.thumbnails.default.width}
        height={video.snippet.thumbnails.default.height} />

      <p className="pl-2 font-semibold">
        {video.snippet.title}
      </p>
    </div>
  )
}

export default YoutubeVideo;