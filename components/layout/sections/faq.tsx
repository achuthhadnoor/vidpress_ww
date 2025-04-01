import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "What is VidPress Desktop?",
    answer: "VidPress Desktop is a video compression app that uses FFmpeg under the hood. It provides a simple interface for compressing videos while maintaining good quality.",
    value: "item-1",
  },
  {
    question: "How does VidPress compress videos?",
    answer:
      "VidPress uses FFmpeg's advanced compression algorithms to optimize your videos. It automatically selects the best compression settings while allowing you to customize quality and size targets.",
    value: "item-2",
  },
  {
    question: "Is it completely offline?",
    answer:
      "Yes! VidPress is a desktop application that works 100% offline. All video processing happens locally on your computer using FFmpeg, with no data ever leaving your device.",
    value: "item-3",
  },
  {
    question: "Is there a free trial?",
    answer: "Yes! VidPress offers a free trial that lets you compress up to 5 videos. After that, you can purchase a license to compress unlimited videos.",
    value: "item-4",
  },
  {
    question: "What video formats can I compress?",
    answer: "VidPress supports all video formats that FFmpeg can handle, including MP4, MOV, AVI, MKV, WebM and many more. You can compress videos of any size or duration.",
    value: "item-5",
  },
  {
    question: "How fast is the compression?",
    answer: "Compression speed depends on your computer's CPU/GPU and the video size. VidPress uses FFmpeg's hardware acceleration when available to provide the fastest possible compression.",
    value: "item-6",
  },
];

export const FAQSection = () => {
  return (
    <section id="faq" className="container md:w-[700px] py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          FAQS
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold">
          Common Questions
        </h2>
      </div>

      <Accordion type="single" collapsible className="AccordionRoot">
        {FAQList.map(({ question, answer, value }) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};
