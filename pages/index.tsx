import Head from 'next/head'
import Image from 'next/image'
import YoutubeVideo from '../components/youtube-video'

export default function Home({ videos }) {

  return (
    <div className="bg-primary">
      <Head>
        <title>Depois das 6 | Poadcast</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <div className="flex flex-col text-center">
        <div>
          <Image
            src="/logo-depois-das-6.png"
            alt="Depois das 6"
            title="Depois das 6"
            width="320"
            height="320" />
        </div>
      </div>

      <div className="flex flex-col items-center py-2">
        
        <div className="flex lg:flex-row flex-col justify-between bg-white lg:w-3/4 md:w-2/4 w-11/12 rounded shadow-xl p-4">
          
          <div>
            <p className="text-center text-xl font-bold">Youtube</p>
              {videos.items.map((video) => (
              video.id.kind == 'youtube#video' &&
              <div key={video.id.videoId}>
                <YoutubeVideo video={video} />
              </div>
            ))}
          </div>

          <div>
            <p className="text-center text-xl font-bold">Spotify</p>
              {videos.items.map((video) => (
              video.id.kind == 'youtube#video' &&
              <div key={video.id.videoId}>
                <YoutubeVideo video={video} />
              </div>
            ))}
          </div>

          

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
