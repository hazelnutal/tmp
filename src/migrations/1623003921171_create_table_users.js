module.exports = {
    "up": `create table if not exists users
    (
        id int auto_increment
            primary key,
        user_name varchar(55) not null,
        password varchar(255) not null,
        constraint users_user_name_uindex
            unique (user_name),
        created_at timestamp not null default current_timestamp,
        updated_at timestamp not null default current_timestamp on update current_timestamp
    );`,
    "down": `drop table if exists users`
};