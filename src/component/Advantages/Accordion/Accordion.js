import React from "react";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";
import { ThemeProvider } from "@material-tailwind/react";

const theme = {
    accordion: {
        defaultProps: {
            icon: undefined,
            className: "",
            animate: {
                unmount: {},
                mount: {},
            },
            disabled: false,
        },
        styles: {
            base: {
                container: {
                    display: "block",
                    position: "relative",
                    width: "w-full",
                },
                header: {
                    initial: {
                        display: "flex",
                        justifyContent: "justify-between",
                        alignItems: "items-center",
                        width: "w-full",
                        py: "py-4",
                        borderWidth: "border-b border-b-blue-gray-100",
                        color: "text-blue-gray-700",
                        fontSmoothing: "antialiased",
                        fontFamily: "font-sans",
                        fontSize: "text-xl",
                        textAlign: "text-left",
                        fontWeight: "font-semibold",
                        lineHeight: "leading-snug",
                        userSelect: "select-none",
                        hover: "hover:text-blue-gray-900",
                        transition: "transition-colors",
                    },
                    active: { color: "text-blue-gray-900" },
                    icon: {
                        ml: "ml-4",
                    },
                },
                body: {
                    display: "block",
                    width: "w-full",
                    py: "py-4",
                    color: "text-gray-600",
                    fontSmoothing: "antialiased",
                    fontFamily: "font-sans",
                    fontSize: "text-sm",
                    fontWeight: "font-normal",
                    lineHeight: "leading-normal",
                },
                disabled: {
                    pointerEvents: "pointer-events-none",
                    opacity: "opacity-50",
                },
            },
        },
    },
};

function Icon({ id, open }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className={`${
                id === open ? "rotate-180" : ""
            } h-5 w-5 transition-transform`}
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
        </svg>
    );
}

function AccordionCustomIcon() {
    const [open, setOpen] = React.useState(0);

    const handleOpen = (value) => setOpen(open === value ? 0 : value);

    return (
        <>
            <ThemeProvider value={theme}>
                    <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
                        <AccordionHeader onClick={() => handleOpen(1)}>
                            Качественный сервис
                        </AccordionHeader>
                        <AccordionBody>
                            В Nautilus мы стремимся обеспечить лучшее обслуживание клиентов в индустрии чартера яхт. Помимо того, что мы знаем все, что касается чартера яхт, мы также гарантируем лучшие впечатления от вашего отдыха на яхте.
                        </AccordionBody>
                    </Accordion>
                    <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
                        <AccordionHeader onClick={() => handleOpen(2)}>                     
                            Клиентоориентированный подход
                        </AccordionHeader>
                        <AccordionBody>
                            Мы лично учитываем все ваши уникальные потребности и вопросы, чтобы вы могли сэкономить время и получить 100% актуальные тарифы, наличие мест и рекомендации от ведущих американских экспертов по планированию отпуска.
                        </AccordionBody>
                    </Accordion>
                    <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
                        <AccordionHeader onClick={() => handleOpen(3)}>
                            Первоклассные яхты
                        </AccordionHeader>
                        <AccordionBody>
                            Наш чартерный флот состоит из роскошных 5-звездочных суперяхт, тщательно отобранных, чтобы превзойти ожидания наших самых требовательных клиентов. Наши яхты выходят за рамки простого чартера: спортивные, элегантные и роскошные, с большими палубами и изысканным интерьером.
                        </AccordionBody>
                    </Accordion>
            </ThemeProvider>
        </>
    );
}

export default AccordionCustomIcon;
