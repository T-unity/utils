import { useState } from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
    const [showLogin, setShowLogin] = useState(false);

    const handleLoginClick = () => {
    setShowLogin(true);
    };

    const handleCloseLogin = () => {
    setShowLogin(false);
    };

    return (
    <header className="bg-[#31A962] text-white p-4 flex justify-between items-center">
        <h1>
            <Link href="https://gateway.gynga.org/">Gateway</Link>
        </h1>
    </header>
    );
};

export default Header;
