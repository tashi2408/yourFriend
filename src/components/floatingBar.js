import { useEffect, useRef, useState } from 'react';
import { SocialIcon } from 'react-social-icons';
import Links from '../socialLinks';
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
      {Links.map((link) => (
        <SocialIcon url={link.url} key={link.name} />
      ))}
      <span className="hide-click" onClick={() => setVisible(false)}>
        hide
      </span>
    </div>
  );
};

export default FloatingBar;
