import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combine class names and resolve Tailwind class conflicts.
 * Usage: cn("p-2", condition && "text-red-500", "p-4") -> "text-red-500 p-4"
 */
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(...inputs));
}

export default cn;