'use client';

import Image from "next/image";
import styles from "./Envelope.module.css";

interface EnvelopeProps {
  onOpen: () => void;
}

export function Envelope({ onOpen }: EnvelopeProps) {
  return (
    <div className={styles.container} onClick={onOpen}>
      <Image
        src="/envelope.svg"
        alt="Envelope"
        width={250}
        height={200}
        className={styles.envelope}
        priority
      />
      <p>♡ Letter for You ♡</p>
    </div>
  );
}
