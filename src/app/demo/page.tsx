import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function DemoPage() {
  return (
    <main className="flex min-h-dvh flex-col items-center justify-center gap-6 p-8">
      <h1 className="text-3xl font-bold">Demo</h1>
      <div className="flex gap-4">
        <Button>Default</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="outline">Outline</Button>
      </div>
      <Link href="/" className="text-sm text-muted-foreground underline">
        Back to Home
      </Link>
    </main>
  );
}


