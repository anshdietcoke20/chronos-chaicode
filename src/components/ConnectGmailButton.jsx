'use client'

export default function ConnectGmailButton(){
    return(
    <button onClick={() => window.location.href = '/api/connect?plugin=gmail'}>
       Connect your Gmail
    </button>
    );
}
