"use client";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export default function MyApp() {
  const [result, setResult] = useState("");

  const callAPI = async (userInfo, companyInfo) => {
    console.log("userInfo:", userInfo);
    console.log("companyInfo:", companyInfo);
    setResult("AI is generating ...");
    const requestBody = {
      userInfo: userInfo,
      companyInfo: companyInfo,
    };
    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      console.log("Response status:", response.status);
      console.log("Response headers:", response.headers);

      const responseText = await response.text();
      console.log("Raw response:", responseText);

      const data = responseText ? JSON.parse(responseText) : {};
      console.log("Parsed data:", data);

      const { output } = data;
      console.log("Groq replied...", output);

      setResult(output);
    } catch (error) {
      console.error("API call error:", error);
      setResult("Error generating content. Please try again.");
    }
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
        <div className="flex p-5 flex-wrap w-full">
          <article className="w-full border border-1 rounded text-sm p-4">
            {/* {result} */}
            {result.split("\n").map((paragraph, index) => (
              <p key={index} className="mb-2">
                {paragraph}
              </p>
            ))}
          </article>
        </div>
      </div>
    </main>
  );
}
