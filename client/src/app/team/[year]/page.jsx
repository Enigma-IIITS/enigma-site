'use client'
import PersonCard from '@/components/PersonCard'
import DomainTeam from '@/components/Team/DomainTeam'

export default function Page({ params }) {
    return (
        <section>
            <div className="container px-6 py-10 mx-auto my-10 bg-zinc-950  sm:py-32">
                <h1 className="text-2xl font-bold text-center capitalize   tracking-tight text-cyan-500 sm:text-5xl ">
                    Meet our Leads
                </h1>

                <p className="max-w-2xl mx-auto my-6 text-center text-gray-300">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Illo incidunt ex placeat modi magni quia error alias,
                    adipisci rem similique, at omnis eligendi optio eos harum.
                </p>

                <div className=" flex justify-around items-center gap-5 flex-wrap mt-10">
                    <PersonCard
                        imgSrc={'https://github.com/shadcn.png'}
                        name={'Person'}
                        role={'lead'}
                    />
                    <PersonCard
                        imgSrc={'https://github.com/shadcn.png'}
                        name={'Person'}
                        role={'Co-lead'}
                    />
                </div>
            </div>
            <DomainTeam left={false} DomainName={'Cyber Security'} />
            <DomainTeam left={true} DomainName={'Computer Graphics'} />
            <DomainTeam left={false} DomainName={'System Software'} />
            <DomainTeam left={true} DomainName={'Distributed Systems'} />
            <DomainTeam left={false} DomainName={'Public Relations'} />
        </section>
    )
}
