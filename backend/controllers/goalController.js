// @desc   Get goals
// @route  GET  /api/goals
//@access Private
const getGoals = (req, res) => {
  res.status(200).json({ massage: "Get goals" });
};
// @desc   Set goal
// @route  POST  /api/goals
//@access Private
const setGoal = (req, res) => {
  res.status(200).json({ message: "Set goals" });
};
// @desc   Update goal
// @route  PUT  /api/goals/:ID
//@access Private
const updateGoal = (req, res) => {
  res.status(200).json({ message: `Update goals ${req.params.id}` });
};
// @desc   Delete goal
// @route  DELETE  /api/goals/:id
//@access Private
const deleteGoal = (req, res) => {
  res.status(200).json({ message: `delete goals ${req.params.id}` });
};

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
};
