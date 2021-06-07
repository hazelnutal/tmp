import { databaseService } from '../../services'

const createClinicDoctorRelation = async (clinicId, doctorId) => {
    await databaseService.query(`INSERT INTO clinics_doctors SET clinic_id = ?, doctor_id = ?`, [clinicId, doctorId]);
};

export {
    createClinicDoctorRelation,
}