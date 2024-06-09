CREATE DATABASE `evolve` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_spanish_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;

USE `evolve`;

	CREATE TABLE `servers` (
  		`id` varchar(36) COLLATE utf8mb4_spanish_ci NOT NULL,
  		`name` varchar(20) COLLATE utf8mb4_spanish_ci NOT NULL,
  		`description` varchar(40) COLLATE utf8mb4_spanish_ci NOT NULL,
  		`icon` varchar(45) COLLATE utf8mb4_spanish_ci NOT NULL,
  		`version` varchar(45) COLLATE utf8mb4_spanish_ci NOT NULL,
  		PRIMARY KEY (`id`)
	) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;


	CREATE TABLE `users` (
  		`id` varchar(36) COLLATE utf8mb4_spanish_ci NOT NULL,
  		`username` varchar(20) COLLATE utf8mb4_spanish_ci NOT NULL,
  		`email` varchar(255) COLLATE utf8mb4_spanish_ci NOT NULL,
  		`password` varchar(64) COLLATE utf8mb4_spanish_ci NOT NULL,
  		`created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  		`status` tinyint NOT NULL DEFAULT '0',
  		PRIMARY KEY (`id`),
  		UNIQUE KEY `email_UNIQUE` (`email`),
  		UNIQUE KEY `username_UNIQUE` (`username`)
	) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;


	CREATE TABLE `users_servers` (
  		`id` varchar(36) COLLATE utf8mb4_spanish_ci NOT NULL,
  		`user_id` varchar(36) COLLATE utf8mb4_spanish_ci NOT NULL,
  		`server_id` varchar(36) COLLATE utf8mb4_spanish_ci NOT NULL,
  		`owner` tinyint NOT NULL,
  		PRIMARY KEY (`id`),
  		KEY `fk_users_servers_user_id` (`user_id`),
  		KEY `fk_users_servers_server_id` (`server_id`),
  		CONSTRAINT `fk_users_servers_server_id` FOREIGN KEY (`server_id`) REFERENCES `servers` (`id`),
  		CONSTRAINT `fk_users_servers_user_id` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
	) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

INSERT INTO users(id, username, email, password, status) VALUES('beb5bcb7-bc98-4c6f-8afd-386644caaadb', 'test', 'test@evolve.com', '$2b$10$idqQP8krJK8riZYmTwww/.6dg7qG2dT.zbUZJs5ZOOlIpL0j0YqCS', '0');
INSERT INTO servers VALUES('85677314-3cb5-480b-a641-137cafc508fa', 'Test Server', 'Example server', '/mcserver-logo.png', 'Paper 1.20.4');
INSERT INTO users_servers VALUES('d078157d-f847-42a8-ab1f-722eb900c871', 'beb5bcb7-bc98-4c6f-8afd-386644caaadb', '85677314-3cb5-480b-a641-137cafc508fa' , 1);
