const {
  getSchoolByID,
  getAllSchools,
  addSchool,
  updateSchoolByID,
  deleteSchoolByID,
} = require("./service");

//get school by id
exports.getSchoolById = async (req, res) => {
  try {
    const result = await getSchoolByID(req.params.id);
    return res.status(200).send(result);
  } catch (error) {
    return res.send(error.message);
  }
};

//get all schools
exports.getAllSchool = async (req, res) => {
  try {
    const result = await getAllSchools();
    return res.status(200).send(result);
  } catch (error) {
    return res.send(error.message);
  }
};

//post school
exports.postSchool = async (req, res) => {
  try {
    const result = await addSchool(req.body);
    return res.status(200).send(result);
  } catch (error) {
    return res.send(error.message);
  }
};

//update school
exports.updateSchoolById = async (req, res) => {
  try {
    const result = await updateSchoolByID(req.params.id, req.body);
    return res.send(result);
  } catch (error) {
    res.send(error.message);
  }
};

//delete school
exports.deleteSchoolById = async (req, res) => {
  try {
    const result = await deleteSchoolByID(req.params.id);
    return res.send(result);
  } catch (error) {
    res.send(error.message);
  }
};
