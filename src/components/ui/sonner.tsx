import {
  CircleCheckIcon,
  InfoIcon,
  Loader2Icon,
  OctagonXIcon,
  TriangleAlertIcon,
} from "lucide-react";
import { useTheme } from "next-themes";
import { Toaster as Sonner, type ToasterProps } from "sonner";

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast: "border-4 border-black dark:border-accent font-serif",
          title: "uppercase tracking-wider font-serif",
          description: "font-mono text-sm",
          success:
            "bg-white dark:bg-background text-black dark:text-accent-foreground border-black dark:border-accent",
          error:
            "bg-white dark:bg-background text-black dark:text-foreground border-black dark:border-accent",
          warning:
            "bg-white dark:bg-background text-black dark:text-foreground border-black dark:border-accent",
          info: "bg-white dark:bg-background text-black dark:text-foreground border-black dark:border-accent",
        },
      }}
      icons={{
        success: (
          <CircleCheckIcon className="size-5 border-2 border-black dark:border-accent rounded-full p-0.5" />
        ),
        info: <InfoIcon className="size-4" />,
        warning: <TriangleAlertIcon className="size-4" />,
        error: (
          <OctagonXIcon className="size-5 border-2 border-black dark:border-accent" />
        ),
        loading: (
          <Loader2Icon className="size-5 animate-spin border-2 border-black dark:border-accent rounded-full" />
        ),
      }}
     style={
        {
          "--normal-bg": "var(--popover)",
          "--normal-text": "var(--popover-foreground)",
          "--normal-border": "var(--border)",
          "--border-radius": "0",
        } as React.CSSProperties
      }
      {...props}
    />
  );
};

export { Toaster };
