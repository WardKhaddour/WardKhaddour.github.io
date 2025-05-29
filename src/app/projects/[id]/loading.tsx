export default function Loading() {
  return (
    <main className='py-10 animate-pulse'>
      <div className='container px-10'>
        <div className='max-w-4xl'>
          {/* Title Skeleton */}
          <div className='h-10 w-3/4 bg-gray-200 dark:bg-gray-700 rounded mb-6'></div>

          {/* Image Skeleton */}
          <div className='aspect-video w-full mb-8 rounded-xl overflow-hidden bg-gray-200 dark:bg-gray-700'></div>

          {/* Tags Skeleton */}
          <div className='flex flex-wrap gap-4 mb-8'>
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className='h-8 w-20 bg-gray-200 dark:bg-gray-700 rounded-full'
              ></div>
            ))}
          </div>

          {/* Description Skeleton */}
          <div className='space-y-4 mb-8'>
            <div className='h-4 w-full bg-gray-200 dark:bg-gray-700 rounded'></div>
            <div className='h-4 w-5/6 bg-gray-200 dark:bg-gray-700 rounded'></div>
            <div className='h-4 w-4/6 bg-gray-200 dark:bg-gray-700 rounded'></div>
            <div className='h-4 w-3/4 bg-gray-200 dark:bg-gray-700 rounded'></div>
          </div>

          {/* Details Paragraphs Skeleton */}
          <div className='space-y-4 mt-6'>
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className='space-y-2'
              >
                <div className='h-4 w-full bg-gray-200 dark:bg-gray-700 rounded'></div>
                <div className='h-4 w-5/6 bg-gray-200 dark:bg-gray-700 rounded'></div>
              </div>
            ))}
          </div>

          {/* Buttons Skeleton */}
          <div className='flex gap-4 mt-8'>
            <div className='h-12 w-32 bg-gray-200 dark:bg-gray-700 rounded-lg'></div>
            <div className='h-12 w-32 bg-gray-200 dark:bg-gray-700 rounded-lg'></div>
          </div>
        </div>
      </div>
    </main>
  )
}
