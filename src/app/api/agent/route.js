import { runAgent } from "@/server/services/agent";
import { action } from "@/server/services/actionRouter";
import { auth } from "@/server/auth";
import { headers } from "next/headers";

export async function POST(req) {
    try{
        const session = await auth.api.getSession({
            headers: await headers(),
        })

        if(!session){
            return Response.json({
            error:'Unauthorised',
        },{
            status:500,
        }) ;
        }

        const {prompt} = await req.json();

        const agentResponse = await runAgent(prompt);
        console.log("AGENT RESULT:");

        console.log("BODY:", prompt);
        
        const actions = Array.isArray(agentResponse) ? agentResponse : [agentResponse];
        if (actions.length === 0) {
        return Response.json({
        result: agentResponse,
        actionResult: [],
        success: false,
        message: "No actionable request was detected in the prompt."
    });
}

        const actionResult = [];
        for (const act of actions) {
            actionResult.push(await action(session.user.id, act));
        }
        console.log(actionResult);
        console.log(typeof actionResult);

        return Response.json({result: agentResponse,
            actionResult,
            success:true,
        });
    } catch (error) {
        console.error(error);
        return Response.json({
            error:error.message,
            success:false,
        },{
            status:500,
        }) ;
    }
}