import Head from 'next/head'
import SocialLink from '@components/SocialLink'
import ExternalLink from '@components/ExternalLink';
import Footer from '@components/Footer'
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>LorenRD</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="h-2 bg-blue-300" />
      <div className="text-lg px-7">
        <main>
          <img src="/profile.jpg" className="rounded-full max-h-80 mx-auto my-20" alt="LorenRD" />
          <div className="text-center">
            <h1 className="text-3xl">
              Hey! I'm{" "}
              <strong>
                <ExternalLink href="https://twitter.com/LorenRD">
                  @LorenRD
                </ExternalLink>{" "}
                (Lorenzo Rondán)
              </strong>{" "}
              👋
            </h1>
            <div className="my-3">💻 I'm a Software Engineer and MSc Degree in Data and Cloud.</div>
            <div className="my-3">
              🌍 I'm from Seville currently living in Barcelona (Spain).
            </div>
            <div className="my-3">
              🤖 I'm interested in Software Engineering and Machine Learning, but mainly I love to solve challenging real world problems and learn new things.
            </div>
            <div className="my-3">
              🔭Feel free to follow me at LinkedIn or Twitter where I share my thoughts and experiences.
            </div>
          </div>
        </main>
      </div>
      <div className="text-center flex justify-center flex-wrap text-2xl m-4 mb-4">
        <SocialLink
          href="https://twitter.com/lorenrd"
          title="Twitter"
          icon={faTwitter}
        />
        <SocialLink
          href="https://github.com/lorenrd"
          title="GitHub"
          icon={faGithub}
        />
        <SocialLink
          href="mailto:lrondan95@gmail.com"
          title="Email"
          icon={faEnvelope}
        />
        <SocialLink
          href="https://linkedin.com/in/lrondan"
          title="LinkedIn"
          icon={faLinkedin}
        />
      </div>
      <Footer />
      <!-- Google tag (gtag.js) -->
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-GC5P1QB9V8"></script>
      <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-GC5P1QB9V8');
      </script>
    </div>
  )
}
