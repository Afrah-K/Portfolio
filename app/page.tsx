import { ProjectPosts } from './components/ProjectPosts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Afrah Kausar
      </h1>
      <p className="mb-4">
        {`Hello there! I'm an AI Engineer and a researcher. Being a polymath makes me curious about everything; reading, writing, speaking, solving math and ofc, programming.  
        Apart from that, I take on freelancing AI projects, create content and work on my business. 
       `}
      </p>
      <p> { `Once in a while, I have a big brain moment. Feel free to reach out if you're up for some mental sparring. `}</p>
      <div className="my-8">
        <ProjectPosts />
      </div>
    </section>
  )
}
