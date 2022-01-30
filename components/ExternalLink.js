export default function ExternalLink({
    href,
    children,
}) {
    return (
        <a href={href} target="_blank" rel="noopener" className="text-blue-300 hover:underline">
            {children}
        </a>
    );
}