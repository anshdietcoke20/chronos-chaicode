//when the user allows to google googlesends back some code and state which corsair will need to save access and refresh tokens in tables

import { processOAuthCallback } from "corsair/oauth";
import { corsair } from "@/server/corsair";
import { NextResponse } from "next/server";

const REDIRECT_URI = `${process.env.APP_URL}/api/oauth/callback`;

export async function GET(req) {
   const {searchParams} = new URL(req.url);

   const code = searchParams.get('code');

   const state = searchParams.get('state');

   const storedState = req.cookies.get('oauth_state')?.value;

   if(!code || !state){
    return new Response('Missing OAuth data', {status: 400});
   }

   if(storedState != state){
    return new Response('Invalid state', {status:400});
   }

   await processOAuthCallback(corsair, {
    code, state, redirectUri: REDIRECT_URI
   });

   return NextResponse.redirect(`${process.env.APP_URL}/dashboard`)
}


