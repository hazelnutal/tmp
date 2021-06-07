import {
    doctorsRepository,
    clinicsDoctorsRepository,
    specializationsRepository,
    clinicsRepository,
} from '../../repositories'

const createDoctor = async (req, res) => {
    const message = await _checkIfDoctorCanBeCreated(req.body);
    if (message) {
        return res.status(401).json(message);
    }
    
    const createdDoctor = await doctorsRepository.createDoctor(req.body.doctor_name, req.body.specialization_id);

    await clinicsDoctorsRepository.createClinicDoctorRelation(req.body.clinic_id, createdDoctor.id);

    return res.status(200).json({ message: `Doctor ${req.body.doctor_name} was created successfully!` });
};

const getListOfDoctors = async (req, res) => {
    const doctors = await doctorsRepository.getListOfDoctors();

    return res.status(200).json({ doctors });
};

const _checkIfDoctorCanBeCreated = async (body) => {
    const reqDoctorName = body.doctor_name;

    const doctor = await doctorsRepository.getDoctorByDoctorName(reqDoctorName);
    if (doctor) {
        return {
            message: `Doctor with name ${reqDoctorName} already exists.`,
        };
    }

    const reqSpecializationId = body.specialization_id;

    const specialization = await specializationsRepository.getSpecializationBySpecializationId(reqSpecializationId);
    if (!specialization) {
        return {
            message: `Specialization with ID ${reqSpecializationId} not found`,
        };
    }

    const reqClinicId = body.clinic_id;

    const clinic = await clinicsRepository.getClinicByClinicId(reqClinicId);
    if (!clinic) {
        return {
            message: `Clinic with ID ${reqClinicId} not found`,
        };
    }
}

export {
    createDoctor,
    getListOfDoctors,
}