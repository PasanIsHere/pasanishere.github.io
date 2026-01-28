
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { motion, useScroll } from 'framer-motion';

export const ScrollingDecorations: React.FC = () => {
  const { scrollYProgress } = useScroll();

  return (
    <div className="fixed inset-0 pointer-events-none z-[60] overflow-hidden">
      {/* Subtle Top Progress Bar */}
      <div className="absolute top-0 left-0 w-full h-1 bg-stone-200/30">
        <motion.div 
          style={{ scaleX: scrollYProgress, transformOrigin: '0%' }}
          className="h-full bg-nobel-gold shadow-[0_0_8px_rgba(197,160,89,0.5)]"
        />
      </div>
    </div>
  );
};
