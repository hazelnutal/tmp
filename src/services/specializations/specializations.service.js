import { specializationsRepository } from '../../repositories'

const createSpecialization = async (req, res) => {
    const reqSpecializationName = req.body.specialization_name;

    const specialization = await specializationsRepository.getSpecializationBySpecializationName(reqSpecializationName);
    if (specialization) {
        return res.status(401).json({
            message: `Specialization with name ${reqSpecializationName} already exists.`,
        });
    }

    await specializationsRepository.createSpecialization(reqSpecializationName);

    return res.status(200).json({ message: 'Specialization was created successfully!' });
};

const getListOfSpecializations = async (req, res) => {
    const specializations = await specializationsRepository.getListOfSpecializations();

    return res.status(200).json({ specializations });
}

export {
    createSpecialization,
    getListOfSpecializations,
};