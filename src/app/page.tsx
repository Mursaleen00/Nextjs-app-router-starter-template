import { components } from '@/constant/components';

export default function Home() {
  return (
    <div className='grid md:grid-cols-2 justify-items-center w-full'>
      {components.map((component, index) => (
        <main
          key={index}
          className='flex flex-col gap-y-10 p-6 w-full'
        >
          <div className='flex flex-col gap-y-3 w-full'>
            <h1 className='text-2xl font-bold'>{component.title}</h1>
            <div className='flex gap-x-3 w-full'>
              {component.component} {component.subComponent}
            </div>
          </div>
        </main>
      ))}
    </div>
  );
}
