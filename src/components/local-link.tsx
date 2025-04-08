import Link from "next/link";

export default function LocalLink({ href, children, className = "" }: { href: string; children: React.ReactNode; className?: string }) {
    return (
        <Link
            href={href}
        >
            <p className={`underline underline-offset-6 mb-2 ${className}`}>{children}</p>
        </Link>
    )
}