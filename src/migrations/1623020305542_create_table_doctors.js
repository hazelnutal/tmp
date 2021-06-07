module.exports = {
    "up": `create table doctors
    (
        id int auto_increment
            primary key,
        doctor_name varchar(255) not null,
        specialization_id int not null,
        created_at timestamp not null default current_timestamp,
        updated_at timestamp not null default current_timestamp on update current_timestamp,
        constraint doctors_doctor_name_uindex
            unique (doctor_name)
    );`,
    "down": "drop table if exists doctors"
}