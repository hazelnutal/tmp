import { databaseService } from '../../services'

const createDoctor = async (doctorName, specializationId) => {
    await databaseService.query(`INSERT INTO doctors SET doctor_name = ?, specialization_id = ?`,
        [doctorName, specializationId]);
    
    const doctor = await databaseService.query(`SELECT * FROM doctors WHERE doctor_name = ? LIMIT 1`, [doctorName]);

    return doctor[0];
};

const getListOfDoctors = async () => {
    const doctors = await databaseService.query(
        `SELECT d.id as doctor_id, d.doctor_name, s.id as specialization_id, s.specialization_name, c.id as clinic_id, c.clinic_name
        FROM doctors d 
        JOIN specializations s 
        ON d.specialization_id = s.id
        JOIN clinics_doctors cd
        ON cd.doctor_id = d.id
        JOIN clinics c
        ON cd.clinic_id = c.id`
    );

    return doctors;
}

const getDoctorByDoctorName = async (doctorName) => {
    const doctor = await databaseService.query(`SELECT * FROM doctors WHERE doctor_name = ? LIMIT 1`, [doctorName]);

    return doctor[0];
}

export {
    createDoctor,
    getDoctorByDoctorName,
    getListOfDoctors,
}