import "./globals.css";
import CommandPalette from "@/components/CommandPalette";


export const metadata={
  title: 'Chronos- Move at the Speed of Thought',
  description: 'Chronos will help the user plan faster, execute smarter and keep everything from their schedule on time.'
}

export default function RootLayout({children}){
  return (
    <html lang="en">
      <head>
         <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/remixicon/4.6.0/remixicon.css" integrity="sha512-kJlvECunwXftkPwyvHbclArO8wszgBGisiLeuDFwNM8ws+wKIw0sv1os3ClWZOcrEB2eRXULYUsm8OVRGJKwGA==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      </head>
      <body>
                <CommandPalette />
        {children}
      </body>
    </html>
  );
}


