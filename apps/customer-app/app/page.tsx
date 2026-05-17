import { Button } from "@restaurant/ui";

export default function Page() {
  return (
    <main className="p-10 flex flex-col gap-4">
      <h1 className="text-2xl font-bold">
        Restaurant Platform
      </h1>

      <div className="flex gap-4">
        <Button>Primary</Button>

        <Button variant="secondary">
          Secondary
        </Button>

        <Button variant="destructive">
          Delete
        </Button>

        <Button styleType="outline">
          Outline
        </Button>
      </div>
    </main>
  );
}
