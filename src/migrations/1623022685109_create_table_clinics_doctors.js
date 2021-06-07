module.exports = {
    "up": `create table clinics_doctors
    (
        clinic_id int not null,
        doctor_id int not null,
        created_at timestamp default current_timestamp not null,
        updated_at timestamp default current_timestamp not null on update current_timestamp,
        constraint clinics_doctors___fk_clinics
            foreign key (clinic_id) references clinics (id),
        constraint clinics_doctors___fk_doctors
            foreign key (doctor_id) references doctors (id)
    );`,
    "down": "drop table if exists clinics_doctors"
}