export const fromLeftVariants = {
  hidden: {
    opacity: 0,
    x: '-100vw',
    ease: 'easeInOut',
  },
  visible: {
    opacity: 1,
    x: '0',
    transition: {
      duration: 0.6,
      ease: 'easeInOut',
      type: 'spring',
    },
  },
};

export const fromRightVariants = {
  hidden: {
    opacity: 0,
    x: '100vw',
    ease: 'easeInOut',
  },
  visible: {
    opacity: 1,
    x: '0',
    transition: {
      delay: 0.2,
      duration: 0.6,
      ease: 'easeInOut',
      type: 'spring',
    },
  },
};
