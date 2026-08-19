import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionHeader } from "@/components/common/section-header";

const faqs = [
  {
    question: "What is Zracko?",
    answer:
      "Zracko is an all-in-one business platform that connects POS, payments, inventory, CRM, and marketing so every part of your operation works together.",
  },
  {
    question: "Is it free to get started?",
    answer:
      "Yes. You can create an account and explore the core modules at no cost. Upgrade when you need advanced reporting, extra locations, or team seats.",
  },
  {
    question: "Can I run Zracko on mobile?",
    answer:
      "The iOS and Android apps give you live sales, inventory, and staff tools so you can manage the business from anywhere.",
  },
  {
    question: "Does every module share the same data?",
    answer:
      "Yes. A sale updates inventory, CRM, and reports instantly. There is one source of truth across the platform.",
  },
  {
    question: "How do I migrate from my current tools?",
    answer:
      "Our team helps you import products, customers, and history. Most businesses are live within a few days.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="mt-30">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center gap-10 px-5 sm:px-12 xl:px-[120px]">
        <SectionHeader
          title="Questions, Answered."
          subtitle="Everything you need to know about getting started with Zracko."
        />
        <Accordion
          type="single"
          collapsible
          className="w-full max-w-[812px] gap-3"
          defaultValue="item-0"
        >
          {faqs.map((faq, index) => (
            <AccordionItem
              key={faq.question}
              value={`item-${index}`}
              className="rounded-[16px] border-0 bg-[#F7FAFF] px-6 not-last:border-b-0"
            >
              <AccordionTrigger className="min-h-[72px] items-center py-5 text-left text-[18px] font-medium leading-[32px] tracking-[-0.8px] text-[#111111] hover:no-underline **:data-[slot=accordion-trigger-icon]:size-[18px] **:data-[slot=accordion-trigger-icon]:text-[#111111]">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="pb-5 text-base font-light leading-6 text-[#111111]">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
