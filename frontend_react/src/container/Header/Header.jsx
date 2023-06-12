import React from 'react';
import { motion } from 'framer-motion';

import { AppWrap } from '../../wrapper';
import { images } from '../../constants';
import './Header.scss';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};

const Header = () => (
  <div className="app__header app__flex">
    <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className="app__header-info"
    >
      <div className="app__header-badge">
        <div className="badge-cmp app__flex">
          <span>👋</span>
          <div style={{ marginLeft: 20 }}>
            <p className="p-text">Hello, I am</p>
            <h1 className="head-text">AZMAT</h1>
          </div>
        </div>

        <div className="tag-cmp app__flex">
          <p className="p-text">App Developer</p>
          {/* <p className="p-text">A motivated and ambitious Computer Science and Engineering student at IIIT Agartala, I am dedicated to creating innovative solutions. I can tackle complex coding problems with confidence and efficiency because of my strong foundation in CS fundamentals, data structures, and algorithms.
With expertise in C++, C, Kotlin, and Java, I can approach development projects from a variety of perspectives, enabling me to find creative solutions.
I have designed and developed a number of impressive Android apps, including Taaza News, Notes App, and Quizzer. These projects demonstrate my expertise in Android development, UI design, and clean architecture using cutting-edge tools such as Jetpack Compose, Retrofit, and Room.
I am passionate about learning and growing, and I am always looking for new opportunities to apply my skills and broaden my knowledge. As a skilled communicator and collaborator, I work effectively with team members.
Looking for a talented, motivated developer who is committed to creating impactful solutions? Let's talk about how we can collaborate. Let's connect and discuss how I can help bring your vision to life.
</p> */}
          <p className="p-text">Freelancer</p>
        </div>
      </div>
    </motion.div>

    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5, delayChildren: 0.5 }}
      className="app__header-img"
    >
      <img src={images.profile1} alt="profile_bg" />
      <motion.img
        whileInView={{ scale: [0, 1] }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        src={images.circle}
        alt="profile_circle"
        className="overlay_circle"
      />
    </motion.div>

    <motion.div
      variants={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className="app__header-circles"
    >
      {[images.flutter, images.redux, images.sass].map((circle, index) => (
        <div className="circle-cmp app__flex" key={`circle-${index}`}>
          <img src={circle} alt="profile_bg" />
        </div>
      ))}
    </motion.div>
  </div>
);

export default AppWrap(Header, 'home');
// export default Header