import { useBlockProps } from "@wordpress/block-editor";

import Settings from "./Settings/Settings";
import Style from "../Common/Style";
import Swiper from "../Common/Swiper";

const Edit = (props) => {
  const { attributes, setAttributes, clientId } = props;
  const { purposeType } = attributes;

  // shudhu page render kore notun korte kaj korar jonno 

  //     const [render, setRender] = useState(false);
//     useEffect(() => {
//       setRender(!render);
//     }, [attributes.options, slides.length]);
const id = `sscSlider-${clientId}`;
const Slider = () => <Swiper attributes={attributes} id={id} />;

  return (
    <>
      <Settings {...{ attributes, setAttributes }} />

      <div {...useBlockProps()}>
        <Style attributes={attributes} id={`block-${clientId}`} />
        

       <Slider/>
      </div>
    </>
  );
};
export default Edit;
