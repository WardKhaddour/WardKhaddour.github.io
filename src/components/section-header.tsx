export function SectionHeader({ children }: { children: React.ReactNode }) {
  return (
    <h2 className='mx-auto mb-6 w-fit text-4xl font-bold md:text-5xl'>
      {children}
      <span className='bg-primary mx-auto mt-4 block h-1 w-1/3 rounded'></span>
    </h2>
  )
}
