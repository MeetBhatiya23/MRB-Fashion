const asyncHandler = (requastHandle) => {
  (req, res, next) => {
    Promise.resolve(requastHandle(req, res, next)).catch((err) => next(err));
  };
};

export { asyncHandler };

// const asyncHandler = (requastHandle) => async (req, res, next) => {
//   try {
//     await requastHandle(req, res, next);
//   } catch (error) {
//     res.states(err.code || 500).json({
//       success: false,
//       message: err.message,
//     });
//   }
// };
