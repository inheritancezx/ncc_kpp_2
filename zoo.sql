create table zoo (
	z_id serial primary key not null,
    z_type varchar(50) not null,
    z_name varchar(50) not null,
    z_age int not null,
    z_if_endangered boolean not null
);

insert into zoo (z_type, z_name, z_age, z_if_endangered) values 
	('kanggoroo', 'po', 3, 0),
    ('kanggoroo', 'ho', 3, 0),
    ('kanggoroo', 'jo', 5, 0),
    ('rhino', 'max', 7, 1),
    ('eagle', 'puf', 10, 0),
    ('eagle', 'ruf', 11, 0),
    ('zebra', 'not', 5, 0),
    ('zebra', 'for', 5, 0),
    ('zebra', 'while', 5, 0),
    ('zebra', 'else', 7, 0),
    ('tiger', 'rar', 11, 1),
    ('tiger', 'ren', 12, 1),
    ('leopard', 'spot', 6, 1),
    ('dolphin', 'klik', 7, 0),
    ('dolphin', 'flik', 7, 0),
    ('elephant', 'ros', 9, 1),
    ('elephant', 'ero', 11, 1),
    ('elephant', 'por', 11, 1),
    ('penguin', 'black', 5, 0),
    ('penguin', 'white', 5, 0);