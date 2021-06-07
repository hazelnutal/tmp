module.exports = {
    "up": `insert into specializations(specialization_name) values ('Traumathology'), ('Therapy'), ('Vertebrology')`,
    "down": `delete from specializations where 
        specialization_name = 'Traumathology' or 
        specialization_name = 'Therapy', or 
        specialization_name = 'Vertebrology`
};