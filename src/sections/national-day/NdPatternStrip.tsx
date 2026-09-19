interface NdPatternStripProps {
  src: string;
  tile: [width: number, height: number];
  height?: number;
  className?: string;
}

export function NdPatternStrip({ src, tile, height = 28, className }: NdPatternStripProps) {
  return (
    <div
      aria-hidden="true"
      className={className}
      style={{
        blockSize: height,
        backgroundImage: `url("${src}")`,
        backgroundRepeat: 'repeat-x',
        backgroundPosition: 'center',
        backgroundSize: `${tile[0]}px ${tile[1]}px`,
      }}
    />
  );
}
