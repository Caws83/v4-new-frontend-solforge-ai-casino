
import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";

// Minimal Blackjack component
export default function BlackjackGame() {
  return (
    <div className="text-center text-white mt-20">
      <h1 className="text-4xl font-bold text-purple-300 mb-6 animate-pulse">♠️ Blackjack Coming Soon</h1>
      <p className="text-lg">Work in progress... try your luck in Slots meanwhile!</p>
    </div>
  );
}

// ... (PokerGame and RouletteGame remain unchanged)
