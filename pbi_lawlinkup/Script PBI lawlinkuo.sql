create database IF NOT EXISTS lawlinkup;

use lawlinkup;

DROP TABLE IF EXISTS pipefycard;
DROP TABLE IF EXISTS Canal;

create table Canal(
id int primary key auto_increment,
nome varchar(60),
descricao varchar(40));

insert into Canal(nome,descricao) values 
("Twitter", "Navegando pela internet"),
("Instagram", "Navegando pela internet"),
("Google Ads","Outras formas de divulgação");

CREATE TABLE `lawlinkup`.`Pipefycard` (
  `id`INT AUTO_iNCREMENT NOT NULL,
  `fk_canal` INT NOT NULL,
  `nome` VARCHAR(60) NOT NULL,
  `telefone` VARCHAR(20) NULL,
  `email` VARCHAR(60) NULL,
  `UF` VARCHAR(2) NULL,
  `card_data` DATETIME NOT NULL DEFAULT NOW(),
  `tipo_cliente` VARCHAR(45) NULL,
  `ativo` TINYINT NULL,
  `p1` VARCHAR(100) NULL,
  `p2` VARCHAR(100) NULL,
  `fase` VARCHAR(15) NULL,
  PRIMARY KEY (`id`),
  foreign key (fk_canal) references Canal(id));
  
  
  DROP TABLE IF EXISTS `lawlinkup`.`info_vinculo`;
  CREATE TABLE `lawlinkup`.`info_vinculo` (
  `id_vinculo`INT AUTO_iNCREMENT NOT NULL,
  `data_inicio` datetime NOT NULL,
  `data_encerramento` datetime,
  `primeira_resposta_chat` datetime,
  `data_orcamento` datetime,
  `data_pagamento_realizado` datetime,
  PRIMARY KEY (`id_vinculo`));
  
  INSERT INTO info_vinculo
		(data_inicio, data_encerramento, primeira_resposta_chat , data_orcamento, data_pagamento_realizado)
        VALUES
        ('2023-09-09 12:00:00','2023-09-12 17:30:00','2023-09-09 12:12:00','2023-09-09 17:00:00','2023-09-09 20:00:00'),
		('2023-09-09 12:00:00','2023-09-12 17:30:00','2023-09-09 12:12:00','2023-09-09 17:00:00','2023-09-09 20:00:00'),
        ('2023-09-09 12:00:00','2023-09-12 17:30:00','2023-09-09 12:12:00','2023-09-09 17:00:00','2023-09-09 20:00:00'),
        ('2023-09-09 12:00:00','2023-09-12 17:30:00','2023-09-09 12:12:00','2023-09-09 17:00:00','2023-09-09 20:00:00'),
        ('2023-09-09 12:00:00','2023-09-12 17:30:00','2023-09-09 12:12:00','2023-09-09 17:00:00','2023-09-09 20:00:00');
     
        
        
        DROP VIEW IF EXISTS tratamento_media_tempo_pbi;
        CREATE VIEW tratamento_media_tempo_pbi AS SELECT timestampdiff(day, data_inicio, data_encerramento) AS tempo_duracao_vinculo, timestampdiff(MINUTE, data_inicio, primeira_resposta_chat) AS mins_primeiro_chat, timestampdiff(HOUR, data_inicio, data_orcamento) AS hrs_definir_orcamento, timestampdiff(HOUR, data_orcamento, data_pagamento_realizado) AS hrs_realizar_pagamento FROM info_vinculo;

		DROP VIEW IF EXISTS media_tempo_pbi;
        CREATE VIEW media_tempo_pbi AS SELECT AVG(tempo_duracao_vinculo) AS media_dias_duracao_vinculo, AVG(mins_primeiro_chat) AS media_mins_primeiro_chat, AVG(hrs_definir_orcamento) AS media_hrs_definir_orcamento, AVG(hrs_realizar_pagamento) AS media_hrs_realizar_pagamento FROM tratamento_media_tempo_pbi;
  
  
INSERT INTO Pipefycard
		(fk_canal, nome, telefone, email, card_data, tipo_cliente,  ativo, p1, p2, fase, UF)
        VALUES
        (1, 'Sandro Moreira', '43214321', 'sandromoreira@gmail.com', '2023-09-11','Advogado', 1,'Responderam','','Lead', 'SP'),
        (2, 'Higor Luis', '23453454', 'higorluis@gmail.com', '2023-09-10','Cliente', 1,'Não Responderam','','Oportunidade', 'SP'),
        (3, 'Danyelle', '62435254', 'danyelle@gmail.com', '2023-09-10','Advogado', 1,'Responderam','','Lead', 'SP'),
        (1, 'Kleber', '75457643', 'kleber@gmail.com', '2023-09-09','Advogado', 1,'Responderam','','Cliente', 'SP'),
        (2, 'Edhoni', '98463724', 'edhoni@gmail.com', '2023-09-09','Cliente', 1,'Não Responderam','','Cliente', 'PA'),
        (3, 'Debora', '19374854', 'Debora@gmail.com', '2023-09-09','Cliente', 1,'Não Responderam','','Lead', 'PA'),
        (1, 'Julia', '45839423', 'julia@gmail.com', '2023-09-10','Advogado', 1,'Responderam','','Oportunidade', 'AP'),
        (1, 'Carlos Eduardo', '29304653', 'carloseduardo@gmail.com', '2023-09-10','Advogado', 1,'Responderam','','Lead', 'TO'),
        (3, 'Malena', '66667839', 'malena@gmail.com', '2023-09-12','Cliente', 1,'Não Responderam','','Lead', 'AL'),
        (1, 'Caio', '29304954', 'caio@gmail.com', '2023-09-11','Advogado', 1,'Responderam','','Cliente', 'PB'),
        (2, 'Aline', '55434321', 'aline@gmail.com', '2023-09-11','Cliente', 1,'Não Responderam','','Oportunidade', 'ES'),
        (3, 'Kaio', '41212343', 'kaio@gmail.com', '2023-09-12','Advogado', 1,'Responderam','Não sei qual que é a p2','Oportunidade', 'BA'),
        (1, 'Ana Carolina', '12309092', 'anacarolina@gmail.com', '2023-09-11','Cliente', 1,'Não Responderam','','Cliente', 'SP'),
        (3, 'Ernani', '83641173', 'ernani@gmail.com', '2023-09-11','Advogado', 1,'Responderam','Não sei qual que é a p2','Lead', 'MT'),
        (3, 'Elisa', '37461232', 'elisa@gmail.com', '2023-09-12','Advogado', 1,'Responderam','Não sei qual que é a p2','Oportunidade', 'MT'),
        (1, 'Leandro', '48573832', 'leandro@gmail.com', '2023-09-12','Cliente', 1,'Não Responderam','','Lead', 'GO'),
        (1, 'Mauricio', '77364732', 'mauricio@gmail.com', '2023-09-12','Cliente', 1,'Não Responderam','','Cliente', 'SE'),
        (2, 'Nicolas', '90908374', 'nicolas@gmail.com', '2023-09-12','Advogado', 1,'Responderam','Não sei qual que é a p2','Cliente', 'CE'),
        (2, 'Eduardo', '56441323', 'eduardo@gmail.com', '2023-09-09','Cliente', 1,'Não Responderam','','Cliente', 'SP'),
        (2, 'Mateus', '09871234', 'mateus@gmail.com', '2023-09-09','Advogado', 1,'Responderam','Não sei qual que é a p2','Lead', 'GO'),
        (2, 'Gabriel', '33231090', 'gabriel@gmail.com', '2023-09-10','Cliente', 1,'Não Responderam','','Oportunidade', 'SC'),
		(2, 'Henrique', '29384643', 'henrique@gmail.com', '2023-09-11','Cliente', 1,'Não Responderam','','Cliente', 'PR'),
        (2, 'Leonardo', '94738291', 'leonardo@gmail.com', '2023-09-11','Advogado', 1,'Responderam','Não sei qual que é a p2','Lead', 'RS'),
        (3, 'Sergio', '44237866', 'sergio@gmail.com', '2023-09-10','Cliente', 1,'Não Responderam','','Oportunidade', 'CE'),
        (3, 'Maria', '38290348', 'maria@gmail.com', '2023-09-10','Advogado', 1,'Não Responderam','','Visitante', 'CE'),
        (3, 'Jose', '47382944', 'jose@gmail.com', '2023-09-11','Advogado', 1,'Não Responderam','','Visitante', 'SP'),
        (3, 'Gustavo', '94836123', 'gustavo@gmail.com', '2023-09-09','Cliente', 1,'Não Responderam','','Visitante', 'PI'),
        (1, 'João', '57443822', 'joao@gmail.com', '2023-09-10','Cliente', 1,'Não Responderam','','Visitante', 'AL'),
        (2, 'Larissa', '88176654', 'larissa@gmail.com', '2023-09-10','Advogado', 1,'Não Responderam','','Visitante', 'BA'),
        (2, 'Ezequiel', '53326322', 'ezequiel@gmail.com', '2023-09-09','Cliente', 1,'Não Responderam','','Visitante', 'SP'),
        (2, 'Marcio', '66123349', 'marcio@gmail.com', '2023-09-10','Advogado', 1,'Não Responderam','','Visitante', 'BA'),
        (2, 'Gomes', '13884436', 'marcia@gmail.com', '2023-09-11','Cliente', 1,'Não Responderam','','Visitante', 'BA'),
        (3, 'Gabriela', '13884436', 'gabriela@gmail.com', '2023-09-11','Cliente', 1,'Não Responderam','','Visitante', 'PE'),
		(1, 'Sandro Moreira', '43214321', 'sandromoreira@gmail.com', '2023-09-12','Advogado', 1,'Responderam','','Lead', 'PE'),
        (2, 'Higor Luis', '23453454', 'higorluis@gmail.com', '2023-09-12','Cliente', 1,'Não Responderam','','Oportunidade', 'PE'),
        (3, 'Danyelle', '62435254', 'danyelle@gmail.com', '2023-09-12','Advogado', 1,'Responderam','','Lead', 'SP'),
        (1, 'Kleber', '75457643', 'kleber@gmail.com', '2023-09-09','Advogado', 1,'Responderam','','Cliente', 'SP'),
        (2, 'Edhoni', '98463724', 'edhoni@gmail.com', '2023-09-09','Cliente', 1,'Não Responderam','','Cliente', 'RJ'),
        (1, 'Debora', '19374854', 'Debora@gmail.com', '2023-09-10','Cliente', 1,'Não Responderam','','Lead', 'ES'),
        (1, 'Julia', '45839423', 'julia@gmail.com', '2023-09-11','Advogado', 1,'Responderam','','Oportunidade', 'SP'),
        (1, 'Carlos Eduardo', '29304653', 'carloseduardo@gmail.com', '2023-09-12','Advogado', 1,'Responderam','','Lead', 'RJ'),
        (1, 'Malena', '66667839', 'malena@gmail.com', '2023-09-12','Cliente', 1,'Não Responderam','','Lead', 'SC'),
        (1, 'Caio', '29304954', 'caio@gmail.com', '2023-09-09','Advogado', 1,'Responderam','','Cliente', 'SP'),
        (1, 'Aline', '55434321', 'aline@gmail.com', '2023-09-11','Cliente', 1,'Não Responderam','','Oportunidade', 'SC'),
        (1, 'Kaio', '41212343', 'kaio@gmail.com', '2023-09-11','Advogado', 1,'Responderam','Não sei qual que é a p2','Oportunidade', 'SP'),
        (2, 'Ana Carolina', '12309092', 'anacarolina@gmail.com', '2023-09-11','Cliente', 1,'Não Responderam','','Cliente', 'SP'),
        (2, 'Ernani', '83641173', 'ernani@gmail.com', '2023-09-12','Advogado', 1,'Responderam','Não sei qual que é a p2','Lead', 'PE'),
        (3, 'Elisa', '37461232', 'elisa@gmail.com', '2023-09-10','Advogado', 1,'Responderam','Não sei qual que é a p2','Oportunidade', 'PR'),
        (1, 'Leandro', '48573832', 'leandro@gmail.com', '2023-09-09','Cliente', 1,'Não Responderam','','Lead', 'RS'),
        (1, 'Mauricio', '77364732', 'mauricio@gmail.com', '2023-09-09','Cliente', 1,'Não Responderam','','Cliente', 'RS'),
        (1, 'Nicolas', '90908374', 'nicolas@gmail.com', '2023-09-12','Advogado', 1,'Responderam','Não sei qual que é a p2','Cliente', 'SP'),
        (1, 'Eduardo', '56441323', 'eduardo@gmail.com', '2023-09-10','Cliente', 1,'Não Responderam','','Cliente', 'SP'),
        (1, 'Mateus', '09871234', 'mateus@gmail.com', '2023-09-11','Advogado', 1,'Responderam','Não sei qual que é a p2','Lead', 'MA'),
        (2, 'Gabriel', '33231090', 'gabriel@gmail.com', '2023-09-10','Cliente', 1,'Não Responderam','','Oportunidade', 'RS'),
		(3, 'Henrique', '29384643', 'henrique@gmail.com', '2023-09-09','Cliente', 1,'Não Responderam','','Cliente', 'RS'),
        (2, 'Leonardo', '94738291', 'leonardo@gmail.com', '2023-09-10','Advogado', 1,'Responderam','Não sei qual que é a p2','Lead', 'PR'),
        (2, 'Sergio', '44237866', 'sergio@gmail.com', '2023-09-11','Cliente', 1,'Não Responderam','','Oportunidade', 'RJ'),
        (3, 'Maria', '38290348', 'maria@gmail.com', '2023-09-12','Advogado', 1,'Não Responderam','','Visitante', 'SP'),
        (3, 'Jose', '47382944', 'jose@gmail.com', '2023-09-12','Advogado', 1,'Não Responderam','','Visitante', 'SP'),
        (3, 'Gustavo', '94836123', 'gustavo@gmail.com', '2023-09-10','Cliente', 1,'Não Responderam','','Visitante', 'SP'),
        (3, 'João', '57443822', 'joao@gmail.com', '2023-09-12','Cliente', 1,'Não Responderam','','Visitante','ES'),
        (3, 'Larissa', '88176654', 'larissa@gmail.com', '2023-09-12','Advogado', 1,'Não Responderam','','Visitante', 'SE'),
        (3, 'Ezequiel', '53326322', 'ezequiel@gmail.com', '2023-09-11','Cliente', 1,'Não Responderam','','Visitante', 'SP'),
        (3, 'Marcio', '66123349', 'marcio@gmail.com', '2023-09-10','Advogado', 1,'Não Responderam','','Visitante', 'AM'),
        (3, 'Nogueira', '13884436', 'marcia@gmail.com', '2023-09-12','Cliente', 1,'Não Responderam','','Visitante', 'TO'),
        (3, 'Gabriela', '13884436', 'gabriela@gmail.com', '2023-09-11','Cliente', 1,'Não Responderam','','Visitante', 'RJ'),
        (3, 'Murilo', '13884436', 'murilo@gmail.com', '2023-09-12','Cliente', 1,'Responderam','','Visitante', 'MG');
        
DROP VIEW IF EXISTS clientes_por_canal;
CREATE VIEW clientes_por_canal AS SELECT pc.id, c.nome, pc.fk_canal, card_data FROM pipefycard pc INNER JOIN canal c on pc.fk_canal = c.id;