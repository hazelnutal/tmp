module.exports = {
    "up": `insert into clinics(clinic_name) values ('Kyiv Clinic'), ('Lviv Clinic'), ('Kharkiv Clinic')`,
    "down": `delete from clinics where clinic_name = 'Kyiv Clinic' or
        clinic_name = 'Lviv Clinic' or
        clinic_name = 'Kharkiv Clinic'`
}