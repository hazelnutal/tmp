import { databaseService } from '../../services'

const createClinic = async (clinicName) => {
    await databaseService.query(`INSERT INTO clinics SET clinic_name = ?`, [clinicName]);
};

const getListOfClinics = async () => {
    return await databaseService.query(`SELECT * FROM clinics`);
};

const getClinicByClinicName = async (clinicName) => {
    const clinic = await databaseService.query(`SELECT * FROM clinics WHERE clinic_name = ? LIMIT 1`, [clinicName]);

    return clinic[0];
}

export {
    createClinic,
    getListOfClinics,
    getClinicByClinicName,
}

