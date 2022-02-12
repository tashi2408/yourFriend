import { useEffect, useRef, useState } from 'react';
import { SocialIcon } from 'react-social-icons';
const FloatingBar = () => {
  const [visible, setVisible] = useState(true);
  const niceRef = useRef();
  useEffect(() => {
    niceRef.current.style.opacity = visible ? 1 : 0;
    if (!visible) {
      setTimeout(() => (niceRef.current.style.display = 'none'), 300);
    }
  }, [visible]);
  return (
    <div className="floating-bar" ref={niceRef}>
      <SocialIcon url="https://facebook.com/" />
      <SocialIcon
        url={`https://api.whatsapp.com/send?text=${window.location}`}
      />
      <SocialIcon url="https://twitter.com/twitter/" />
      <SocialIcon url="https://linkedin.com/" />
      <span className="hide-click" onClick={() => setVisible(false)}>
        hide
      </span>
    </div>
  );
};

export default FloatingBar;
