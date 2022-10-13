import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';
import { ReactNode } from 'react';

export interface ButtonProps {
    children: ReactNode;
    asChild?: boolean
}

export function Button({ children, asChild}: ButtonProps) {
    const Comp = asChild ? Slot : 'button'

    return (
        <Comp className={
            clsx('px-4 py-3 bg-cyan-500 rounded font-semibold text-sm text-black w-full transition-colors hover:bg-cyan-300 focus:ring-2 ring-white')}
        >
            {children}
        </Comp>
    )
}