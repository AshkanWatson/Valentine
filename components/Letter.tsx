"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./Letter.module.css";

export function Letter() {
  const [showFinal, setShowFinal] = useState(false);
  const [catImage, setCatImage] = useState("./Duck.gif");
  const [noBtnPos, setNoBtnPos] = useState({ x: 0, y: 0 });
  const letterWindowRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsOpen(true);
    }, 50);
  }, []);

  const handleNoHover = () => {
    const min = 200;
    const max = 200;
    const distance = Math.random() * (max - min) + min;
    const angle = Math.random() * Math.PI * 2;

    const moveX = Math.cos(angle) * distance;
    const moveY = Math.sin(angle) * distance;

    setNoBtnPos({ x: moveX, y: moveY });

    // Swap cat gif to "no" reaction for 2ms
    setCatImage("./Duck.gif");
    setTimeout(() => {
      setCatImage("./Angry_Duck.gif");
    }, 2);
  };

  const handleYesClick = () => {
    setShowFinal(true);
    setCatImage("./Dancing_Duck.gif");
  };

  return (
    <div className={styles.letterContainer}>
      <div
        ref={letterWindowRef}
        className={`${styles.letterWindow} ${isOpen ? styles.open : ""} ${
          showFinal ? styles.final : ""
        }`}
      >
        <h1 className={styles.title}>
          {showFinal ? "Yippeeee!" : "Will you be my Valentine?"}
        </h1>

        <Image
          src={catImage || "./placeholder.gif"}
          alt="Duck"
          width={250}
          height={250}
          className={styles.cat}
          unoptimized
        />

        {!showFinal && (
          <div className={styles.buttons}>
            <button
              onClick={handleYesClick}
              className={styles.yesBtn}
              aria-label="Yes"
            >
              <img src="./yes.svg" alt="yes button" width={100} />
            </button>

            <div className={styles.noWrapper}>
              <button
                onMouseEnter={handleNoHover}
                className={styles.noBtn}
                style={{
                  transform: `translate(${noBtnPos.x}px, ${noBtnPos.y}px)`,
                }}
                aria-label="No"
              >
                <img src="./no.svg" alt="no button" width={100} />
              </button>
            </div>
          </div>
        )}

        {showFinal && (
          <p className={styles.finalText}>
            <strong>Valentine Date:</strong> If you say yes, we can plan a
            special date together! Maybe a pizza pazza, a movie night, or
            anything you love. I just want to spend time with you and make you
            happy 💖 <strong>so call me</strong>
          </p>
        )}
      </div>
    </div>
  );
}
