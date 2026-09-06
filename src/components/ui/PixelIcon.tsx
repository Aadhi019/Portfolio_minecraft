import React from 'react';
import grassBlock3d from '../../assets/grass_block_3d.png';
import playerHeadImg from '../../assets/player_head.png';
import enchantingTable3d from '../../assets/enchanting_table_3d.png';
import chest3d from '../../assets/chest_3d.png';
import craftingTable3d from '../../assets/crafting_table_3d.png';
import experienceBottleImg from '../../assets/experience_bottle.png';
import slimeballImg from '../../assets/slimeball.png';
import ghastTearImg from '../../assets/ghast_tear.png';
import enderPearlImg from '../../assets/ender_pearl.png';
import redstoneDustImg from '../../assets/redstone_dust.png';

interface PixelIconProps {
  name: 
    | 'grass_block' 
    | 'player_head' 
    | 'enchanted_book' 
    | 'enchanting_table'
    | 'chest' 
    | 'compass' 
    | 'crafting_table'
    | 'experience_bottle'
    | 'nether_star' 
    | 'emerald' 
    | 'slimeball'
    | 'book_quill' 
    | 'ghast_tear'
    | 'ender_pearl'
    | 'redstone'
    | 'redstone_dust'
    | 'heart'
    | 'heart_empty'
    | 'heart_hardcore'
    | 'heart_hardcore_empty'
    | 'hunger'
    | 'hunger_empty'
    | 'armor'
    | 'redstone'
    | 'diamond'
    | 'feather'
    | 'scroll'
    | 'iron_ingot'
    | 'clock';
  size?: number;
  className?: string;
}

export const PixelIcon: React.FC<PixelIconProps> = ({ name, size = 28, className = '' }) => {
  switch (name) {
    case 'grass_block':
      return (
        <img
          src={grassBlock3d}
          alt="Grass Block"
          style={{ width: size, height: size }}
          className={`object-contain [image-rendering:pixelated] drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)] ${className}`}
        />
      );

    case 'player_head':
      return (
        <img
          src={playerHeadImg}
          alt="Player Head"
          style={{ width: size, height: size }}
          className={`object-contain [image-rendering:pixelated] rounded-[2px] drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)] ${className}`}
        />
      );

    case 'enchanted_book':
    case 'enchanting_table':
      return (
        <img
          src={enchantingTable3d}
          alt="Enchanting Table"
          style={{ width: size, height: size }}
          className={`object-contain [image-rendering:pixelated] drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)] ${className}`}
        />
      );

    case 'chest':
      return (
        <img
          src={chest3d}
          alt="Chest"
          style={{ width: size, height: size }}
          className={`object-contain [image-rendering:pixelated] drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)] ${className}`}
        />
      );

    case 'crafting_table':
      return (
        <img
          src={craftingTable3d}
          alt="Crafting Table"
          style={{ width: size, height: size }}
          className={`object-contain [image-rendering:pixelated] drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)] ${className}`}
        />
      );

    case 'redstone':
    case 'redstone_dust':
    case 'compass':
      return (
        <img
          src={redstoneDustImg}
          alt="Redstone Dust"
          style={{ width: size, height: size }}
          className={`object-contain [image-rendering:pixelated] drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)] ${className}`}
        />
      );

    case 'experience_bottle':
    case 'nether_star':
      return (
        <img
          src={experienceBottleImg}
          alt="Experience Bottle"
          style={{ width: size, height: size }}
          className={`object-contain [image-rendering:pixelated] drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)] ${className}`}
        />
      );

    case 'slimeball':
    case 'emerald':
      return (
        <img
          src={slimeballImg}
          alt="Slimeball"
          style={{ width: size, height: size }}
          className={`object-contain [image-rendering:pixelated] drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)] ${className}`}
        />
      );

    case 'ghast_tear':
    case 'book_quill':
      return (
        <img
          src={ghastTearImg}
          alt="Ghast Tear"
          style={{ width: size, height: size }}
          className={`object-contain [image-rendering:pixelated] drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)] ${className}`}
        />
      );

    case 'ender_pearl':
      return (
        <img
          src={enderPearlImg}
          alt="Ender Pearl"
          style={{ width: size, height: size }}
          className={`object-contain [image-rendering:pixelated] drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)] ${className}`}
        />
      );

    case 'heart_hardcore':
      return (
        <svg width={size} height={size} viewBox="0 0 9 9" shapeRendering="crispEdges" className={className}>
          {/* Black Outline (#000000) from user reference */}
          {/* Row 0 */}
          <rect x="2" y="0" width="2" height="1" fill="#000000" />
          <rect x="5" y="0" width="2" height="1" fill="#000000" />
          {/* Row 1 */}
          <rect x="1" y="1" width="1" height="1" fill="#000000" />
          <rect x="4" y="1" width="1" height="1" fill="#000000" />
          <rect x="7" y="1" width="1" height="1" fill="#000000" />
          {/* Row 2 */}
          <rect x="0" y="2" width="1" height="1" fill="#000000" />
          <rect x="8" y="2" width="1" height="1" fill="#000000" />
          {/* Row 3 */}
          <rect x="0" y="3" width="1" height="1" fill="#000000" />
          <rect x="8" y="3" width="1" height="1" fill="#000000" />
          {/* Row 4 */}
          <rect x="0" y="4" width="1" height="1" fill="#000000" />
          <rect x="8" y="4" width="1" height="1" fill="#000000" />
          {/* Row 5 */}
          <rect x="1" y="5" width="1" height="1" fill="#000000" />
          <rect x="7" y="5" width="1" height="1" fill="#000000" />
          {/* Row 6 */}
          <rect x="2" y="6" width="1" height="1" fill="#000000" />
          <rect x="6" y="6" width="1" height="1" fill="#000000" />
          {/* Row 7 */}
          <rect x="3" y="7" width="1" height="1" fill="#000000" />
          <rect x="5" y="7" width="1" height="1" fill="#000000" />
          {/* Row 8 */}
          <rect x="4" y="8" width="1" height="1" fill="#000000" />

          {/* Vibrant Red Fill (#ff0000) from user reference */}
          {/* Row 1 */}
          <rect x="2" y="1" width="2" height="1" fill="#ff0000" />
          <rect x="5" y="1" width="2" height="1" fill="#ff0000" />
          {/* Row 2 */}
          <rect x="1" y="2" width="1" height="1" fill="#ff0000" />
          <rect x="3" y="2" width="3" height="1" fill="#ff0000" />
          <rect x="7" y="2" width="1" height="1" fill="#ff0000" />
          {/* Row 3 */}
          <rect x="1" y="3" width="1" height="1" fill="#ff0000" />
          <rect x="4" y="3" width="1" height="1" fill="#ff0000" />
          <rect x="7" y="3" width="1" height="1" fill="#ff0000" />
          {/* Row 4 */}
          <rect x="2" y="4" width="1" height="1" fill="#ff0000" />
          <rect x="4" y="4" width="1" height="1" fill="#ff0000" />
          <rect x="6" y="4" width="1" height="1" fill="#ff0000" />
          {/* Row 5 */}
          <rect x="3" y="5" width="3" height="1" fill="#ff0000" />
          {/* Row 6 */}
          <rect x="4" y="6" width="1" height="1" fill="#ff0000" />

          {/* Dark Hardcore Eye Slashes (#5b0f00) from user reference */}
          {/* Row 2 */}
          <rect x="2" y="2" width="1" height="1" fill="#5b0f00" />
          <rect x="6" y="2" width="1" height="1" fill="#5b0f00" />
          {/* Row 3 */}
          <rect x="2" y="3" width="2" height="1" fill="#5b0f00" />
          <rect x="5" y="3" width="2" height="1" fill="#5b0f00" />
          {/* Row 4 */}
          <rect x="3" y="4" width="1" height="1" fill="#5b0f00" />
          <rect x="5" y="4" width="1" height="1" fill="#5b0f00" />

          {/* Dark Crimson Bottom Shading (#980000) from user reference */}
          {/* Row 4 */}
          <rect x="1" y="4" width="1" height="1" fill="#980000" />
          <rect x="7" y="4" width="1" height="1" fill="#980000" />
          {/* Row 5 */}
          <rect x="2" y="5" width="1" height="1" fill="#980000" />
          <rect x="6" y="5" width="1" height="1" fill="#980000" />
          {/* Row 6 */}
          <rect x="3" y="6" width="1" height="1" fill="#980000" />
          <rect x="5" y="6" width="1" height="1" fill="#980000" />
          {/* Row 7 */}
          <rect x="4" y="7" width="1" height="1" fill="#980000" />
        </svg>
      );

    case 'heart_hardcore_empty':
      return (
        <svg width={size} height={size} viewBox="0 0 9 9" shapeRendering="crispEdges" className={className}>
          {/* Black Outline */}
          <rect x="2" y="0" width="2" height="1" fill="#000000" />
          <rect x="5" y="0" width="2" height="1" fill="#000000" />
          <rect x="1" y="1" width="1" height="1" fill="#000000" />
          <rect x="4" y="1" width="1" height="1" fill="#000000" />
          <rect x="7" y="1" width="1" height="1" fill="#000000" />
          <rect x="0" y="2" width="1" height="1" fill="#000000" />
          <rect x="8" y="2" width="1" height="1" fill="#000000" />
          <rect x="0" y="3" width="1" height="1" fill="#000000" />
          <rect x="8" y="3" width="1" height="1" fill="#000000" />
          <rect x="0" y="4" width="1" height="1" fill="#000000" />
          <rect x="8" y="4" width="1" height="1" fill="#000000" />
          <rect x="1" y="5" width="1" height="1" fill="#000000" />
          <rect x="7" y="5" width="1" height="1" fill="#000000" />
          <rect x="2" y="6" width="1" height="1" fill="#000000" />
          <rect x="6" y="6" width="1" height="1" fill="#000000" />
          <rect x="3" y="7" width="1" height="1" fill="#000000" />
          <rect x="5" y="7" width="1" height="1" fill="#000000" />
          <rect x="4" y="8" width="1" height="1" fill="#000000" />

          {/* Dark Stone Fill */}
          <rect x="2" y="1" width="2" height="1" fill="#3f3f46" />
          <rect x="5" y="1" width="2" height="1" fill="#3f3f46" />
          <rect x="1" y="2" width="1" height="1" fill="#3f3f46" />
          <rect x="3" y="2" width="3" height="1" fill="#3f3f46" />
          <rect x="7" y="2" width="1" height="1" fill="#3f3f46" />
          <rect x="1" y="3" width="1" height="1" fill="#3f3f46" />
          <rect x="4" y="3" width="1" height="1" fill="#3f3f46" />
          <rect x="7" y="3" width="1" height="1" fill="#3f3f46" />
          <rect x="2" y="4" width="1" height="1" fill="#3f3f46" />
          <rect x="4" y="4" width="1" height="1" fill="#3f3f46" />
          <rect x="6" y="4" width="1" height="1" fill="#3f3f46" />
          <rect x="3" y="5" width="3" height="1" fill="#3f3f46" />
          <rect x="4" y="6" width="1" height="1" fill="#3f3f46" />

          {/* Dark Charcoal Eye Imprint */}
          <rect x="2" y="2" width="1" height="1" fill="#18181b" />
          <rect x="6" y="2" width="1" height="1" fill="#18181b" />
          <rect x="2" y="3" width="2" height="1" fill="#18181b" />
          <rect x="5" y="3" width="2" height="1" fill="#18181b" />
          <rect x="3" y="4" width="1" height="1" fill="#18181b" />
          <rect x="5" y="4" width="1" height="1" fill="#18181b" />

          {/* Shadow Edge */}
          <rect x="1" y="4" width="1" height="1" fill="#27272a" />
          <rect x="7" y="4" width="1" height="1" fill="#27272a" />
          <rect x="2" y="5" width="1" height="1" fill="#27272a" />
          <rect x="6" y="5" width="1" height="1" fill="#27272a" />
          <rect x="3" y="6" width="1" height="1" fill="#27272a" />
          <rect x="5" y="6" width="1" height="1" fill="#27272a" />
          <rect x="4" y="7" width="1" height="1" fill="#27272a" />
        </svg>
      );

    case 'heart':
      return (
        <svg width={size} height={size} viewBox="0 0 9 9" shapeRendering="crispEdges" className={className}>
          {/* Black Outline (#000000) from user reference */}
          {/* Row 0 */}
          <rect x="2" y="0" width="2" height="1" fill="#000000" />
          <rect x="5" y="0" width="2" height="1" fill="#000000" />
          {/* Row 1 */}
          <rect x="1" y="1" width="1" height="1" fill="#000000" />
          <rect x="4" y="1" width="1" height="1" fill="#000000" />
          <rect x="7" y="1" width="1" height="1" fill="#000000" />
          {/* Row 2 */}
          <rect x="0" y="2" width="1" height="1" fill="#000000" />
          <rect x="8" y="2" width="1" height="1" fill="#000000" />
          {/* Row 3 */}
          <rect x="0" y="3" width="1" height="1" fill="#000000" />
          <rect x="8" y="3" width="1" height="1" fill="#000000" />
          {/* Row 4 */}
          <rect x="0" y="4" width="1" height="1" fill="#000000" />
          <rect x="8" y="4" width="1" height="1" fill="#000000" />
          {/* Row 5 */}
          <rect x="1" y="5" width="1" height="1" fill="#000000" />
          <rect x="7" y="5" width="1" height="1" fill="#000000" />
          {/* Row 6 */}
          <rect x="2" y="6" width="1" height="1" fill="#000000" />
          <rect x="6" y="6" width="1" height="1" fill="#000000" />
          {/* Row 7 */}
          <rect x="3" y="7" width="1" height="1" fill="#000000" />
          <rect x="5" y="7" width="1" height="1" fill="#000000" />
          {/* Row 8 */}
          <rect x="4" y="8" width="1" height="1" fill="#000000" />

          {/* Vibrant Red Fill (#ff0000) from user reference */}
          {/* Row 1 */}
          <rect x="2" y="1" width="2" height="1" fill="#ff0000" />
          <rect x="5" y="1" width="2" height="1" fill="#ff0000" />
          {/* Row 2 */}
          <rect x="1" y="2" width="1" height="1" fill="#ff0000" />
          <rect x="3" y="2" width="3" height="1" fill="#ff0000" />
          <rect x="7" y="2" width="1" height="1" fill="#ff0000" />
          {/* Row 3 */}
          <rect x="1" y="3" width="1" height="1" fill="#ff0000" />
          <rect x="4" y="3" width="1" height="1" fill="#ff0000" />
          <rect x="7" y="3" width="1" height="1" fill="#ff0000" />
          {/* Row 4 */}
          <rect x="2" y="4" width="1" height="1" fill="#ff0000" />
          <rect x="4" y="4" width="1" height="1" fill="#ff0000" />
          <rect x="6" y="4" width="1" height="1" fill="#ff0000" />
          {/* Row 5 */}
          <rect x="3" y="5" width="3" height="1" fill="#ff0000" />
          {/* Row 6 */}
          <rect x="4" y="6" width="1" height="1" fill="#ff0000" />

          {/* Dark Eye Markings (#5b0f00) from user reference */}
          {/* Row 2 */}
          <rect x="2" y="2" width="1" height="1" fill="#5b0f00" />
          <rect x="6" y="2" width="1" height="1" fill="#5b0f00" />
          {/* Row 3 */}
          <rect x="2" y="3" width="2" height="1" fill="#5b0f00" />
          <rect x="5" y="3" width="2" height="1" fill="#5b0f00" />
          {/* Row 4 */}
          <rect x="3" y="4" width="1" height="1" fill="#5b0f00" />
          <rect x="5" y="4" width="1" height="1" fill="#5b0f00" />

          {/* Dark Crimson Bottom Shading (#980000) from user reference */}
          {/* Row 4 */}
          <rect x="1" y="4" width="1" height="1" fill="#980000" />
          <rect x="7" y="4" width="1" height="1" fill="#980000" />
          {/* Row 5 */}
          <rect x="2" y="5" width="1" height="1" fill="#980000" />
          <rect x="6" y="5" width="1" height="1" fill="#980000" />
          {/* Row 6 */}
          <rect x="3" y="6" width="1" height="1" fill="#980000" />
          <rect x="5" y="6" width="1" height="1" fill="#980000" />
          {/* Row 7 */}
          <rect x="4" y="7" width="1" height="1" fill="#980000" />
        </svg>
      );

    case 'heart_empty':
      return (
        <svg width={size} height={size} viewBox="0 0 9 9" shapeRendering="crispEdges" className={className}>
          <rect x="1" y="0" width="2" height="1" fill="#000000" />
          <rect x="5" y="0" width="2" height="1" fill="#000000" />
          <rect x="0" y="1" width="1" height="2" fill="#000000" />
          <rect x="3" y="1" width="1" height="1" fill="#000000" />
          <rect x="4" y="1" width="1" height="1" fill="#000000" />
          <rect x="7" y="1" width="1" height="2" fill="#000000" />
          <rect x="0" y="3" width="1" height="2" fill="#000000" />
          <rect x="8" y="3" width="1" height="2" fill="#000000" />
          <rect x="1" y="5" width="1" height="1" fill="#000000" />
          <rect x="7" y="5" width="1" height="1" fill="#000000" />
          <rect x="2" y="6" width="1" height="1" fill="#000000" />
          <rect x="6" y="6" width="1" height="1" fill="#000000" />
          <rect x="3" y="7" width="1" height="1" fill="#000000" />
          <rect x="5" y="7" width="1" height="1" fill="#000000" />
          <rect x="4" y="8" width="1" height="1" fill="#000000" />
          <rect x="1" y="1" width="2" height="4" fill="#3f3f46" />
          <rect x="3" y="2" width="3" height="4" fill="#27272a" />
          <rect x="5" y="1" width="2" height="4" fill="#3f3f46" />
          <rect x="2" y="5" width="5" height="1" fill="#18181b" />
        </svg>
      );

    case 'hunger':
      return (
        <svg width={size} height={size} viewBox="0 0 9 9" shapeRendering="crispEdges" className={className}>
          {/* Black Outline (#000000) */}
          <rect x="2" y="0" width="2" height="1" fill="#000000" />
          <rect x="1" y="1" width="1" height="1" fill="#000000" />
          <rect x="4" y="1" width="1" height="1" fill="#000000" />
          <rect x="0" y="2" width="1" height="1" fill="#000000" />
          <rect x="5" y="2" width="1" height="1" fill="#000000" />
          <rect x="0" y="3" width="1" height="1" fill="#000000" />
          <rect x="6" y="3" width="1" height="1" fill="#000000" />
          <rect x="1" y="4" width="1" height="1" fill="#000000" />
          <rect x="6" y="4" width="1" height="1" fill="#000000" />
          <rect x="2" y="5" width="1" height="1" fill="#000000" />
          <rect x="6" y="5" width="1" height="1" fill="#000000" />
          <rect x="3" y="6" width="3" height="1" fill="#000000" />
          <rect x="7" y="6" width="2" height="1" fill="#000000" />
          <rect x="6" y="7" width="1" height="1" fill="#000000" />
          <rect x="8" y="7" width="1" height="1" fill="#000000" />
          <rect x="6" y="8" width="2" height="1" fill="#000000" />

          {/* Bright Red Meat (#e53935) */}
          <rect x="2" y="1" width="1" height="1" fill="#e53935" />
          <rect x="1" y="2" width="1" height="1" fill="#e53935" />
          <rect x="3" y="2" width="1" height="1" fill="#e53935" />
          <rect x="2" y="3" width="1" height="1" fill="#e53935" />

          {/* Dark Red Meat (#a62927) */}
          <rect x="3" y="1" width="1" height="1" fill="#a62927" />
          <rect x="1" y="3" width="1" height="1" fill="#a62927" />

          {/* Bone Marrow & Joint (#ffe0b2) */}
          <rect x="2" y="2" width="1" height="1" fill="#ffe0b2" />
          <rect x="6" y="6" width="1" height="1" fill="#ffe0b2" />

          {/* Light Bone Tip (#fff3e0) */}
          <rect x="7" y="7" width="1" height="1" fill="#fff3e0" />

          {/* Light Golden Cooked Meat (#c07f39) */}
          <rect x="4" y="2" width="1" height="1" fill="#c07f39" />
          <rect x="3" y="3" width="1" height="1" fill="#c07f39" />
          <rect x="5" y="3" width="1" height="1" fill="#c07f39" />

          {/* Savory Cooked Meat Body (#ac7233) */}
          <rect x="4" y="3" width="1" height="1" fill="#ac7233" />
          <rect x="4" y="4" width="2" height="1" fill="#ac7233" />

          {/* Medium Roasted Meat (#9a662e) */}
          <rect x="3" y="4" width="1" height="1" fill="#9a662e" />
          <rect x="4" y="5" width="2" height="1" fill="#9a662e" />

          {/* Dark Roasted Meat Shading (#7c5325) */}
          <rect x="2" y="4" width="1" height="1" fill="#7c5325" />
          <rect x="3" y="5" width="1" height="1" fill="#7c5325" />
        </svg>
      );

    case 'hunger_empty':
      return (
        <svg width={size} height={size} viewBox="0 0 9 9" shapeRendering="crispEdges" className={className}>
          {/* Black Outline (#000000) */}
          <rect x="2" y="0" width="2" height="1" fill="#000000" />
          <rect x="1" y="1" width="1" height="1" fill="#000000" />
          <rect x="4" y="1" width="1" height="1" fill="#000000" />
          <rect x="0" y="2" width="1" height="1" fill="#000000" />
          <rect x="5" y="2" width="1" height="1" fill="#000000" />
          <rect x="0" y="3" width="1" height="1" fill="#000000" />
          <rect x="6" y="3" width="1" height="1" fill="#000000" />
          <rect x="1" y="4" width="1" height="1" fill="#000000" />
          <rect x="6" y="4" width="1" height="1" fill="#000000" />
          <rect x="2" y="5" width="1" height="1" fill="#000000" />
          <rect x="6" y="5" width="1" height="1" fill="#000000" />
          <rect x="3" y="6" width="3" height="1" fill="#000000" />
          <rect x="7" y="6" width="2" height="1" fill="#000000" />
          <rect x="6" y="7" width="1" height="1" fill="#000000" />
          <rect x="8" y="7" width="1" height="1" fill="#000000" />
          <rect x="6" y="8" width="2" height="1" fill="#000000" />

          {/* Dark Charcoal Empty Interior */}
          <rect x="2" y="1" width="2" height="1" fill="#27272a" />
          <rect x="1" y="2" width="4" height="1" fill="#27272a" />
          <rect x="1" y="3" width="5" height="1" fill="#27272a" />
          <rect x="2" y="4" width="4" height="1" fill="#27272a" />
          <rect x="3" y="5" width="3" height="1" fill="#27272a" />
          <rect x="6" y="6" width="1" height="1" fill="#3f3f46" />
          <rect x="7" y="7" width="1" height="1" fill="#52525b" />
        </svg>
      );

    case 'armor':
      return (
        <svg width={size} height={size} viewBox="0 0 9 9" shapeRendering="crispEdges" className={className}>
          {/* Chestplate Outline */}
          <rect x="2" y="0" width="2" height="1" fill="#000000" />
          <rect x="5" y="0" width="2" height="1" fill="#000000" />
          <rect x="1" y="1" width="1" height="3" fill="#000000" />
          <rect x="7" y="1" width="1" height="3" fill="#000000" />
          <rect x="2" y="4" width="1" height="3" fill="#000000" />
          <rect x="6" y="4" width="1" height="3" fill="#000000" />
          <rect x="3" y="7" width="3" height="1" fill="#000000" />
          <rect x="4" y="1" width="1" height="1" fill="#000000" />

          {/* Iron Plate Silver & Highlight */}
          <rect x="2" y="1" width="2" height="3" fill="#e2e8f0" />
          <rect x="5" y="1" width="2" height="3" fill="#cbd5e1" />
          <rect x="3" y="2" width="3" height="4" fill="#94a3b8" />
          <rect x="3" y="6" width="3" height="1" fill="#64748b" />
          <rect x="2" y="2" width="1" height="2" fill="#f8fafc" />
        </svg>
      );

    default:
      return null;
  }
};
