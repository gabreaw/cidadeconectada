-- CreateTable
CREATE TABLE "usuario" (
    "id_usuario" SERIAL NOT NULL,
    "cpf" VARCHAR(11) NOT NULL,
    "nome" VARCHAR(100) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "data_nascimento" DATE NOT NULL,
    "senha_user" VARCHAR(255) NOT NULL,

    CONSTRAINT "usuario_pkey" PRIMARY KEY ("id_usuario")
);

-- CreateTable
CREATE TABLE "administrador_public" (
    "id_administrador" SERIAL NOT NULL,
    "cargo" VARCHAR(50) NOT NULL,
    "departamento" VARCHAR(50) NOT NULL,
    "nome" VARCHAR(100) NOT NULL,
    "cpf" VARCHAR(11) NOT NULL,

    CONSTRAINT "administrador_public_pkey" PRIMARY KEY ("id_administrador")
);

-- CreateTable
CREATE TABLE "comentario" (
    "id_comentario" SERIAL NOT NULL,
    "id_usuario" INTEGER NOT NULL,
    "id_publicacao" INTEGER NOT NULL,
    "texto_comentario" TEXT NOT NULL,
    "data_comentario" DATE NOT NULL,

    CONSTRAINT "comentario_pkey" PRIMARY KEY ("id_comentario")
);

-- CreateTable
CREATE TABLE "problema" (
    "id_problema" SERIAL NOT NULL,
    "descricao_problema" TEXT NOT NULL,
    "data" DATE NOT NULL,
    "id_usuario" INTEGER NOT NULL,
    "caminho_imagem" TEXT,
    "endereco" TEXT NOT NULL,
    "categoria" VARCHAR(50) NOT NULL,

    CONSTRAINT "problema_pkey" PRIMARY KEY ("id_problema")
);

-- CreateTable
CREATE TABLE "protocolo" (
    "id_protocolo" SERIAL NOT NULL,
    "id_problema" INTEGER NOT NULL,
    "id_solucao" INTEGER,

    CONSTRAINT "protocolo_pkey" PRIMARY KEY ("id_protocolo")
);

-- CreateTable
CREATE TABLE "publicacao" (
    "id_publicacao" SERIAL NOT NULL,
    "id_usuario" INTEGER NOT NULL,
    "id_protocolo" INTEGER NOT NULL,

    CONSTRAINT "publicacao_pkey" PRIMARY KEY ("id_publicacao")
);

-- CreateTable
CREATE TABLE "solucao" (
    "id_solucao" SERIAL NOT NULL,
    "descricao_solucao" TEXT NOT NULL,
    "data_solucao" DATE NOT NULL,
    "data_recebimento" DATE NOT NULL,
    "id_admin_public" INTEGER NOT NULL,

    CONSTRAINT "solucao_pkey" PRIMARY KEY ("id_solucao")
);

-- CreateIndex
CREATE UNIQUE INDEX "usuario_cpf_key" ON "usuario"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "usuario_email_key" ON "usuario"("email");

-- CreateIndex
CREATE UNIQUE INDEX "administrador_public_cpf_key" ON "administrador_public"("cpf");

-- AddForeignKey
ALTER TABLE "comentario" ADD CONSTRAINT "comentario_id_publicacao_fkey" FOREIGN KEY ("id_publicacao") REFERENCES "publicacao"("id_publicacao") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "comentario" ADD CONSTRAINT "comentario_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "usuario"("id_usuario") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "problema" ADD CONSTRAINT "problema_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "usuario"("id_usuario") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "protocolo" ADD CONSTRAINT "protocolo_id_problema_fkey" FOREIGN KEY ("id_problema") REFERENCES "problema"("id_problema") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "protocolo" ADD CONSTRAINT "protocolo_id_solucao_fkey" FOREIGN KEY ("id_solucao") REFERENCES "solucao"("id_solucao") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "publicacao" ADD CONSTRAINT "publicacao_id_protocolo_fkey" FOREIGN KEY ("id_protocolo") REFERENCES "protocolo"("id_protocolo") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "publicacao" ADD CONSTRAINT "publicacao_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "usuario"("id_usuario") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "solucao" ADD CONSTRAINT "solucao_id_admin_public_fkey" FOREIGN KEY ("id_admin_public") REFERENCES "administrador_public"("id_administrador") ON DELETE SET NULL ON UPDATE CASCADE;
