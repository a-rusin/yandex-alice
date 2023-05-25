const transitionSettings = {
  duration: 0.65,
  type: "tween",
  ease: "easeOut",
};

export const fadeUp = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  visible: (custom) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: custom * 0.2,
      ...transitionSettings,
    },
  }),
};

export const fadeDown = {
  hidden: {
    y: -100,
    opacity: 0,
  },
  visible: (custom) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: custom * 0.2,
      ...transitionSettings,
    },
  }),
};

export const fadeRight = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: (custom) => ({
    x: 0,
    opacity: 1,
    transition: {
      delay: custom * 0.2,
      ...transitionSettings,
    },
  }),
};

export const fadeLeft = {
  hidden: {
    x: 200,
    opacity: 0,
  },
  visible: (custom) => ({
    x: 0,
    opacity: 1,
    transition: {
      delay: custom * 0.2,
      ...transitionSettings,
    },
  }),
};

export const zoomIn = {
  hidden: {
    scale: 0.5,
    opacity: 0,
  },
  visible: (custom) => ({
    scale: 1,
    opacity: 1,
    transition: {
      delay: custom * 0.2,
      ...transitionSettings,
    },
  }),
};
