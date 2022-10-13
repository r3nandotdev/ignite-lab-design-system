import { Slot } from '@radix-ui/react-slot'
import { clsx } from 'clsx'
import { ReactNode } from "react";

export interface HeadingProps {
    size?: 'sm' | 'md' | 'lg';
    content: ReactNode,
    asChild: boolean
}

export function Heading({ size = 'md', content, asChild }: HeadingProps) {
    const Comp = asChild ? Slot : 'h2';

    return (
        <Comp className={
            clsx('text-gray-200 font-bold font-sans',
                {
                    'text-lg': size === 'sm',
                    'text-xl': size === 'md',
                    'text-2xl': size === 'lg',
                }
            )
        }>
            { content }
        </Comp>
    )
}