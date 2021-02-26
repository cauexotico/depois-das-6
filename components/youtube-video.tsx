import Image from 'next/image'

const YoutubeVideo = ({video}) => {
  return (
    <>
        <div key={video.id.videoId}>
            <Image
                src={video.snippet.thumbnails.default.url}
                width={video.snippet.thumbnails.default.width}
                height={video.snippet.thumbnails.default.height}/>

            <p>
                {video.snippet.title}
            </p>
        </div>
    </>
  )
}

export default YoutubeVideo;