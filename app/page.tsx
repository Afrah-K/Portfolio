import { ProjectPosts } from './components/ProjectPosts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-3xl font-semibold tracking-tighter deep-color">
      Hello! I'm Afrah, a Computer Engineer. 
      </h1>
      <p className="mb-4">
        {`And I like solving peoples problems. Maybe it comes from the fact that I'm the eldest daughter of an asian household or that I'm a polymath, which makes me curious about literally everything. 
       `}
      </p>
      <p className="mb-4">
        {`I'm currently building Bluer Labs, a software agency with a focus on AI for startups. I've worked on building ML algorithms and deep learning models, published a few papers and currently working with LLMs. I haven't made it (yet) but I'm going to use this place to document my journey.    
  
       `}
      </p>
      <p> { `Feel free to reach out if you want to have a mentally sparring conversation.`}</p>
      <div className="my-8">
        <ProjectPosts />
      </div>
    </section>
  )
}
