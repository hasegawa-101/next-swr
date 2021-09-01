module.exports = {
  '.mx-full': {
    marginLeft: 'calc(50% - 50vw)',
    marginRight: 'calc(50% - 50vw)',
  },
  '.ml-full': {
    marginLeft: 'calc(50% - 50vw)',
  },
  '.mr-full': {
    marginRight: 'calc(50% - 50vw)',
  },
  '.px-full': {
    paddingLeft: 'calc(50vw - 50%)',
    paddingRight: 'calc(50vw - 50%)',
  },
  '.pl-full': {
    paddingLeft: 'calc(50vw - 50%)',
  },
  '.pr-full': {
    paddingRight: 'calc(50vw - 50%)',
  },
  '.transform-none': {
    transform: 'none'
  },
  '.position': {
    position:'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
  },
  '.position-x': {
    position:'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
  },
  '.position-y': {
    position:'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
  },
  // ▲
  '.chevron-top': {
    clipPath: 'polygon(0 100%, 50% 0, 100% 100%)'
  },
  // ▶︎
  '.chevron-right': {
    clipPath: 'polygon(0 0, 100% 50%, 0 100%)'
  },
  // ▼
  '.chevron-bottom': {
    clipPath: 'polygon(0 0, 100% 0, 50% 100%)'
  },
  // ◀︎
  '.chevron-left': {
    clipPath: 'polygon(0 50%, 100% 0, 100% 100%)'
  },
};
