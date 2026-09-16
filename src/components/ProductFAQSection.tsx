import { ArrowRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { ProductFAQ } from "@/data/products";

interface ProductFAQSectionProps {
  faqs: ProductFAQ[];
  title?: string;
  subtitle?: string;
}

export const ProductFAQSection = ({
  faqs,
  title = "Frequently asked questions",
  subtitle = "Everything you need to know about this tool. Can't find an answer? Our team is here to help.",
}: ProductFAQSectionProps) => {
  return (
    <section id="faq" className="ds-section bg-surface-1">
      <div className="ds-container max-w-3xl">
        <div className="mb-12 text-center">
          <span className="ds-eyebrow mb-4">FAQ</span>
          <h2 className="ds-h2 mb-4 text-balance">{title}</h2>
          <p className="ds-body">{subtitle}</p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-10 text-center">
          <a href="/pricing" className="ds-btn-primary">
            Get started today
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
