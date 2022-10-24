import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useAnalyticsEventTracker from "./useAnalytics";

export default function SocialLink({
    href,
    title,
    icon,
}) {
    const gaEventTracker = useAnalyticsEventTracker('Social networks');
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener"
            className="text-blue-300 hover:underline block h-6 my-4 mx-4"
            onClick={() => gaEventTracker(title)}
        >
            <FontAwesomeIcon
                className="h-full"
                title={title}
                icon={icon}
            ></FontAwesomeIcon>
        </a>
    );
}