import { databaseService } from '../../services'

const createClinic = async (clinicName) => {
    await databaseService.query(`INSERT INTO clinics SET clinic_name = ?`, [clinicName]);
};

const getListOfClinics = async (filters) => {
    const clinics = await databaseService.query(`
    SELECT c.id as clinic_id, c.clinic_name
    FROM clinics c
    JOIN clinics_doctors cd
    ON cd.clinic_id = c.id group by c.id`);

    for (const clinic of clinics) {
        clinic.specializations = await databaseService.query(`
        SELECT s.id as specialization_id, s.specialization_name
        FROM specializations s
        JOIN doctors d
        On d.specialization_id = s.id
        JOIN clinics_doctors cd
        ON cd.doctor_id = d.id
        WHERE cd.clinic_id = ?
        GROUP BY s.id`, [clinic.clinic_id]);

        for (const specialization of clinic.specializations) {
            specialization.doctors = await databaseService.query(`
            SELECT d.id as doctor_id, d.doctor_name
            FROM doctors d
            JOIN clinics_doctors cd
            ON cd.doctor_id = d.id
            JOIN specializations s
            ON d.specialization_id = s.id
            WHERE d.specialization_id = ? AND cd.clinic_id = ?
            GROUP BY d.id`, [specialization.specialization_id, clinic.clinic_id]);
        }
    }

    if (!clinics.length) {
        clinics = await databaseService.query(`SELECT * FROM clinics`);
    }

    return clinics;
};

const getClinicByClinicName = async (clinicName) => {
    const clinic = await databaseService.query(`SELECT * FROM clinics WHERE clinic_name = ? LIMIT 1`, [clinicName]);

    return clinic[0];
}

const getClinicByClinicId = async (clinicId) => {
    const clinic = await databaseService.query(`SELECT * FROM clinics WHERE id = ? LIMIT 1`, [clinicId]);

    return clinic[0];
}

export {
    createClinic,
    getListOfClinics,
    getClinicByClinicName,
    getClinicByClinicId,
}

