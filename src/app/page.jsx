import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-blue-950 scroll-smooth">
      <Navbar/>

      <div className="relative pt-32 pb-24 px-4 overflow-hidden">
        <div className="relative max-w-4xl mx-auto text-center z-10">
          <h1 className="text-6xl md:text-7xl font-bold text-blue-100 mb-6">
            Move at the Speed of Thought
          </h1>
          <p className="text-xl md:text-2xl text-blue-200 font-light mb-8">
            An AI-powered scheduling assistant. Send emails, schedule meetings and make your work life organised!
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/signup">
              <button className="bg-blue-600 border-2 rounded-sm border-blue-500 text-white font-bold py-3 px-8 hover:bg-blue-700 transition-colors text-lg">
                Get Started Free
              </button>
            </Link>
            <Link href="/about">
              <button className="bg-blue-900 border-2 rounded-sm border-cyan-600 text-cyan-300 font-bold py-3 px-8 hover:bg-blue-800 transition-colors text-lg">
                Learn More about CHRONOS
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="relative px-4 pb-20">
        <div className="max-w-6xl mx-auto">

          <section className="mb-20">
            <h2 className="text-4xl font-bold text-blue-100 mb-12 text-center">App Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
              <div className="bg-blue-900 border-3 rounded-sm border-cyan-600 p-8 h-full flex flex-col">
                <h3 className="text-2xl font-bold text-blue-100 mb-3"> * Send Emails with AI</h3>
                <p className="text-blue-200 grow">
                  Draft your emails and send them instantly
                </p>
              </div>

              <div className="bg-blue-900 border-3 rounded-sm border-cyan-600 p-8 h-full flex flex-col">
                <h3 className="text-2xl font-bold text-blue-100 mb-3"> * Schedule Effortlessly</h3>
                <p className="text-blue-200 grow">
                  "Meeting tomorrow at 3pm" — done! Let AI handle calendar conflicts and scheduling logic.
                </p>
              </div>

              <div className="bg-blue-900 border-3 border-cyan-600 p-8 h-full rounded-sm flex flex-col">
                <h3 className="text-2xl font-bold text-blue-100 mb-3">* Natural Language</h3>
                <p className="text-blue-200 grow">
                  Talk to Chronos like a human assistant. There is nothing complex here.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-20">
            <div className="relative">
              <div className="relative border-3 border-transparent  p-6 text-center overflow-hidden"
                >
                <div className="relative z-10">
                  <div className="text-5xl mb-3 animate-bounce text-pink-200"><i class="ri-zzz-line"></i></div>
                  <h2 className="text-3xl md:text-4xl font-bold bg-linear-to-r from-pink-300 via-purple-300 to-pink-300 bg-clip-text text-transparent mb-2">
                    Tired? Let's Take a Break!
                  </h2>
                  <p className="text-base md:text-lg text-purple-100 mb-5 max-w-2xl mx-auto">
                    Play a quick game and refresh your mind!
                  </p>
                  <a 
                    href="https://spongebob-tictactoegame.netlify.app/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block text-white font-bold py-2 px-8  rounded-sm border-2 border-pink-400 transition-all transform hover:scale-105 text-base shadow-lg"
                    style={{
                      boxShadow: '0 0 30px rgba(236, 72, 153, 0.8), inset 0 0 20px rgba(236, 72, 153, 0.3)'
                    }}
                  >
                   <i className="ri-gamepad-line"></i> Play a Tic Tac Toe Game?
                  </a>
                </div>
              </div>
            </div>
          </section>


          <section className="mb-20">
            <h2 className="text-4xl font-bold text-blue-100 mb-12 text-center">3 Simple Steps</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              <div className="text-center">
                <div className="text-5xl mb-4 text-cyan-300">1</div>
                <h3 className="text-2xl font-bold text-blue-100 mb-3">Connect Your Accounts</h3>
                <p className="text-blue-200">
                  Link your Gmail and Google Calendar. Chronos securely accesses only what it needs.
                </p>
              </div>

              <div className="text-center">
                <div className="text-5xl mb-4 text-cyan-300">2</div>
                <h3 className="text-2xl font-bold text-blue-100 mb-3">Describe What You Want</h3>
                <p className="text-blue-200">
                  Like send an email to ansh@example.com for a meeting at 5pm tomorrow
                </p>
              </div>

              <div className="text-center">
                <div className="text-5xl mb-4 text-cyan-300">3</div>
                <h3 className="text-2xl font-bold text-blue-100 mb-3">Done! Automatically</h3>
                <p className="text-blue-200">
                  Chronos handles emails and calendar events. You focus on what matters most.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-20">
            <h2 className="text-4xl font-bold text-blue-100 mb-12 text-center">Chronos is completely free</h2>
            <div className="max-w-xl mx-auto rounded-sm bg-blue-900 border-3 border-cyan-600 p-8 text-center">
              <p className="text-6xl font-bold text-blue-400 mb-6">$0</p>
              <p className="text-xl text-blue-200 mb-8">
                No credit card required. No hidden fees. Forever free.
              </p>
              <Link href="/signup">
                <button className="w-half rounded-sm bg-blue-600 border-2 border-blue-500 text-white font-bold py-2 px-8 hover:bg-blue-700 transition-colors text-lg">
                 Try it yourself
                </button>
              </Link>
            </div>
          </section>

         
          <section className="text-center mb-20 py-12">
            <h2 className="text-4xl font-bold text-blue-100 mb-6">Ready to Reclaim Your Time?</h2>
            <p className="text-blue-200 text-lg mb-8 max-w-2xl mx-auto">
              Join thousands who've stopped wasting time on scheduling. Let Chronos handle the busywork while you focus on what truly matters.
            </p>
            <Link href="/signup">
              <button className="bg-blue-600 border-2 rounded-sm border-blue-500 text-white font-bold py-2 px-8 hover:bg-blue-700 transition-colors text-lg">
                Get Started for Free
              </button>
            </Link>
          </section>

          {/* Footer */}
          <div className="text-center">
            <p className="text-blue-300 text-lg mb-4">
              Powered by <span className="font-bold text-blue-200">Chronos</span> — Your personal time orchestrator
            </p>
            <div className="flex gap-6 justify-center text-blue-300 text-sm">
              <Link href="/about" className="hover:text-blue-100">About</Link>
              <Link href="/signup" className="hover:text-blue-100">Sign Up</Link>
            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}