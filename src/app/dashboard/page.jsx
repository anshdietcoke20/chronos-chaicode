//Connect Gmail
// Connect Calendar
// Agent
// Inbox
// Calendar
// Logout

import { headers } from "next/headers";
import { auth } from "@/server/auth";
import { redirect } from "next/navigation";
import LogoutButton from '@/components/LogoutButton';
import ConnectGmailButton from '@/components/ConnectGmailButton';
import ConnectCalendarButton from '@/components/ConnectCalendarButton';
import Link from "next/link";
import Navbar from "@/components/Navbar";

export default async function DashboardPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if(!session){
    redirect('/signin')
  }

  return(
    <div className="min-h-screen bg-blue-950 scroll-smooth">
      <Navbar/>
    
      <div 
    className="relative pt-32 pb-24 px-4 overflow-hidden">

        <div className="relative max-w-4xl mx-auto text-center z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-linear-to-r from-blue-300 via-blue-200 to-cyan-200 mb-4">
            Welcome, {session.user.name}
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 font-light mb-2">
            Move at the Speed of Thought
          </p>
        </div>
      </div>


      <div className="relative -mt-20 px-4 pb-10">
        <div className="max-w-6xl mx-auto">
          
 
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            

            <div className="group cursor-pointer">
              <div className="bg-blue-900 border-4 rounded-sm border-cyan-600 p-8 relative overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full flex flex-col">
                
                <div className="relative z-10 flex flex-col grow">
                  <h2 className="text-2xl font-bold text-blue-300 mb-3">Gmail <i className="ri-mail-line"> </i></h2>
                  <p className="text-blue-100 mb-6 text-sm grow">Connect and manage your emails seamlessly. Never miss an important message.</p>
                  <button className="w-full bg-blue-600  text-white rounded-sm font-bold py-2 px-4 border-2 border-blue-500 hover:bg-blue-700 transition-colors">
                      <ConnectGmailButton />
                    </button>
                </div>
              </div>
            </div>

            <div className="group cursor-pointer">
              <div className="bg-blue-900 border-4 border-cyan-600 rounded-sm p-8 relative overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full flex flex-col"> 
                <div className="relative z-10 flex flex-col grow">
                  <h2 className="text-2xl font-bold text-blue-300 mb-3">Calendar <i className="ri-calendar-line"></i></h2>
                  <p className="text-blue-100 mb-6 text-sm grow">Sync all your events in one place.</p>
                  <button className="w-full bg-blue-600 text-white rounded-sm font-bold py-2 px-4 border-2 border-blue-500 hover:bg-blue-700 transition-colors">
                      <ConnectCalendarButton />
                    </button>
                </div>
              </div> 
            </div>
            
            
            <div className="group cursor-pointer">
              <Link href="/agent">
                <div className="bg-blue-900 border-4 rounded-sm border-cyan-600 p-8 relative overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full flex flex-col">
                  
                  <div className="relative z-10 flex flex-col grow">
                    <h2 className="text-2xl font-bold text-blue-300 mb-3">AI Agent <i className="ri-robot-3-line"></i></h2>
                    <p className="text-blue-100 mb-6 text-sm grow">Send mail or set a calendar event without doing much work.</p>
                    <button className="w-full bg-blue-600 rounded-sm text-white font-bold py-2 px-4 border-2 border-blue-500 hover:bg-blue-700 transition-colors">
                      Launch Agent
                    </button>
                  </div>
                </div>
              </Link>
            </div>


            <div className="group cursor-pointer">
              <Link href="/inbox">
                <div className="bg-blue-900 border-4 rounded-sm border-cyan-600 p-8 relative overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full flex flex-col">
                  
                  <div className="relative z-10 flex flex-col grow">
                 
                    <h2 className="text-2xl font-bold text-blue-300 mb-3">Inbox <i className="ri-inbox-2-line"></i></h2>
                    <p className="text-blue-100 mb-6 text-sm grow">View all your emails in one unified interface.</p>
                    <button className="w-full bg-blue-600 rounded-sm text-white font-bold py-2 px-4 border-2 border-blue-500 hover:bg-blue-700 transition-colors">
                      View Inbox
                    </button>
                  </div>
                </div>
              </Link>
            </div>

            <div className="group cursor-pointer">
              <Link href="/calendar">
                <div className="bg-blue-900 border-4 rounded-sm border-cyan-600 p-8 relative overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full flex flex-col">
                  
                  <div className="relative z-10 flex flex-col grow">
                  
                    <h2 className="text-2xl font-bold  text-blue-300 mb-3">View your events <i className="ri-calendar-todo-line"></i></h2>
                    <p className="text-blue-100 mb-6 text-sm grow">Check if you can dilly-dally through your day or move like Usain Bolt ?!</p>
                    <button className="w-full bg-blue-600 rounded-sm text-white font-bold py-2 px-4 border-2 border-blue-500 hover:bg-blue-700 transition-colors">
                      View Calendar
                    </button>
                  </div>
                </div>
              </Link>
            </div>


            <div className="group cursor-pointer">
              <div className="bg-blue-900 border-4 rounded-sm border-cyan-600 p-8 relative overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full flex flex-col">
                
                <div className="relative z-10 flex flex-col grow">
                
                  <h2 className="text-2xl font-bold text-blue-300 mb-3">Logout <i className="ri-door-open-line"></i></h2>
                  <p className="text-blue-100 mb-6 text-sm grow">Sad to see you leave, but let us meet soon!</p>
                  <button className="w-full rounded-sm bg-blue-600 text-white font-bold py-2 px-4 border-2 border-blue-500 hover:bg-blue-700 transition-colors">
                      <LogoutButton />
                    </button>
                </div>
              </div>
            </div>

          </div>

          <div className="text-center mt-12">
            <p className="text-blue-300 text-lg pb-20">
              Powered by <span className="font-bold text-blue-200">&copy; Chronos</span> — Your personal time orchestrator
            </p>
            
          </div>
        </div>
      </div>
    </div>
  );
}