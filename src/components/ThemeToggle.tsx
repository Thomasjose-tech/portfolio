// import { Moon, Sun } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { useTheme } from "@/components/ThemeProvider"

// export function ThemeToggle() {
//   const { theme, setTheme } = useTheme()

//   return (
//     <Button
//       variant="ghost"
//       size="sm"
//       onClick={() => setTheme(theme === "light" ? "dark" : "light")}
//       className="relative h-9 w-9 px-0 hover:bg-accent/50 transition-all duration-300 group"
//     >
//       <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all duration-500 dark:-rotate-90 dark:scale-0 group-hover:scale-110" />
//       <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all duration-500 dark:rotate-0 dark:scale-100 group-hover:scale-110" />
//       <span className="sr-only">Toggle theme</span>
//     </Button>
//   )
// }
import { Moon, Sun, Palette, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "@/components/ThemeProvider";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const darkThemes = [
    { value: "dark" as const, label: "Dark Gray", bgColor: "#111827" },
    { value: "dark-blue" as const, label: "Dark Blue", bgColor: "#172554" },
    { value: "dark-purple" as const, label: "Dark Purple", bgColor: "#2e1065" },
    { value: "dark-green" as const, label: "Dark Green", bgColor: "#14532d" },
  ];

  const isDarkMode = theme !== "light" && theme !== "system";

  return (
    <div className="flex items-center gap-2">
      {/* Light/Dark Toggle */}
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className="relative h-9 w-9 px-0 hover:bg-accent/50 transition-all duration-300 group"
      >
        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all duration-500 dark:-rotate-90 dark:scale-0 dark-blue:-rotate-90 dark-blue:scale-0 dark-purple:-rotate-90 dark-purple:scale-0 dark-green:-rotate-90 dark-green:scale-0 group-hover:scale-110" />
        <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all duration-500 dark:rotate-0 dark:scale-100 dark-blue:rotate-0 dark-blue:scale-100 dark-purple:rotate-0 dark-purple:scale-100 dark-green:rotate-0 dark-green:scale-100 group-hover:scale-110" />
        <span className="sr-only">Toggle theme</span>
      </Button>

      {/* Dark Theme Color Picker */}
      {isDarkMode && (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="sm"
              className="h-9 w-9 px-0 hover:bg-accent/50 transition-all duration-300"
            >
              <Palette className="h-[1.2rem] w-[1.2rem]" />
              <span className="sr-only">Select dark theme color</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuLabel>Dark Theme Colors</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {darkThemes.map((darkTheme) => (
              <DropdownMenuItem
                key={darkTheme.value}
                onClick={() => setTheme(darkTheme.value)}
                className="flex items-center justify-between cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div 
                    className="w-6 h-6 rounded-md border-2 border-border"
                    style={{ backgroundColor: darkTheme.bgColor }}
                  />
                  <span>{darkTheme.label}</span>
                </div>
                {theme === darkTheme.value && (
                  <Check className="h-4 w-4 text-primary" />
                )}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      )}
    </div>
  );
}