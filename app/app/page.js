"use client";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export default function MyApp() {
  const [result, setResult] = useState("");

  const callAPI = async (userInfo, companyInfo) => {
    setResult("AI is generating ...");

    const response = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userInfo, companyInfo }),
    });
    console.log(response);
    const data = await response.json();
    console.log(data);
    const { output } = data;
    console.log("Groq replied...", output);

    setResult(output);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const formElements = event.target.elements;
    const userInfo = formElements.userInfo.value;
    const companyInfo = formElements.companyInfo.value;
    callAPI(userInfo, companyInfo);
  };

  return (
    <main className="p-5">
      <h1 className="w-screen font-bold text-center">Coverletter Generator</h1>
      <div className="flex p-5">
        <form
          className="flex flex-col w-[45%] min-w-[30%] h-[90vh]"
          onSubmit={handleSubmit}
        >
          <label htmlFor="userInfo">User description</label>
          <Textarea
            id={"userInfo"}
            name="userInfo"
            placeholder={"tell me something about you..."}
            className={"h-[40%]"}
          />
          <label htmlFor="companyInfo">Job and company description</label>
          <Textarea
            name="companyInfo"
            id={"companyInfo"}
            placeholder={"tell me something about the job..."}
            className={"h-[40%]"}
          />
          <Button className={"mt-2"}>Generate</Button>
        </form>
        <div className="flex w-fit p-5 flex-wrap">
          <article className="w-full border border-1 rounded text-sm">
            <pre className="flex flex-wrap">{result}</pre>
          </article>
        </div>
      </div>
    </main>
  );
}
