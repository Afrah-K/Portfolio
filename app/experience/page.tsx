// app/page.tsx
export default function Page() {
    return (
      <section className="p-6">
        <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Work Experience</h1>
        
        <div className="mb-8">
          <h2 className="title font-semibold text-l tracking-tighter flex items-center">
            Riko Labs <span className="ml-2 text-neutral-600 dark:text-neutral-400">(July 2024)</span>
          </h2>
          <p className="mb-4">Building AI Software company. Working with AI Startups independently</p>
        </div>
        
        <div className="mb-8">
          <h2 className="title font-semibold text-l tracking-tighter flex items-center">
            AI Engineer at Startup <span className="ml-2 text-neutral-600 dark:text-neutral-400">(March 2024)</span>
          </h2>
          <p className="mb-4">Did everything that comes with a startup + data analysis of e-commerce websites (basically less of a job title, more of salesy stuff).</p>
        </div>
        
        <div className="mb-8">
          <h2 className="title font-semibold text-l tracking-tighter flex items-center">
            AWS/Devtown Internships <span className="ml-2 text-neutral-600 dark:text-neutral-400">(May 2023)</span>
          </h2>
          <p className="mb-4">AWS cloud-based services and Dev Town web development.</p>
        </div>
        
        <div className="mb-8">
          <h2 className="title font-semibold text-l tracking-tighter flex items-center">
            Neuropal Internship <span className="ml-2 text-neutral-600 dark:text-neutral-400">(October 2023)</span>
          </h2>
          <p className="mb-4">Created a music recommendation system based on emotions.</p>
        </div>
        
        <div className="mb-8">
          <h2 className="title font-semibold text-l tracking-tighter flex items-center">
            Samsung Innovation Campus <span className="ml-2 text-neutral-600 dark:text-neutral-400">(March 2023)</span>
          </h2>
          <p className="mb-4">Worked as a team on Sentiment Analysis for Twitter Tweets.</p>
        </div>
        
        <div className="mb-8">
          <h2 className="title font-semibold text-l tracking-tighter flex items-center">
            Sales at BrightChamps <span className="ml-2 text-neutral-600 dark:text-neutral-400">(May 2020)</span>
          </h2>
          <p className="mb-4">My first 'job' out of high school, contacted students for an ed-tech startup and recruited them for a bootcamp, ended up with 200+ students signed up for the first coding session.</p>
        </div>
      </section>
    );
  }
  