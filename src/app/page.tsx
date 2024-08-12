import Header from "@/app/components/header";
import Hero from "@/app/components/hero";
import NotesProvider from "@/app/context/notes";
import UserProvider from "@/app/context/user";
import cn from "@/lib/clsx";

export default function Home() {
  return (
    <main
      className={cn(
        "w-full min-h-screen pb-14",
        "bg-background-light dark:bg-[#293941]",
      )}
    >
      <UserProvider>
        <NotesProvider>
          <Header />
          <Hero />
        </NotesProvider>
      </UserProvider>
    </main>
  );
}
