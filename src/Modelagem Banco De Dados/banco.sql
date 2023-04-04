CREATE DATABASE minhas_economias;

-- minhas_economias.dbo.Usuario definition

CREATE TABLE minhas_economias.dbo.Usuario (
	IdUsuario int IDENTITY(0,1) NOT NULL,
	nome varchar(100) NOT NULL,
	email varchar(100) NOT NULL,
	senha varchar(100) NOT NULL,
	CONSTRAINT Usuario_PK PRIMARY KEY (IdUsuario)
);


-- minhas_economias.dbo.Movimentacoes definition

CREATE TABLE minhas_economias.dbo.Movimentacoes (
	IdMovimentacao int IDENTITY(0,1) NOT NULL,
	descricao text NULL,
	valor money NOT NULL,
	[data] date NOT NULL,
	tipoMovimentacao varchar(100) NOT NULL,
	idUsuario int NOT NULL,
	CONSTRAINT Movimentacoes_PK PRIMARY KEY (IdMovimentacao),
	CONSTRAINT Movimentacoes_FK FOREIGN KEY (idUsuario) REFERENCES minhas_economias.dbo.Usuario(IdUsuario)
);