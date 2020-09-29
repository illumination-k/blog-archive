const AmpAvator = ({ width, height, src, alt }) => {
  return (
    <amp-img
      width={width}
      height={height}
      src={src}
      className="avator"
      alt={alt}
    />
  );
};

export default AmpAvator;
