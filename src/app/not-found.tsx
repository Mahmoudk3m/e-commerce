import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="w-full flex-auto">
      <div className="container flex flex-col items-center">
        <h2 className=" text-2xl md:text-4xl font-bold">Page Not Found</h2>
        <Image
          width={800}
          height={400}
          src="/images/not-found.gif"
          className="my-16 aspect-video rounded-lg"
          alt="not found image"
          unoptimized
        />
        <Link className="text-lg md:text-2xl p-4 bg-secondary-50 rounded-lg" href="/">
          Return To Home
        </Link>
      </div>
    </main>
  );
}
