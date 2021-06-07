import { databaseService } from '../../services'

const createSpecialization = async (specializationName) => {
    await databaseService.query(`INSERT INTO specializations SET specialization_name = ?`, [specializationName]);
    
    const specialization = await databaseService.query(`SELECT * FROM specializations WHERE specialization_name = ? LIMIT 1`, [specializationName]);

    return specialization[0];
};

const getSpecializationBySpecializationName = async (specializationName) => {
    const specialization = await databaseService.query(`SELECT * FROM specializations WHERE specialization_name = ? LIMIT 1`, [specializationName]);

    return specialization[0];
}

const getSpecializationBySpecializationId = async (specializationId) => {
    const specialization = await databaseService.query(`SELECT * FROM specializations WHERE id = ? LIMIT 1`, [specializationId]);

    return specialization[0];
}

const getListOfSpecializations = async () => {
    const specializations = await databaseService.query(`SELECT * FROM specializations`);

    return specializations;
}

export {
    createSpecialization,
    getSpecializationBySpecializationId,
    getSpecializationBySpecializationName,
    getListOfSpecializations,
};