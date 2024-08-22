import Image from "next/image";
import { metadata } from "./layout";

export default function Home() {
  const bgUrl = "/bg.jpg";
  return (
    <>
      <Image
        src={bgUrl}
        loading="lazy"
        className="fixed top-0 left-0 object-cover"
        width={1920}
        height={1080}
        alt=""
        placeholder="blur"
        blurDataURL={`/_next/image?url=${bgUrl}&w=16&q=50`}
      />
      <main className="z-0 relative flex min-h-screen flex-col items-center justify-between pt-8 px-8 md:px-24 text-white">
        <header className="flex flex-col items-center">
          <Image
            src="/logo.png"
            width={97}
            height={68}
            alt={metadata.title}
            priority
          />
          <div className="pt-3" />
          <p className="text-[11px] opacity-50 pb-2 text-center">
            fullstack web development, product discovery,
            <br />
            rapid prototyping, WebGL/GLSL, Unity
          </p>
        </header>
        <div className="max-w-[600px] divide-y divide-white/10 *:p-4 md:*:p-8 bg-white/10 backdrop-blur-md rounded-t-xl">
          <p className="text-md leading-snug">
            Mark Miro and George Michel started Hexaity Consulting out of a
            desire to bring about a new kind of consultancy. We were born out of
            Sacramento’s local rhizomatic milieu.
          </p>
          <p className="text-sm text-white/50">
            Haecceity (/hɛkˈsiːɪti, hiːk-/; from the Latin haecceitas, which
            translates as &ldquo;thisness&rdquo;) is a term from medieval
            scholastic philosophy, first coined by followers of Duns Scotus to
            denote a concept that he seems to have originated: the irreducible
            determination of a thing that makes it this particular thing.
            Haecceity is a person’s or object’s thisness
            {/* TODO: link to wikipedia */}
          </p>
          <p className="text-center leading-8">
            contact [at] hexaity [dot] com
          </p>
        </div>
      </main>
    </>
  );
}
