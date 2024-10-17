import Image from 'next/image';


export default function Home() {
  return (
    <div>
      <section className="h-svh bg-gray-800 flex justify-evenly" >
        <div className='flex justify-center text-center items-center'>
          <Image src="/Profile Pic.jpg" alt="Profile Pic" width={300} height={300}
          className="rounded-full object-cover ml-10" />
        </div>

        <div className='flex justify-center text-center items-center mr-10 '>
          <h1 className='text-white text-4xl'>Hello I Am <br />
          
          <span 
          className='text-pink-800 font-bold'>Ahmed Ali
          </span><p className='text-sm text-gray-600'>I am Ahmed Ali I am a Full Stack Developer And I am learning cloud native Gen AI</p></h1><br />
          
        </div>
      </section>
    </div>
  );
}
