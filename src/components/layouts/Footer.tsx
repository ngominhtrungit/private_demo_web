import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer
            className="w-full pt-6 pb-3 px-4"
            style={{
                background: 'linear-gradient(90deg, #1366B3 0%, #31B675 100%)',
                borderBottomLeftRadius: '12px',
                borderBottomRightRadius: '12px'
            }}
        >
            <div className="w-full flex flex-col items-center">
                <h3 className="text-[#36ffba] font-semibold text-[26px] mb-1 tracking-wide text-center">
                    VPBANK TECHNOLOGY HACKATHON 2025
                </h3>
                <span className="text-white text-lg mb-4 mt-1 font-bold text-center">
          Contact
        </span>
                <div className="flex flex-row items-center gap-8">
                    <Link href="https://www.facebook.com/tuyendung.vpbank" target="_blank" rel="noopener">
                        <div className="flex items-center gap-2 text-white text-sm">
                            <Image src="/facebook.png" alt="Facebook" width={28} height={28}/>
                            <span>Tuyển dụng VPBank</span>
                        </div>
                    </Link>
                    <Link href="https://www.linkedin.com/company/vpbank" target="_blank" rel="noopener">
                        <div className="flex items-center gap-2 text-white text-sm">
                            <Image src="/linkedin.png" alt="LinkedIn" width={28} height={28}/>
                            <span>VPBank</span>
                        </div>
                    </Link>
                    <div className="flex items-center gap-2 text-white text-sm">
                        <Image src="/email.png" alt="Mail" width={28} height={28}/>
                        <span>tuyendung@vpbank.com.vn</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
