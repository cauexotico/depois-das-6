import Head from 'next/head'
import Image from 'next/image'

export default function Home({videos}) {
  return (
    <div className="bg-primary">
			<Head>
					<title>Depois das 6 | Poadcast</title>
					<link rel="icon" href="/favicon.ico" />
			</Head>


			<div className="flex flex-col text-center items-center py-2">
                <div>
                    <Image
                        src="/logo-depois-das-6.png"
                        alt="Depois das 6"
                        title="Depois das 6"
                        width="320" height="320"/>
                </div>

                <div className="bg-white w-1/3 mt-2">
                    <p>Youtube</p>
                    {videos.items.map((video) => (
                        video.id.kind == 'youtube#video' &&
                        <div key={video.id.videoId}>
                            <Image
                                src={video.snippet.thumbnails.default.url}
                                width={video.snippet.thumbnails.default.width}
                                height={video.snippet.thumbnails.default.height}/>

                            <p>
                                {video.snippet.title}
                            </p>
                        </div>
                    ))}

                    <p>Spotify</p> 
                </div>

            </div>
    </div>
  )
}

export async function getStaticProps() {
    const apiUrl = `https://www.googleapis.com/youtube/v3/search?key=${process.env.YOUTUBE_API_KEY}&channelId=UCZBlguiAcGZtfiMQ_-UvL1w&part=snippet,id&order=date`
    const res = await fetch(apiUrl)
    const videos = await res.json()
  
    if (!videos) {
      return {
        notFound: true,
      }
    }
  
    return {
      props: {
        videos,
      },
      //Searches for new videos every 30 minutes
      revalidate: 1800 
    }
}
