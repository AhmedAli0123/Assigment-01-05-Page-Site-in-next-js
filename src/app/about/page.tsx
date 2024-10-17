import Image from "next/image"

export default function About(){
    return(   
    <div className="bg-yellow-700 h-svh">
        <div className="flex justify-center items-center text-center pt-[50px] text-3xl font-bold">
            <h1>About Me</h1>
        </div>
        <section className=" flex justify-between pt-[50px]">

        <div className='flex justify-center text-center items-center'>
          <Image src="/Profile Pic.jpg" alt="Profile Pic" width={300} height={300}
            className="rounded-full object-cover ml-10" />
        </div>

        <div className="flex justify-center text-center items-center text-sm">
            <p>I am a student passionate about both front-end and back-end development. <br /> As part of the Governor&aposs 
                Initiative for Generative AI and the Presidential Initiative for Cloud Native Generative AI, <br /> I am 
                learning the latest technologies in the field. I have experience with HTML, CSS, TypeScript, JavaScript, 
                Python, Next.js, React, and Tailwind CSS. <br /><br />

                I&aposve worked on several projects, building user-friendly websites and reliable backend systems. <br />I&aposm eager 
                to apply my skills to real-world projects and continue growing as a developer. <br /><br />
                
                enjoy solving problems through coding and am committed to delivering <br />quality work in every project 
                I take on.
                </p>
            
        </div>

        </section>
    </div>
    )
}