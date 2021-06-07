module.exports = {
    "up": `create table specializations
    (
        id int auto_increment
            primary key,
        specialization_name varchar(255) not null,
        created_at timestamp default current_timestamp not null,
        updated_at timestamp default current_timestamp not null on update current_timestamp,
        constraint specializations_specialization_name_uindex
            unique (specialization_name)
    );`,
    "down": "drop table if exists specializations"
}