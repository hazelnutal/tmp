module.exports = {
    "up": `create table clinics
    (
        id int auto_increment
            primary key,
        clinic_name varchar(255) not null,
        constraint clinics_clinic_name_uindex
            unique (clinic_name),
        created_at timestamp not null default current_timestamp,
        updated_at timestamp not null default current_timestamp on update current_timestamp
    );`,
    "down": `drop table if exists clinics`
}