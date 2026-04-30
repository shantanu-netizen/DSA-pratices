import studentmodel from "../models/models.mjs";

const create = async (req, res) => {
  try {
    const data = req.body;
    const student = await studentmodel.create(data);
    return res.status(201).send({ message: "created", data: student });
  } catch (error) {
    if (error.message.includes("duplicate")) {
      return res
        .status(400)
        .send({ message: "not created", error: error.message });
    } else {
      return res
        .status(500)
        .send({ message: "internal server error", error: error.message });
    }
  }
};

const getStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const studentdata = await studentmodel.findById(id);
    return res.status(200).send({ message: "success", data: studentdata });
  } catch (error) {
    return res
      .status(500)
      .send({ message: "internal server error", error: error.message });
  }
};
const update = async (req, res) => {
  try {
    const { id } = req.params;
    const update = req.body;
    const updatedata = await studentmodel.findByIdAndUpdate(id, update);
    return res.status(201).send({ message: "successfull update", data: updatedata });
  } catch (error) {
    return res
      .status(500)
      .send({ message: "internal server error", error: error.message });
  }
};

const deletestudent = async(req,res)=>{
  try {
    const { id } = req.params;
    const studentDelete = await studentmodel.findByIdAndDelete(id)
    return res.status(200).send({message:"ok",data:studentDelete})
  } catch (error) {
    return res
      .status(500)
      .send({ message: "internal server error", error: error.message });
  }
}
export { create, getStudent, update, deletestudent };
