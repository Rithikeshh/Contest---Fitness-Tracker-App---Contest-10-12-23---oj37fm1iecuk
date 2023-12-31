const Goal = require('../models/goalModel');

const createGoal = async (req, res) => {
  try {
    // TODO: Implement logic to create a new goal
    // Retrieve data from req.body, create a new goal, and save it to the database
    // Example response when goal is created successfully:
    const result = await Goal.create(req.body);
    res.status(201).json({ message: 'Goal created successfully', goal: result });
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Internal server error', error: error.message });
  }
};

const getGoals = async (req, res) => {
  try {
    // TODO: Implement logic to retrieve all goals
    // Retrieve all goals from the database
    // Example response when goals are found:
    // res.status(200).json(goals);
    // Example response when no goals are found:
    const result = await Goal.find();
    if(result){
      
      res.status(200).json(result);
    }
    else{
      res.status(404).json({ message: 'No goals found' });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Internal server error', error: error.message });
  }
};

const getGoalById = async (req, res) => {
  const id = req.params.id;

  try {
    // TODO: Implement logic to retrieve a goal by ID
    // Use Goal.findById(goalId) to retrieve a goal
    // Example response when goal is found:
    // res.status(200).json(goal);
    // Example response when goal is not found:
    // res.status(404).json({ message: 'Goal not found' });
    const result = await Goal.findById(id);
    if(result){
      res.status(200).json(result);
    }
    else{
      res.status(404).json({ message: 'No goals found' });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Internal server error', error: error.message });
  }
};

const updateGoal = async (req, res) => {
  const goalId = req.params.id;
  const updateInfo = req.body;

  try {
    // TODO: Implement logic to update a goal
    // Use Goal.findByIdAndUpdate(goalId, updateInfo, { new: true }) to update the goal
    // Example response when goal is updated successfully:
    // Example response when goal is not found:
    const result = await Goal.findByIdAndUpdate(goalId, updateInfo, {new: true})
    if(result){
      res.status(200).json({ message: 'Goal updated successfully', goal: result });
    }
    else{
      res.status(404).json({ message: 'Goal not found' });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Internal server error', error: error.message });
  }
};

const deleteGoal = async (req, res) => {
  const goalId = req.params.id;

  try {
    // TODO: Implement logic to delete a goal
    // Use Goal.findByIdAndDelete(goalId) to delete the goal
    // Example response when goal is deleted successfully:
    // Example response when goal is not found:
    // res.status(404).json({ message: 'Goal not found' });
    const result = await Goal.findByIdAndDelete(goalId)
    if(result){
      res.status(200).json({ message: 'Goal deleted successfully', goal: result });
      
    }
    else{
      res.status(404).json({ message: 'Goal not found' });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Internal server error', error: error.message });
  }
};

const sortGoals = async (req, res) => {
  const order = req.params.order;

  try {
    // TODO: Implement logic to sort goals by target
    // Retrieve and sort goals from the database based on the 'order' parameter
    // Example response when goals are sorted:
    // res.status(200).json(sortedGoals);
    const result = await Goal.find()
    if(order == 'asc'){
      result.sort((a, b) => a.target - b.target)
    }
    else{
      result.sort((a, b) => b.target - a.target)
    }
    res.status(200).json(result);
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Internal server error', error: error.message });
  }
};

const getGoalsByType = async (req, res) => {
  const goalType = req.params.type;

  try {
    // TODO: Implement logic to retrieve goals by type
    // Retrieve goals from the database based on the 'goalType' parameter
    // Example response when goals are found:
    // Example response when no goals are found:
    const result = await Goal.find({type:goalType});
    if(result){
      res.status(200).json(result);
      
    }
    else{
      res.status(404).json({ message: 'No goals found for the given type' });
      
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Internal server error', error: error.message });
  }
};

const getGoalsByDeadline = async (req, res) => {
  const deadline = req.params.deadline;

  try {
    // TODO: Implement logic to retrieve goals by deadline
    // Retrieve goals from the database based on the 'deadline' parameter
    // Example response when goals are found:
    // Example response when no goals are found:
    const result = await Goal.find({deadline:deadline})
    if(result){
      res.status(200).json(result);
    }
    else{
      res.status(404).json({ message: 'No goals found before the given deadline' });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Internal server error', error: error.message });
  }
};

module.exports = {
  createGoal,
  getGoals,
  getGoalById,
  updateGoal,
  deleteGoal,
  sortGoals,
  getGoalsByType,
  getGoalsByDeadline,
};
