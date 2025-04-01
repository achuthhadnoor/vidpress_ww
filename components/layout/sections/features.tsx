import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";

interface FeaturesProps {
  icon: string;
  title: string;
  description: string;
}
const featureList: FeaturesProps[] = [
  {
    icon: "TabletSmartphone",
    title: "Mobile-Optimized Videos",
    description:
      "Compress videos while maintaining quality, perfect for mobile viewing and sharing across devices.",
  },
  {
    icon: "BadgeCheck",
    title: "Lossless Compression",
    description:
      "Advanced compression algorithms that reduce file size without compromising video quality.",
  },
  {
    icon: "Goal",
    title: "Batch Processing(soon)",
    description:
      "Process multiple videos simultaneously, saving time and maintaining consistent quality across files.",
  },
  {
    icon: "PictureInPicture",
    title: "Format Flexibility",
    description:
      "Support for multiple video formats including MP4, MOV, AVI, and more. Convert between formats effortlessly.",
  },
  {
    icon: "MousePointerClick",
    title: "Easy to Use",
    description:
      "Simple drag-and-drop interface makes video compression accessible to everyone, no technical expertise required.",
  },
  {
    icon: "Newspaper",
    title: "Custom Settings(soon)",
    description:
      "Fine-tune compression settings to match your specific needs, from quick sharing to professional quality.",
  },
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        Features
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Powerful Video Compression Made Simple
      </h2>

      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
        Experience fast, offline video compression . No internet needed,
        your files stay private and secure on your device.
      </h3>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {featureList.map(({ icon, title, description }) => (
          <div key={title}>
            <Card className="h-full bg-background border-0 shadow-none">
              <CardHeader className="flex justify-center items-center">
                <div className="bg-primary/20 p-2 rounded-full ring-8 ring-primary/10 mb-4">
                  <Icon
                    name={icon as keyof typeof icons}
                    size={24}
                    color="hsl(var(--primary))"
                    className="text-primary"
                  />
                </div>

                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground text-center">
                {description}
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};
