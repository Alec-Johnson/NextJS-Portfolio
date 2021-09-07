exports.id = 544;
exports.ids = [544];
exports.modules = {

/***/ 44544:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ components_Card; }
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/components/AnimatePresence/index.js + 2 modules
var AnimatePresence = __webpack_require__(53869);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/render/dom/motion.js + 152 modules
var motion = __webpack_require__(35414);
// EXTERNAL MODULE: ./node_modules/popmotion/dist/es/utils/wrap.js
var wrap = __webpack_require__(79297);
;// CONCATENATED MODULE: ./src/components/Accordion/image-data.ts
const image_data_images = ['https://d33wubrfki0l68.cloudfront.net/dd23708ebc4053551bb33e18b7174e73b6e1710b/dea24/static/images/wallpapers/shared-colors@2x.png', 'https://d33wubrfki0l68.cloudfront.net/49de349d12db851952c5556f3c637ca772745316/cfc56/static/images/wallpapers/bridge-02@2x.png', 'https://d33wubrfki0l68.cloudfront.net/594de66469079c21fc54c14db0591305a1198dd6/3f4b1/static/images/wallpapers/bridge-01@2x.png'];
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(25675);
;// CONCATENATED MODULE: ./src/components/Accordion/index.tsx








const variants = {
  enter: direction => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: direction => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    };
  }
};
const swipeConfidenceThreshold = 10000;

const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

const Accordion = () => {
  const {
    0: [page, direction],
    1: setPage
  } = (0,react.useState)([0, 0]);
  const imageIndex = (0,wrap/* wrap */.r)(0, image_data_images.length, page);

  const paginate = newDirection => {
    setPage([page + newDirection, newDirection]);
  };

  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: "relative flex items-center justify-center w-96 md:z-0",
    children: [/*#__PURE__*/jsx_runtime.jsx(AnimatePresence/* AnimatePresence */.M, {
      initial: false,
      custom: direction,
      children: /*#__PURE__*/jsx_runtime.jsx(motion/* motion.div */.E.div, {
        custom: direction,
        variants: variants,
        animate: "center",
        exit: "exit",
        drag: "x",
        dragConstraints: {
          left: 0,
          right: 0
        },
        dragElastic: 1,
        onDragEnd: (e, {
          offset,
          velocity
        }) => {
          const swipe = swipePower(offset.x, velocity.x);

          if (swipe < -swipeConfidenceThreshold) {
            paginate(1);
          } else if (swipe > swipeConfidenceThreshold) {
            paginate(-1);
          }
        },
        children: /*#__PURE__*/jsx_runtime.jsx(next_image.default, {
          alt: "Project Image",
          width: 354,
          height: 200,
          src: image_data_images[imageIndex],
          className: "absolute object-fill rounded-lg md:rounded-br-lg md:rounded-tr-lg md:rounded-bl-none"
        })
      }, page)
    }), /*#__PURE__*/jsx_runtime.jsx("div", {
      className: "next",
      onClick: () => paginate(1),
      children: '‣'
    }), /*#__PURE__*/jsx_runtime.jsx("div", {
      className: "prev",
      onClick: () => paginate(-1),
      children: '‣'
    })]
  });
};

/* harmony default export */ var components_Accordion = (Accordion);
;// CONCATENATED MODULE: ./src/components/Card/index.tsx





const Card = project => {
  return /*#__PURE__*/jsx_runtime.jsx("article", {
    className: "relative flex flex-col my-5",
    children: /*#__PURE__*/jsx_runtime.jsx("div", {
      className: "relative p-4 bg-gray-900 rounded-lg dark:bg-gray-500",
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "relative flex flex-col items-center overflow-hidden rounded-lg md:bg-gray-500 md:dark:bg-gray-400 md:flex-row md:shadow-lg",
        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "relative z-0 order-1 rounded-lg md:order-2 md:rounded-none",
          children: [/*#__PURE__*/jsx_runtime.jsx("div", {
            className: "relative flex",
            children: /*#__PURE__*/jsx_runtime.jsx(components_Accordion, {})
          }), /*#__PURE__*/jsx_runtime.jsx("div", {
            className: "absolute inset-0 flex flex-col-reverse items-start justify-start h-full p-6 pb-6 md:hidden ",
            children: /*#__PURE__*/jsx_runtime.jsx("h3", {
              className: "w-auto p-1 mb-2 text-2xl font-bold leading-tight text-white rounded-lg frosted",
              children: project.name
            })
          }), /*#__PURE__*/jsx_runtime.jsx("svg", {
            className: "absolute top-0 hidden w-24 h-full -ml-12 text-gray-500 fill-current dark:text-gray-400 md:block",
            viewBox: "0 0 100 100",
            preserveAspectRatio: "none",
            children: /*#__PURE__*/jsx_runtime.jsx("polygon", {
              points: "50,0 100,0 50,100 0,100"
            })
          })]
        }), /*#__PURE__*/jsx_runtime.jsx("div", {
          className: "z-10 flex items-center order-2 w-full h-full -mt-6 md:order-1 md:w-1/2 md:mt-0 ",
          children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: "h-full p-4 mx-2 bg-gray-500 rounded-lg shadow-xl dark:bg-gray-400 md:pr-18 md:pl-10 md:py-0 md:m-0 md:rounded-none md:rounded-l-lg md:shadow-none",
            children: [/*#__PURE__*/jsx_runtime.jsx("h3", {
              className: "hidden text-2xl font-bold text-gray-300 dark:text-gray-700 md:block",
              children: project.name
            }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
              className: "flex my-2",
              children: [/*#__PURE__*/jsx_runtime.jsx("a", {
                href: project.live,
                className: "btn-card",
                children: "Live"
              }), /*#__PURE__*/jsx_runtime.jsx("a", {
                href: project.code,
                className: "btn-card",
                children: "Code"
              })]
            }), /*#__PURE__*/jsx_runtime.jsx("h2", {
              className: "mb-1 text-lg font-semibold text-gray-300 dark:text-gray-900",
              children: "Tech Stack:"
            }), /*#__PURE__*/jsx_runtime.jsx(jsx_runtime.Fragment, {
              children: project.tech.map((tec, i) => {
                return /*#__PURE__*/jsx_runtime.jsx("span", {
                  className: "span-card",
                  children: tec
                }, i);
              })
            }), /*#__PURE__*/jsx_runtime.jsx("p", {
              className: "justify-start px-2 py-1 mt-1 text-sm text-justify text-gray-300 bg-gray-800 rounded-lg dark:text-gray-200",
              children: project.desc
            })]
          })
        })]
      })
    })
  });
};

/* harmony default export */ var components_Card = (Card);

/***/ })

};
;