import ContentLoader from "react-content-loader";

const Skeleton = () => (
  <ContentLoader
    speed={1}
    width={124}
    height={295}
    viewBox="0 0 170 295"
    backgroundColor="#f6f4f2"
    foregroundColor="#ecebeb"
  >
    <rect x="32" y="0" rx="5" ry="5" width="110" height="145" />
    <rect x="24" y="163" rx="5" ry="5" width="125" height="46" />
    <rect x="24" y="220" rx="5" ry="5" width="66" height="31" />
    <rect x="24" y="262" rx="5" ry="5" width="86" height="25" />
    <rect x="118" y="262" rx="5" ry="5" width="31" height="25" />
  </ContentLoader>  
);

export default Skeleton;
