import Link from 'next/link';

const Footer: React.FC = () => {
    return (
        <footer className="bg-[#223E4A] text-white p-4 flex justify-end items-center">
        <p>© gynga.org</p>
        <span className="mx-4"> | </span>
        <a href="https://github.com/T-unity" className="flex items-center">
            <span className="hover:underline">開発者</span>
            <img src="/icons/github-mark-white.png" alt="GitHub" className="ml-2" width="20" height="20" />
        </a>
        <span className="mx-4"> | </span>
        <p>
            <Link href="/about" passHref>About</Link>
        </p>
        </footer>
    );
};

export default Footer;
