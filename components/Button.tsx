import Link from "next/link";

interface Button {
    href: string,
    color: "green" | "orange",
    children: any
};

const Button = ({ href, color, children }: Button) => {
    return (
        <Link href={href}>
            {
                color === "green" ? (
                    <div className="bg-green-400">
                        <p className="text-center">{children}</p>
                    </div>
                ):
                color === "orange" ? (
                    <div className="bg-orange-400">
                        <p className="text-center">{children}</p>
                    </div>
                ):
                null
            }
        </Link>
    );
};

export default Button;