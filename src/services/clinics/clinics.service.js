import { clinicsRepository } from '../../repositories'

const createClinic = async (req, res) => {
    const reqClinicName = req.body.clinic_name;

    const clinic = await clinicsRepository.getClinicByClinicName(reqClinicName);

    if (clinic) {
        return res.status(401).send({
            message: `Clinic with name ${reqClinicName} already exists.`,
        });
    }

    await clinicsRepository.createClinic(reqClinicName);

    return res.status(200).json({ message: 'Clinic was created successfully!' });
};

const getListOfClinics = async (req, res) => {
    const clinics = await clinicsRepository.getListOfClinics();

    return res.status(200).json({ clinics });
};

export {
    createClinic,
    getListOfClinics,
};