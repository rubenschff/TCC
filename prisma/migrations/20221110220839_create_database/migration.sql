-- CreateTable
CREATE TABLE "tb_alternativa" (
    "id_alternativa" SERIAL NOT NULL,
    "tx_descricao" VARCHAR(255) NOT NULL,
    "id_problema" INTEGER NOT NULL,

    CONSTRAINT "pk_tb_alternativa" PRIMARY KEY ("id_alternativa")
);

-- CreateTable
CREATE TABLE "tb_explicacao" (
    "id_explicacao" SERIAL NOT NULL,
    "tx_descricao" VARCHAR(255) NOT NULL,
    "id_problema" INTEGER NOT NULL,

    CONSTRAINT "pk_tb_explicacao" PRIMARY KEY ("id_explicacao")
);

-- CreateTable
CREATE TABLE "tb_problema" (
    "id_problema" SERIAL NOT NULL,
    "tx_descricao" VARCHAR(255) NOT NULL,
    "id_alternativa" INTEGER NOT NULL,

    CONSTRAINT "pk_id_problema" PRIMARY KEY ("id_problema")
);

-- CreateTable
CREATE TABLE "tb_resposta" (
    "id_resposta" SERIAL NOT NULL,
    "nr_tentativas" INTEGER NOT NULL,
    "id_problema" INTEGER NOT NULL,
    "id_usuario" INTEGER NOT NULL,
    "id_alternativa" INTEGER NOT NULL,

    CONSTRAINT "pk_tb_resposta" PRIMARY KEY ("id_resposta")
);

-- CreateTable
CREATE TABLE "tb_resposta_log" (
    "id_resposta_log" SERIAL NOT NULL,
    "dt_cadastro" TIMESTAMP(6) NOT NULL,
    "id_usuario" INTEGER NOT NULL,
    "id_problema" INTEGER NOT NULL,
    "id_alternativa" INTEGER NOT NULL,

    CONSTRAINT "pk_tb_resposta_log" PRIMARY KEY ("id_resposta_log")
);

-- CreateTable
CREATE TABLE "tb_usuario" (
    "id_usuario" SERIAL NOT NULL,
    "tx_nome" VARCHAR(255) NOT NULL,
    "tx_senha" VARCHAR(255) NOT NULL,
    "nr_token" INTEGER NOT NULL,
    "dt_nascimento" TIMESTAMP(6) NOT NULL,

    CONSTRAINT "pk_tb_usuario" PRIMARY KEY ("id_usuario")
);

-- AddForeignKey
ALTER TABLE "tb_alternativa" ADD CONSTRAINT "fk_id_problema" FOREIGN KEY ("id_problema") REFERENCES "tb_problema"("id_problema") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "tb_explicacao" ADD CONSTRAINT "fk_id_problema" FOREIGN KEY ("id_problema") REFERENCES "tb_problema"("id_problema") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "tb_problema" ADD CONSTRAINT "fk_id_alternativa" FOREIGN KEY ("id_alternativa") REFERENCES "tb_alternativa"("id_alternativa") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "tb_resposta" ADD CONSTRAINT "fk_id_alternativa" FOREIGN KEY ("id_alternativa") REFERENCES "tb_alternativa"("id_alternativa") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "tb_resposta" ADD CONSTRAINT "fk_id_problema" FOREIGN KEY ("id_problema") REFERENCES "tb_problema"("id_problema") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "tb_resposta" ADD CONSTRAINT "fk_id_usuario" FOREIGN KEY ("id_usuario") REFERENCES "tb_usuario"("id_usuario") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "tb_resposta_log" ADD CONSTRAINT "fk_id_alternativa" FOREIGN KEY ("id_alternativa") REFERENCES "tb_alternativa"("id_alternativa") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "tb_resposta_log" ADD CONSTRAINT "fk_id_problema" FOREIGN KEY ("id_problema") REFERENCES "tb_problema"("id_problema") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "tb_resposta_log" ADD CONSTRAINT "fk_id_usuario" FOREIGN KEY ("id_usuario") REFERENCES "tb_usuario"("id_usuario") ON DELETE NO ACTION ON UPDATE NO ACTION;
