export default function F16_31() {

    const width = 45;
    const height = width;

  return (
    <svg width={width} height={height} xmlns="http://www.w3.org/2000/svg">
  
  <rect
    x="0"
    y="0"
    width={width}
    height={height}
    fill="white"
    stroke="white"
    strokeWidth="10" 
    rx="10"
  />

  <rect
    x="3"
    y="3"
    width={width - 6}
    height={height - 6}
    fill="white"
    stroke="black"
    strokeWidth="3"
    rx="2"
  />
</svg>

  );
}
