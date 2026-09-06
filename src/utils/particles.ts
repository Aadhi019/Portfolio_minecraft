export interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;
  alpha: number;
  maxAlpha: number;
  fadeSpeed: number;
  shape?: 'square' | 'circle' | 'rune';
}

export function createBiomeParticles(
  biome: string,
  width: number,
  height: number,
  count: number = 40
): Particle[] {
  const particles: Particle[] = [];

  for (let i = 0; i < count; i++) {
    let color = 'rgba(255, 255, 255, 0.6)';
    let speedX = (Math.random() - 0.5) * 0.8;
    let speedY = (Math.random() - 0.5) * 0.8;
    let size = Math.random() * 4 + 2;
    let shape: 'square' | 'circle' | 'rune' = 'square';

    switch (biome) {
      case 'The End':
        color = Math.random() > 0.4 ? 'rgba(192, 132, 252, 0.8)' : 'rgba(232, 121, 249, 0.7)';
        speedY = -Math.random() * 1.2 - 0.3; // rising up
        shape = 'square';
        size = Math.random() * 4 + 2;
        break;

      case 'Snowy Peaks':
        color = 'rgba(240, 249, 255, 0.85)';
        speedX = (Math.random() - 0.2) * 1.5;
        speedY = Math.random() * 1.8 + 0.8; // falling down
        size = Math.random() * 3 + 2;
        shape = 'square';
        break;

      case 'Lush Caves':
        color = Math.random() > 0.5 ? 'rgba(244, 114, 182, 0.75)' : 'rgba(74, 222, 128, 0.75)';
        speedX = (Math.random() - 0.5) * 0.5;
        speedY = Math.random() * 0.6 + 0.2;
        shape = 'circle';
        size = Math.random() * 3 + 2;
        break;

      case 'Deep Dark':
        color = Math.random() > 0.4 ? 'rgba(34, 211, 238, 0.85)' : 'rgba(14, 116, 144, 0.65)';
        speedY = -Math.random() * 0.8 - 0.2;
        shape = 'square';
        size = Math.random() * 3.5 + 2;
        break;

      case 'Enchanting Table':
        color = Math.random() > 0.5 ? 'rgba(168, 85, 247, 0.85)' : 'rgba(216, 180, 254, 0.75)';
        speedX = (Math.random() - 0.5) * 1.2;
        speedY = (Math.random() - 0.5) * 1.2;
        shape = 'rune';
        size = Math.random() * 5 + 3;
        break;

      case 'Mineshaft':
        color = Math.random() > 0.4 ? 'rgba(251, 146, 60, 0.8)' : 'rgba(254, 215, 170, 0.6)';
        speedX = (Math.random() - 0.5) * 0.4;
        speedY = -Math.random() * 0.9 - 0.2; // rising ember
        shape = 'square';
        size = Math.random() * 3 + 1.5;
        break;

      case 'Village':
        color = 'rgba(52, 211, 153, 0.75)'; // emerald glimmer
        speedY = -Math.random() * 0.6 - 0.2;
        shape = 'square';
        size = Math.random() * 3.5 + 2;
        break;

      default: // Overworld
        color = Math.random() > 0.5 ? 'rgba(253, 224, 71, 0.7)' : 'rgba(255, 255, 255, 0.6)';
        speedX = (Math.random() - 0.5) * 0.6;
        speedY = -Math.random() * 0.5 - 0.2;
        shape = 'square';
        size = Math.random() * 3 + 2;
        break;
    }

    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      size,
      speedX,
      speedY,
      color,
      alpha: Math.random() * 0.8 + 0.2,
      maxAlpha: Math.random() * 0.4 + 0.6,
      fadeSpeed: Math.random() * 0.015 + 0.005,
      shape
    });
  }

  return particles;
}
