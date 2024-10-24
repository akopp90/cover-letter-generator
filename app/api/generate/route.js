import OpenAI from "openai";
import { NextResponse } from "next/server";

const client = new OpenAI({
  apiKey: process.env.GROQ_API_KEY,
  baseURL: "https://api.groq.com/openai/v1",
});

export async function POST(request, response) {
  const body = await request.body;
  console.log(body);
  const { userInfo, companyInfo } = body;

  const prompt = `
  Write a cover letter for a job application. Some info about the company and the position: ${companyInfo}. Some info about myself: ${userInfo}. 
  `;

  const data = await client.chat.completions.create({
    messages: [{ role: "user", content: prompt }],
    model: "llama-3.1-70b-versatile", // use this if using your own openai key
  });

  const completion = data.choices[0].message.content;

  return NextResponse.json({ output: completion }, { status: 200 });
}
