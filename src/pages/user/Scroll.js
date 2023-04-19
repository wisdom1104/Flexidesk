import { useRef } from 'react';

function Scroll() {
  const imageRef = useRef(null);

  const startAnimation = () => {

    // Scroll Timeline 객체 생성
    const tl = new Scroll({
      scrollSource: document.scrollingElement,
      orientation: 'block',
      startScrollOffset: 0,
      endScrollOffset: '100%',
      timeRange: 2000,
    });

    // 애니메이션 키프레임 생성
    const keyframes = [
      { transform: 'translateY(200px)', opacity: 0 },
      { transform: 'translateY(0)', opacity: 1 },
    ]

    // 애니메이션 객체 생성
    const imageAnimation = new Animation(
      new KeyframeEffect(imageRef.current, keyframes, { duration: 2000 }),
      document.timeline
    );

    // 애니메이션을 Scroll Timeline에 추가
    tl.addAnimation(imageAnimation);
  };

  return (
    <div style={{ height: '200vh' }} onScroll={startAnimation}>
      <div style={{ height: '100vh' }}></div>
      <div style={{ height: '100vh' }}>
        <img
          ref={imageRef}
          src="http://placeimg.com/640/480/any"
          alt="random image"
          style={{ opacity: 0 }}
        />
      </div>
      <div style={{ height: '100vh' }}></div>
    </div>
  );
}

export default Scroll;