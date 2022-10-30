const client = require("../../connection");

//get school by id
exports.getSchoolByID = async (id) => {
  return await client
    .query(`Select * from schools where id=${id}`)
    .then((res) => {
      return res.rows;
    })
    .catch((error) => {
      return `${error} occured`;
    });
};

//get all schools
exports.getAllSchools = async () => {
  return await client
    .query(`Select * from schools`)
    .then((res) => {
      return res.rows;
    })
    .catch((error) => {
      return `${error} occured`;
    });
};

//post school
exports.addSchool = async (data) => {
  const insertQuery = "insert into schools(id,name) values($1,$2)";
  const values = [data.id, data.name];
  return await client
    .query(insertQuery, values)
    .then(() => {
      return "Successfully added";
    })
    .catch((error) => {
      return `${error} occured`;
    });
};

// //update the school
exports.updateSchoolByID = async (data) => {
  let updateQuery = "update schools set name = $1 where id = $2";
  const values = [data.name, data.id];
  return await client
    .query(updateQuery, values)
    .then(() => {
      return "Successfully updated";
    })
    .catch((error) => {
      return `${error} occured`;
    });
};

//delete the school
exports.deleteSchoolByID = async (id) => {
  let deleteQuery = "delete from schools where id=$1";
  const values = [id];
  return await client
    .query(deleteQuery, values)
    .then(() => {
      return "Successfully deleted";
    })
    .catch((error) => {
      return `${error} occured`;
    });
};
