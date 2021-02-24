import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
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

                    <p>Spotify</p> 
                </div>

            </div>
    </div>
  )
}
