"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Pen, Sparkles, Clock, ThumbsUp } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LandingPage() {
  const router = useRouter();
  return (
    <div className="flex justify-center items-center min-h-screen w-screen">
      <div className="flex flex-col min-h-screen">
        <header className="px-4 lg:px-6 h-14 flex items-center">
          <Link className="flex items-center justify-center" href="#">
            <Pen className="h-6 w-6" />
            <span className="ml-2 text-2xl font-bold">CoverCraft AI</span>
          </Link>
          <nav className="ml-auto flex gap-4 sm:gap-6">
            <Link
              className="text-sm font-medium hover:underline underline-offset-4"
              href="#features"
            >
              Features
            </Link>
            <Link
              className="text-sm font-medium hover:underline underline-offset-4"
              href="#how-it-works"
            >
              How It Works
            </Link>
          </nav>
        </header>
        <main className="flex-1">
          <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                    Craft Perfect Cover Letters with AI
                  </h1>
                  <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                    Stand out from the crowd with personalized, AI-generated
                    cover letters tailored to your dream job.
                  </p>
                </div>
                <div className="space-x-4">
                  <Button onClick={() => router.push("/app")}>
                    Get Started
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => router.push("#how-it-works")}
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          </section>
          <section
            id="features"
            className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800"
          >
            <div className="container px-4 md:px-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
                Why Choose CoverCraft AI?
              </h2>
              <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
                <Card>
                  <CardHeader>
                    <Sparkles className="h-10 w-10 mb-2 text-primary" />
                    <CardTitle>AI-Powered Personalization</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Our advanced AI tailors each cover letter to your unique
                      skills and the specific job requirements.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <Clock className="h-10 w-10 mb-2 text-primary" />
                    <CardTitle>Save Time and Effort</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Generate a professional cover letter in minutes, not
                      hours. Focus on preparing for your interview instead.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <ThumbsUp className="h-10 w-10 mb-2 text-primary" />
                    <CardTitle>Increase Your Chances</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Our AI-crafted cover letters are designed to catch the eye
                      of recruiters and boost your interview chances.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
          <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
                How It Works
              </h2>
              <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
                <div className="flex flex-col items-center text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white mb-4">
                    1
                  </div>
                  <h3 className="text-xl font-bold mb-2">Input Your Details</h3>
                  <p>
                    Enter your skills, experience, and the job you're applying
                    for.
                  </p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white mb-4">
                    2
                  </div>
                  <h3 className="text-xl font-bold mb-2">AI Generation</h3>
                  <p>
                    Our AI analyzes the information and crafts a personalized
                    cover letter.
                  </p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white mb-4">
                    3
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    Review and Download
                  </h3>
                  <p>
                    Review your cover letter, make any final adjustments, and
                    download it.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
            <div className="container px-4 md:px-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
                What Our Users Say
              </h2>
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
                <Card>
                  <CardContent className="mt-4">
                    <p className="text-lg mb-2">
                      "CoverCraft AI helped me land my dream job! The cover
                      letter it generated was perfect and saved me so much
                      time."
                    </p>
                    <p className="font-semibold">
                      - Sarah T., Software Engineer
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="mt-4">
                    <p className="text-lg mb-2">
                      "I was skeptical at first, but the quality of the cover
                      letters is impressive. It's like having a professional
                      writer at your fingertips."
                    </p>
                    <p className="font-semibold">
                      - Mark R., Marketing Manager
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
        </main>
        <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            © 2024 CoverCraft AI. All rights reserved.
          </p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <Link
              className="text-xs hover:underline underline-offset-4"
              href="#"
            >
              Terms of Service
            </Link>
            <Link
              className="text-xs hover:underline underline-offset-4"
              href="#"
            >
              Privacy
            </Link>
          </nav>
        </footer>
      </div>
    </div>
  );
}
