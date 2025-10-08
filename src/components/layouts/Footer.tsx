import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer
            className="w-full pt-4 md:pt-6 pb-3 px-4 md:px-8"
            style={{
                background: 'linear-gradient(90deg, #1366B3 0%, #31B675 100%)',
                borderBottomLeftRadius: '12px',
                borderBottomRightRadius: '12px'
            }}
        >
            <div className="w-full max-w-6xl mx-auto flex flex-col items-center">
                <h3 className="text-[#36ffba] font-semibold text-lg md:text-xl lg:text-[26px] mb-1 tracking-wide text-center">
                    VPBANK TECHNOLOGY HACKATHON 2025
                </h3>
                <span className="text-white text-base md:text-lg mb-3 md:mb-4 mt-1 font-bold text-center">
          Contact
        </span>
                <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-6 lg:gap-8">
                    <Link href="https://www.facebook.com/tuyendung.vpbank" target="_blank" rel="noopener">
                        <div className="flex items-center gap-2 text-white text-xs md:text-sm hover:text-[#36ffba] transition-colors">
                            <Image src="/facebook.png" alt="Facebook" width={24} height={24} className="md:w-[28px] md:h-[28px]"/>
                            <span>Tuyển dụng VPBank</span>
                        </div>
                    </Link>
                    <Link href="https://www.linkedin.com/company/vpbank" target="_blank" rel="noopener">
                        <div className="flex items-center gap-2 text-white text-xs md:text-sm hover:text-[#36ffba] transition-colors">
                            <Image src="/linkedin.png" alt="LinkedIn" width={24} height={24} className="md:w-[28px] md:h-[28px]"/>
                            <span>VPBank</span>
                        </div>
                    </Link>
                    <div className="flex items-center gap-2 text-white text-xs md:text-sm">
                        <Image src="/email.png" alt="Mail" width={24} height={24} className="md:w-[28px] md:h-[28px]"/>
                        <span className="break-all">tuyendung@vpbank.com.vn</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
