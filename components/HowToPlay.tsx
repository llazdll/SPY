import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
  export function HowToPlay() {
    return (
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>How to Play?</AccordionTrigger>
          <AccordionContent className="p-8 text-right">
          دو گروه وجود دارد جاسوس و شهروند بازی به این صورت است که به گروه شهروند یک کلمه نمایش داده می‌شود و به گروه جاسوس یک راهنمایی راجع به اون کلمه مایش داده می‌شود . <br/>گروه جاسوس باید کلمه مورد نظر را حدس بزنند و گروه شهروند باید جاسوس‌ها را پیدا کن
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Time?</AccordionTrigger>
          <AccordionContent className="p-8 text-right">
            زمان بر حسب دقیقه است و پس از تمام شدن زمان, بازی تمام میشود و اگر شهروند نتواند جاسوس را پیدا کند بازی به نفع جاسوس تمام میشود
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Player?</AccordionTrigger>
          <AccordionContent className="p-8 text-right">
            تعداد همه کسانی که بازی میکنند هم جاسوس هم شهروند
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    )
  }
  