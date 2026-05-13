import { AppSidebar } from "@/widgets/app-sidebar"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/shared/ui/sidebar"

export default function HomePage() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-12 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <span className="text-sm font-medium">Template FSD</span>
        </header>
        <main className="flex flex-1 flex-col items-center gap-8 p-8">
          here
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}
