users
-----
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(55) NOT NULL,
  `pwd` varchar(55) NOT NULL,
  PRIMARY KEY (`id`)
);

notes
-----
CREATE TABLE `notes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(55) NOT NULL,
  `content` text NOT NULL,
  `userId` int NOT NULL,
  PRIMARY KEY (`id`)
);

