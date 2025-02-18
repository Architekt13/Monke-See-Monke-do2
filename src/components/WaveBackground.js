import React from 'react';
import './WaveBackground.css';

const WaveBackground = () => {
  const generateWaveLines = () => {
    const lines = [];
    const numberOfLines = 60;
    const lineSpacing = 30;
    
    // Calculate five complete periods of the sine wave
    const generateSineWavePath = (yOffset, i) => {
      const points = [];
      const segments = 160; // Increased segments for five periods
      const frequency = 10 * Math.PI; // Five complete periods
      const amplitude = 40;
      const phaseShift = i * 0.1;
      
      for (let x = 0; x <= segments; x++) {
        const xPos = (x / segments) * 3200;
        const yPos = yOffset + Math.sin(frequency * (x / segments) + phaseShift) * amplitude;
        points.push(`${x === 0 ? 'M' : 'L'} ${xPos} ${yPos}`);
      }
      
      return points.join(' ');
    };

    for (let i = 0; i < numberOfLines; i++) {
      const yOffset = (i * lineSpacing) + 25;
      lines.push(
        <path
          key={i}
          d={generateSineWavePath(yOffset, i)}
          stroke="rgba(255, 255, 255, 0.15)"
          strokeWidth="2.5"
          fill="none"
          className={`wave-line wave-line-${i}`}
          style={{'--line-index': i}}
        />
      );
    }
    return lines;
  };

  return (
    <div className="wave-background">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 3200 2000"
        preserveAspectRatio="xMidYMid slice"
      >
        <g className="waves">{generateWaveLines()}</g>
      </svg>
    </div>
  );
};

export default WaveBackground;
