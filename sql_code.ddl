CREATE TABLE person (
    first_name         CHAR(40) NOT NULL,
    last_name          CHAR(40) NOT NULL,
    middle_name        CHAR(40),
    email              CHAR(40) PRIMARY KEY NOT NULL,
    department         CHAR(40),
    social_factor FLOAT NOT NULL,
    salary INT NOT NULL,
    office             CHAR(40)
);


CREATE TABLE professor (
    email CHAR(40) PRIMARY KEY ,
    hashedpassword        CHAR(32) NOT NULL,
    FOREIGN KEY (email) REFERENCES person(email)
);

CREATE TABLE change_salary (
    email CHAR(40) PRIMARY KEY ,
    salary INT NOT NULL,
    from_date        DATE NOT NULL,
    to_date          DATE,
    FOREIGN KEY (email) REFERENCES person(email)
);

CREATE TABLE project (
    name              CHAR(40) NOT NULL,
    code              CHAR(40) PRIMARY KEY NOT NULL,
    owner           CHAR(40),
    FOREIGN KEY(owner) REFERENCES professor(email),
    budget            FLOAT,
    description       CHAR(40),
    current_balance   FLOAT NOT NULL,
    start_date        DATE NOT NULL,
    end_date          DATE NOT NULL,
    workload          INT NOT NULL
);

CREATE TABLE has (
    project_code      CHAR(40) NOT NULL,
    person_code       CHAR(40) NOT NULL,
    deadline          DATE NOT NULL,
    hiring_date       DATE NOT NULL,
    job_description   CHAR(40),
    PRIMARY KEY ( project_code,person_code ),
    FOREIGN KEY ( person_code ) REFERENCES person ( email ),
    FOREIGN KEY ( project_code ) REFERENCES project ( code )
    
);

ALTER TABLE professor ADD CONSTRAINT person_1_person_fk FOREIGN KEY ( email )
        REFERENCES person ( email );

    


INSERT INTO person 
(first_name,    last_name,  middle_name,    email,  department, social_factor, office,isprofessor) 
VALUES 
("john", "smith","administrator","admin@admin.se", "IDT",1,"ABC123",1)

INSERT INTO professor (email,hashedpassword) 
VALUES 
("admin@admin.se","admin")

INSERT INTO change_salary (email,salary,from_date) 
VALUES 
("admin@admin.se",0,"2018-06-15")




create view project_view as
select * from project

create view project_view as
select * from change_salary

create view person_view as
select * from person

create view professor_view as
select * from professor

create view has_view as
select * from has

--gets all the has table with additional info from the person
CREATE VIEW has_person_join_view AS
SELECT has.project_code,has.person_code, has.hiring_date,has.end_date,has.job_description,has.workload,person.first_name,person.last_name,person.middle_name, person.social_factor
FROM has
JOIN person ON has.person_code=person.email

--gets the current state of a participant on each project
CREATE VIEW project_current_participants_view AS
SELECT *
FROM has_person_join_view
JOIN project_view ON project_view.code=has_person_join_view.project_code

--gets the projects the a user is working CURRENTLY
create view working_projects_of_a_user_view as
select project.code, project.name, project.owner, project.budget,project.description, project.start_date, project.deadline, has.workload,has.person_code, project.expectedPercentage
from project 
join has on project.code=has.project_code
ORDER BY project.deadline DESC

--gets the projects the user is working THROUGH TIME
create view projects_a_person_is_working_on_view AS
select project.name,project.code, has.person_code, has.hiring_date, has.end_date,has.workload,project.deadline, project.budget,project.description, project.owner, project.expectedPercentage
from has
join project on has.project_code=project.code

