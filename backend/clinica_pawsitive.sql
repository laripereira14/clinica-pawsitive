-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 05-Jun-2022 às 18:26
-- Versão do servidor: 10.4.24-MariaDB
-- versão do PHP: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `clinica_pawsitive`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `clientes`
--

CREATE TABLE `clientes` (
  `carteirinha` int(11) NOT NULL,
  `nome` varchar(50) NOT NULL,
  `celular` varchar(11) NOT NULL,
  `email` varchar(40) NOT NULL,
  `nome_pet` varchar(50) NOT NULL,
  `especie_pet` varchar(30) NOT NULL,
  `data_nasc` date NOT NULL,
  `senha` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `clientes`
--

INSERT INTO `clientes` (`carteirinha`, `nome`, `celular`, `email`, `nome_pet`, `especie_pet`, `data_nasc`, `senha`) VALUES
(100923, 'Juliana Almeida', '21987456622', 'jualmeida@gmail.com', 'Bibi', 'Cachorra', '2022-06-27', 'bibi11111'),
(127444, 'Diana Macedo', '21998752314', 'dianamaced@gmail.com', 'Chico', 'Calopsita', '2021-12-06', 'chiquinho'),
(163933, 'Maria Prado', '21984759866', 'mariaprado@gmail.com', 'Belle', 'Gata', '2021-06-08', '12345678'),
(323444, 'Paulo Rodrigues', '21987566200', 'paulor1234@gmail.com', 'Enzo', 'Cachorro', '2008-02-12', 'enzo123456');

-- --------------------------------------------------------

--
-- Estrutura da tabela `servicos`
--

CREATE TABLE `servicos` (
  `id` int(11) NOT NULL,
  `carteirinha_cliente` int(11) NOT NULL,
  `data` date NOT NULL,
  `desc_servico` varchar(60) NOT NULL,
  `preco` decimal(10,2) NOT NULL,
  `responsavel` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `servicos`
--

INSERT INTO `servicos` (`id`, `carteirinha_cliente`, `data`, `desc_servico`, `preco`, `responsavel`) VALUES
(1, 323444, '2022-05-06', 'Consulta dermatologista', '250.00', 'Dra. Camila Martins'),
(2, 323444, '2022-01-05', 'Vacina para raiva', '62.90', 'Enfermeira Danielle Pacheco');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `clientes`
--
ALTER TABLE `clientes`
  ADD PRIMARY KEY (`carteirinha`);

--
-- Índices para tabela `servicos`
--
ALTER TABLE `servicos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `carteirinha_cliente` (`carteirinha_cliente`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `servicos`
--
ALTER TABLE `servicos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Restrições para despejos de tabelas
--

--
-- Limitadores para a tabela `servicos`
--
ALTER TABLE `servicos`
  ADD CONSTRAINT `servicos_ibfk_1` FOREIGN KEY (`carteirinha_cliente`) REFERENCES `clientes` (`carteirinha`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
