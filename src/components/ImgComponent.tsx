import Image from 'next/image';

export default function SideImage() {
    return (
        <div className="h-screen">
        {/* Use the imported image */}
        <Image
          src="/images/redditimg.png" // Path relative to the "public" directory
          alt="My Image"
          width={145}
          height={400}
        />
        
      </div>
    )
  }
  