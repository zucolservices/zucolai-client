import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const AnimatedLogo = () => {
  return (
    <motion.div
      className="flex items-center gap-3 cursor-pointer"
      whileHover="hover"
      initial="initial"
      variants={{
        initial: { x: 0 },
        hover: { x: 0 },
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <Link href="/">
        <Image
          src="/icons/Logo.png"
          alt="Zucol.ai"
          width={39.739437103271484}
          height={40}
          priority
        />
      </Link>
      <div className="flex items-center gap-1 overflow-hidden">
        <motion.div
          variants={{
            initial: { x: 0, opacity: 1 },
            hover: { x: -75.36, opacity: 0 },
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <Image
            src="/icons/ZucolLogo.png"
            alt="Zucol.ai"
            width={75.36}
            height={18.44}
            priority
          />
        </motion.div>
        <motion.div
          variants={{
            initial: { x: 0, opacity: 1 },
            hover: { x: -75.36, opacity: 1 },
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <Image
            src="/images/aismall.png"
            alt="Zucol.ai"
            width={33.8}
            height={20}
            priority
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AnimatedLogo;