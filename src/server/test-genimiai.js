import { checkGemini } from "@/lib/gemini";

async function testGemini() {
    const geminiAI = await checkGemini();

    const response = await geminiAI.models.generateContent({
    model: "gemini-2.5-flash",
    contents: "Say hello ansh in one line",
});
  console.log(response.text);
}

testGemini();