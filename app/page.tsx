"use client";

import { Envelope } from "@/components/Envelope";
import { Letter } from "@/components/Letter";
import { useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  const [showLetter, setShowLetter] = useState(false);

  return (
    <>
      {!showLetter && (
        <div className={styles.envelopeContainer}>
          <Image
            src="/Yo_Duck.gif"
            alt="Cute cat"
            width={200}
            height={200}
            className={styles.sideCat}
            unoptimized
          />
          <Envelope onOpen={() => setShowLetter(true)} />
        </div>
      )}
      {showLetter && <Letter />}
    </>
  );
}
