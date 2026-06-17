//to redirect user to google oauth to get access of their gmails and google calendars 

import {generateOAuthUrl} from 'corsair/oauth';
import { corsair } from '@/server/corsair';
import { NextResponse } from 'next/server';
import { headers } from 'next/headers';
import { auth } from '@/server/auth';


const REDIRECT_URI = `${process.env.APP_URL}/api/oauth/callback`;

export async function GET(req) {
    const session = await auth.api.getSession({
        headers: await headers(),
    })

    if(!session){
        return NextResponse.json({error: 'Unauthorised'}, {status: 401})
    }

    const plugin = new URL(req.url).searchParams.get('plugin');

    if(!plugin){
        return  NextResponse.json({error: 'No plugin param'}, {status: 400})
    }

    const {url, state} = await generateOAuthUrl(corsair,plugin,{
        tenantId: session.user.id,
        redirectUri: REDIRECT_URI,
    });

    const response = NextResponse.redirect(url);

    response.cookies.set('oauth_state', state, {
        httpOnly: true,
        sameSite: 'lax',
        maxAge:60 * 10,
    });

    return response
}