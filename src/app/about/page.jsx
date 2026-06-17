//about this project 
import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen  bg-blue-950 scroll-smooth">
      <Navbar/>

      <div className="relative  pt-32 pb-14 px-4 overflow-hidden">
        <div className="relative max-w-4xl mx-auto text-center z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-blue-100 mb-4">
            About Chronos
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 font-light mb-6">
            Your AI-Powered Schedule Companion
          </p>
        </div>
      </div>

      <div className="relative px-4 pb-20">
        <div className="max-w-6xl mx-auto">
          
          <section className="mb-15">
            <div className="gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-blue-100 mb-6">What is Chronos?</h2>
                <span className="text-blue-100 text-lg mb-4 leading-relaxed">
                  Chronos means time in ancient Greek philosophy, the ticking clock and measurable seconds are very important to us. Chronos is an intelligent scheduling assistant that harnesses the power of artificial intelligence to revolutionize how you manage your time. We seamlessly integrate with your Gmail and Google Calendar to help you stay organized effortlessly.
                </span>
                <p className="text-blue-100 text-lg mb-4 leading-relaxed">
                  Using advanced AI powered by Corsair, Chronos understands your natural language and instantly converts your thoughts into actionable tasks — send emails, schedule meetings, and organize your day without lifting a finger.
                </p>
              </div>
            </div>
          </section>


          <section className="mb-20">
            <h2 className="text-4xl font-bold text-blue-100 mb-12 text-center">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              

              <div className="bg-blue-900 border-4 rounded-sm border-cyan-600 p-8 h-full flex flex-col">
                <div className="text-blue-100 text-2xl"><i className="ri-mail-line"> </i></div>
                <h3 className="text-2xl font-bold text-blue-100 mb-3">Smart Gmail Integration</h3>
                <p className="text-blue-100 mb-6 grow">
                  Connect your Gmail and let our AI draft, send, and organize your emails intelligently. Never struggle with email management again.
                </p>
              </div>

              <div className="bg-blue-900 rounded-sm border-4 border-cyan-600 p-8 h-full flex flex-col">
                <div className="text-blue-100 text-2xl"> <i className="ri-robot-3-line"></i></div>
                <h3 className="text-2xl font-bold text-blue-100 mb-3">AI Agent</h3>
                <p className="text-blue-100 mb-6 grow">
                  Just speak your mind. Our AI agent understands natural language and transforms your intentions into perfectly scheduled events and emails.
                </p>
              </div>

              <div className="bg-blue-900 rounded-sm border-4 border-cyan-600 p-8 h-full flex flex-col">
                <div className="text-blue-100 text-2xl"> <i className="ri-calendar-line"></i></div>
                <h3 className="text-2xl font-bold text-blue-100 mb-3">Calendar Mastery</h3>
                <p className="text-blue-100 mb-6 grow">
                  Sync your Google Calendar effortlessly.
                </p>
              </div>

            </div>
          </section>


          <section className="mb-8">
            <div className=" p-12">
              <h2 className="text-3xl font-bold text-blue-100 mb-6">Why Choose Chronos?</h2>
              <ul className="space-y-4 text-blue-100 text-lg">
                <li className="flex items-start">
                  <span className="text-blue-400 font-bold mr-4"> - </span>
                  <span><strong className="text-blue-100">Powered by Corsair:</strong> Enterprise-grade AI library for seamless integrations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 font-bold mr-4"> - </span>
                  <span><strong className="text-blue-100">Natural Language:</strong> Talk to your schedule like a human assistant</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 font-bold mr-4"> - </span>
                  <span><strong className="text-blue-100">Time Savings:</strong> Automate administrative tasks instantly</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 font-bold mr-4"> - </span>
                  <span><strong className="text-blue-100">Smart Insights:</strong> AI learns your patterns and adapts to your needs</span>
                </li>
              </ul>
            </div>
          </section>

           <section className="mb-20">
            <h2 className="text-4xl font-bold text-blue-100 mb-12 text-center">Guide to Keyboard Shortcuts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              

              <div className="bg-blue-900 border-4 rounded-sm border-cyan-600 p-6">
                <div className="flex items-center gap-4 mb-4">
                  <i className=" text-xl font-bold text-blue-100 ri-keyboard-line"></i>
                  <h3 className="text-xl font-bold text-blue-100"> To Open Command Palette</h3>
                </div>
                <p className="text-blue-200 mb-3">Press: Cmd/Ctrl + K </p>
                <p className="text-blue-300 text-sm">Access all features and commands instantly from anywhere in the app</p>
              </div>
 

              <div className="bg-blue-900 rounded-sm border-4 border-cyan-600 p-6">
                <div className="flex items-center gap-4 mb-4">
                    <i className=" text-xl font-bold text-blue-100 ri-mail-check-line"></i>
                  <h3 className="text-xl font-bold text-blue-100">Go to Inbox</h3>
                </div>
                <p className="text-blue-200 mb-3">Press: I </p>
                <p className="text-blue-300 text-sm">Jump to your email inbox instantly</p>
              </div>
 

              <div className="bg-blue-900 rounded-sm border-4 border-cyan-600 p-6">
                <div className="flex items-center gap-4 mb-4">
                 <i className="text-xl font-bold text-blue-100 ri-calendar-event-line"></i>
                  <h3 className="text-xl font-bold text-blue-100">Go to Calendar</h3>
                </div>
                <p className="text-blue-200 mb-3">Press: C</p>
                <p className="text-blue-300 text-sm">View your calendar and schedule in one keystroke</p>
              </div>
 

              <div className="bg-blue-900  rounded-sm border-4 border-cyan-600 p-6">
                <div className="flex items-center gap-4 mb-4">
                 <i class="text-xl font-bold text-blue-100 ri-robot-3-line"></i>
                  <h3 className="text-xl font-bold text-blue-100">Open AI Agent</h3>
                </div>
                <p className="text-blue-200 mb-3">Press: A </p>
                <p className="text-blue-300 text-sm">Launch the AI agent to automate your tasks</p>
              </div>              
            </div>
            
            <div className="bg-blue-900 rounded-sm border-4 border-cyan-600 p-6">
                <div className="flex items-center gap-4 mb-4">
                  <i class="text-xl font-bold text-blue-100 ri-home-5-line"></i>
                  <h3 className="text-xl font-bold text-blue-100">Go to Dashboard</h3>
                </div>
                <p className="text-blue-200 mb-3">Press: D</p>
                <p className="text-blue-300 text-sm">Return to dashboard</p>
              </div>

              <p className="text-blue-100 text-lg mt-5">
                ** Master these keyboard shortcuts to navigate Chronos at lightning speed. Power users can accomplish complex scheduling tasks in seconds!
              </p>
          </section>
 
          <section className="mb-15">
            <h2 className="text-4xl font-bold text-blue-100 mb-12 text-center">Pricing</h2>
            

            <div className="max-w-xl mx-auto">
              <div className="bg-blue-900 border-4 rounded-sm border-cyan-600 p-8 text-center">
                <h3 className="text-4xl font-bold text-blue-100 mb-4">Absolutely Free!!!</h3>
                <p className="text-6xl font-bold text-blue-400 mb-5">$0</p>

                <div className="p-5 mb-5">
                  <p className="text-2xl text-blue-100 font-semibold text-blue-100mb-4">
                    Everyone Deserves a Schedule
                  </p>
                  <p className="text-blue-200 text-lg leading-relaxed">
                    Time is the one resource we all share equally. We believe that powerful scheduling tools shouldn't be locked behind paywalls. Whether you're a student, entrepreneur, or dreamer — Chronos is yours to use, always. No hidden costs. No premium tiers. Just pure, unfiltered productivity at your fingertips.
                  </p>
                </div>

                <div className="space-y-4 mb-5 text-left">
                  <p className="text-blue-200 text-lg flex items-center">
                    <span className="text-blue-400 font-bold mr-3"> - </span>
                    Unlimited Gmail integration
                  </p>
                  <p className="text-blue-200 text-lg flex items-center">
                    <span className="text-blue-400 font-bold mr-3"> - </span>
                    Full Google Calendar sync
                  </p>
                  <p className="text-blue-200 text-lg flex items-center">
                    <span className="text-blue-400 font-bold mr-3"> - </span>
                    AI-powered agent for life
                  </p>
                  <p className="text-blue-200 text-lg flex items-center">
                    <span className="text-blue-400 font-bold mr-3"> - </span>
                    Natural language scheduling
                  </p>
                  <p className="text-blue-200 text-lg flex items-center">
                    <span className="text-blue-400 font-bold mr-3"> - </span>
                    Priority support
                  </p>
                </div>

                <Link href="/signup">
                  <button className="w-full rounded-sm bg-blue-600  border-blue-500 hover:bg-blue-700  text-white font-bold py-3 px-6 border-2 transition-colors text-xl">
                    Start For Free Now
                  </button>
                </Link>
              </div>
            </div>
          </section>

          <section className="text-center mb-20">
            <h2 className="text-3xl font-bold text-blue-100 mb-6">Ready to Reclaim Your Time?</h2>
            <p className="text-blue-200 text-lg mb-8 max-w-2xl mx-auto">
              Be one of our users who've discovered that managing their schedule doesn't have to be a chore. Let Chronos handle the admin while you focus on what truly matters.
            </p>
            <Link href="/signup">
              <button className=" rounded-sm bg-blue-600  border-blue-500 hover:bg-blue-700  text-white font-bold py-3 px-8 border-2 transition-colors text-lg">
                Get Started Today
              </button>
            </Link>
          </section>
          
          <div className="text-center pt-5">
            <p className="text-blue-300 text-lg">
              Powered by <span className="font-bold text-blue-200">&copy; Chronos</span> — Your personal time orchestrator
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}