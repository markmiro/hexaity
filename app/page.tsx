import Image from "next/image";
import { metadata } from "./layout";

export default function Home() {
  const bgUrl = "/bg.jpg";
  const avatarSize = 60;

  return (
    <>
      {/* <Image
        src={bgUrl}
        loading="lazy"
        className="fixed top-0 left-0 h-full object-cover bg-black pointer-events-none"
        width={1920}
        height={1080}
        alt=""
        placeholder="blur"
        blurDataURL={`/_next/image?url=${bgUrl}&w=16&q=50`}
      /> */}
      <main className="z-0 relative flex min-h-screen flex-col items-center justify-between pt-8 px-8 md:px-24 text-white">
        <header className="flex flex-col items-center">
          <Image
            src="/logo.png"
            width={97}
            height={68}
            alt={metadata.title}
            priority
          />
        </header>
        <p className="text-[3vw] pb-2 text-center">
          fullstack web development, product discovery,
          <br />
          rapid prototyping, WebGL/GLSL, Unity
        </p>
        <div>
          <p className="text-xs opacity-80 text-center mb-3">
            Bringing experience from:
          </p>
          <img src="/logos.svg" alt="logos" className="opacity-50" />
        </div>
        <div className="max-w-[600px] divide-y divide-white/10 *:p-4 md:*:p-8 bg-white/10 backdrop-blur-md rounded-t-xl">
          <div className="flex flex-col sm:flex-row gap-4 text-sm">
            <Image
              src="/mark.png"
              width={avatarSize}
              height={avatarSize}
              alt="Mark Miro"
              className="bg-white/10 shrink-0 rounded-full grayscale self-start"
            />
            <p>
              Mark is a creative JavaScript and React developer / designer based
              in Sacramento, California. He’s worked for Bay Area companies like
              Thumbtack and TrustToken (now Archblock).
            </p>
          </div>
          <div className="flex flex-col-reverse gap-4 text-sm sm:flex-row-reverse text-right items-end">
            <Image
              src="/george.jpeg"
              width={avatarSize}
              height={avatarSize}
              alt="George Michel"
              className="bg-white/10 shrink-0 grow-0 rounded-full grayscale"
            />
            <p>
              George enjoys building things, including web and mobile
              applications, 3D art, and interactive entertainment experiments.
              Big fan of expressive, elegant code.
            </p>
          </div>
          <p className="text-center leading-8">
            contact [at] hexaity [dot] com
          </p>
          {/* 
          <p className="text-md leading-snug">
            Hexaity Consulting started out as a joke. But rest assured that it
            is a legitimate and serious business.
          </p> */}
          <a
            className="group block text-[9px] text-white/50 cursor-pointer"
            href="https://en.wikipedia.org/wiki/Haecceity"
            target="_blank"
          >
            Haecceity (/hɛkˈsiːɪti, hiːk-/; from the Latin haecceitas, which
            translates as &ldquo;thisness&rdquo;) is a term from medieval
            scholastic philosophy, first coined by followers of Duns Scotus to
            denote a concept that he seems to have originated: the irreducible
            determination of a thing that makes it this particular thing.
            Haecceity is a person’s or object’s thisness
            <div className="text-xs text-white/80 pt-2 group-hover:underline underline-offset-2 decoration-white/20">
              See Wikipedia article →
            </div>
          </a>
        </div>
      </main>
    </>
  );
}
