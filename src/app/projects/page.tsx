import { ContactCta, EmptyCollection, PageIntro } from '@/components/layout';
import { ProjectGallery } from '@/components/project-gallery';
import { projects } from '@/data/content';
import { pageMetadata } from '@/lib/seo';
export const metadata=pageMetadata('Projects','Selected projects and the thinking behind the work by Habibullah.','/projects',projects.length>0);
export default function Projects(){return <><PageIntro label="THE WORK / THE THINKING / THE DETAILS" title="Ideas, given" accent="form." description="A space for projects, thoughtful decisions, and the process of making something real."/><section className="wrap collection-section">{projects.length?<ProjectGallery items={projects}/>:<EmptyCollection type="projects"/>}</section><ContactCta/></>}
