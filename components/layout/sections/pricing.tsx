import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";

enum PopularPlan {
  NO = 0,
  YES = 1,
}

interface PlanProps {
  title: string;
  popular: PopularPlan;
  price: number;
  description: string;
  buttonText: string;
  benefitList: string[];
}

const plans: PlanProps[] = [
  {
    title: "Free Trial",
    popular: 0,
    price: 0,
    description:
      "Try our offline video compression app with basic features for 7 days.",
    buttonText: "Start Free Trial",
    benefitList: [
      "7-day full feature access",
      "Unlimited compressions",
      "1080p output quality",
      "Basic compression presets",
      "Community support",
    ],
  },
  {
    title: "Pro",
    popular: 1,
    price: 9,
    description:
      "Unlock full potential with advanced compression features powered by FFmpeg.",
    buttonText: "Buy Pro License",
    benefitList: [
      "Lifetime license",
      "4K quality processing",
      "Advanced FFmpeg presets",
      "Batch processing(soon)",
      "Email support",
    ],
  },
  {
    title: "lifetime",
    popular: 0,
    price: 69,
    description:
      "Custom solutions for teams needing high-volume video processing.",
    buttonText: "Contact Sales",
    benefitList: [
      "All Pro features",
      "8K video support",
      "Custom FFmpeg parameters",
      "Volume licensing",
      "Priority support",
    ],
  },
];

export const PricingSection = () => {
  return (
    <section className="container py-24 sm:py-32" id="pricing">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        Simple Pricing
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Choose Your Video Compression Plan
      </h2>

      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground pb-14">
        Professional video compression powered by FFmpeg, running completely offline on your device
      </h3>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-4">
        {plans.map(
          ({ title, popular, price, description, buttonText, benefitList }) => (
            <Card
              key={title}
              className={
                popular === PopularPlan?.YES
                  ? "drop-shadow-xl shadow-black/10 dark:shadow-white/10 border-[1.5px] border-primary lg:scale-[1.1]"
                  : ""
              }
            >
              <CardHeader>
                <CardTitle className="pb-2">{title}</CardTitle>

                <CardDescription className="pb-4">
                  {description}
                </CardDescription>

                <div>
                  <span className="text-3xl font-bold">${price}</span>
                </div>
              </CardHeader>

              <CardContent className="flex">
                <div className="space-y-4">
                  {benefitList.map((benefit) => (
                    <span key={benefit} className="flex">
                      <Check className="text-primary mr-2" />
                      <h3>{benefit}</h3>
                    </span>
                  ))}
                </div>
              </CardContent>

              <CardFooter>
                <Button
                  variant={
                    popular === PopularPlan?.YES ? "default" : "secondary"
                  }
                  className="w-full"
                >
                  {buttonText}
                </Button>
              </CardFooter>
            </Card>
          )
        )}
      </div>
    </section>
  );
};
