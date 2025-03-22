import { Card } from "@/components/ui/card";

export default async function Dashboard() {
  return (
    <div className="p-4 sm:p-8">
      <main className="flex flex-col gap-8 sm:items-start">
        <Card className="w-full max-w-2xl p-10">
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold">Dashboard</h2>
            <p className="text-muted-foreground text-sm">
              This is your dashboard. You can view your account details and
              manage your settings here.
            </p>
          </div>
        </Card>
      </main>
    </div>
  );
}
