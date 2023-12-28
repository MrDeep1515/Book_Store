-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 28, 2023 at 01:49 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `book_store`
--

-- --------------------------------------------------------

--
-- Table structure for table `customerorder`
--

CREATE TABLE `customerorder` (
  `Id` int(100) NOT NULL,
  `customerId` varchar(100) NOT NULL,
  `customerName` varchar(100) NOT NULL,
  `customerAddress` varchar(100) NOT NULL,
  `paymentMode` varchar(100) NOT NULL,
  `paymentStatus` varchar(100) NOT NULL,
  `DeliveryStatus` varchar(100) NOT NULL,
  `productId` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `customerorder`
--

INSERT INTO `customerorder` (`Id`, `customerId`, `customerName`, `customerAddress`, `paymentMode`, `paymentStatus`, `DeliveryStatus`, `productId`) VALUES
(6, '1', 'Deepak', 'Mumbai', 'Online', '', 'Processing', 14),
(7, '1', 'Deepak', 'Mumbai', 'Online', '', '', 4),
(8, '2', 'Vinay', 'Mumbai', 'Online', '', '', 3),
(9, '2', 'Vinay', 'Mumbai', 'Online', '', '', 6),
(10, '2', 'Vinay', 'Mumbai', 'Online', '', '', 1),
(11, '2', 'Vinay', 'Mumbai', 'Online', '', '', 3),
(12, '2', 'Vinay', 'Mumbai', 'Cash on Delivery', '', '', 10),
(13, '2', 'Vinay', 'Mumbai', 'Cash on Delivery', '', '', 9),
(14, '2', 'Vinay', 'Mumbai', 'Cash on Delivery', '', '', 15),
(15, '2', 'Vinay', 'Mumbai', 'Cash on Delivery', '', '', 1);

-- --------------------------------------------------------

--
-- Table structure for table `customers`
--

CREATE TABLE `customers` (
  `Id` int(10) NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `contact` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `customers`
--

INSERT INTO `customers` (`Id`, `name`, `email`, `password`, `contact`) VALUES
(1, 'Deepak', 'deepak@gmail.com', '1234', '8569869236'),
(2, 'Vinay', 'vinay@gmail.com', '4321', '9999999999'),
(3, 'Pranav', 'pranav@gmail.com', '0000', '1234567890'),
(6, 'Mukesh', 'mukesh@gmail.com', '2580', '9874563210');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `Id` int(10) NOT NULL,
  `product_name` varchar(100) NOT NULL,
  `category` varchar(100) NOT NULL,
  `description` varchar(1000) NOT NULL,
  `stock` varchar(100) NOT NULL,
  `price` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`Id`, `product_name`, `category`, `description`, `stock`, `price`) VALUES
(1, 'To Kill a Mockingbird', 'Fiction', 'Harper Lee’s classic novel about justice and racism in the American South.', '48', 16),
(2, '1984', 'Fiction', 'George Orwell’s dystopian masterpiece exploring totalitarianism and surveillance.', '0', 13),
(3, 'The Great Gatsby', 'Fiction', 'F. Scott Fitzgerald’s tale of wealth, love, and the American Dream in the Roaring Twenties.', '23', 11),
(4, 'Pride and Prejudice', 'Fiction', 'Jane Austen’s witty portrayal of love and marriage in Georgian England.', '39', 11),
(5, 'The Catcher in the Rye', 'Fiction', 'J.D. Salinger’s iconic novel following Holden Caulfield’s journey through adolescence.', '60', 14),
(6, 'Brave New World', 'Fiction', 'Aldous Huxley’s exploration of a dystopian future where technology controls society.', '19', 15),
(7, 'Moby-Dick', 'Fiction', 'Herman Melville’s epic novel delving into obsession and the nature of humanity.', '55', 17),
(8, 'The Hobbit', 'Fiction', 'J.R.R. Tolkien’s adventure of Bilbo Baggins as he journeys to reclaim treasure.', '69', 18),
(9, 'The Lord of the Rings', 'Fiction', 'J.R.R. Tolkien’s epic fantasy trilogy set in the world of Middle-earth.', '44', 26),
(10, 'Alice\'s Adventures in Wonderland', 'Fiction', 'Lewis Carroll’s whimsical tale of a girl who falls into a fantastical world.', '64', 13),
(11, 'The Chronicles of Narnia', 'Fiction', 'C.S. Lewis’s series following adventures in the magical land of Narnia.', '75', 21),
(12, 'Wuthering Heights', 'Fiction', 'Emily Brontë’s tale of passion, revenge, and doomed love on the Yorkshire moors.', '85', 15),
(13, 'Jane Eyre', 'Fiction', 'Charlotte Brontë’s story of an orphaned girl’s journey to independence and love.', '90', 13),
(14, 'Sapiens: A Brief History of Humankind', 'Non-Fiction', 'Yuval Noah Harari’s exploration of human history and evolution.', '54', 18),
(15, 'The Subtle Art of Not Giving a F*ck', 'Non-Fiction', 'Mark Manson’s unconventional self-help guide to living a better life.', '39', 12),
(16, 'Becoming', 'Non-Fiction', 'Michelle Obama’s memoir detailing her journey from childhood to the White House.', '30', 20),
(17, 'Educated', 'Non-Fiction', 'Tara Westover’s memoir recounting her journey from an isolated upbringing to education.', '25', 15),
(18, 'The Power of Habit', 'Non-Fiction', 'Charles Duhigg’s exploration of the science behind habit formation and change.', '70', 13),
(19, 'Thinking, Fast and Slow', 'Non-Fiction', 'Daniel Kahneman’s examination of the two systems that drive how we think.', '80', 16),
(20, 'The Art of War', 'Non-Fiction', 'Sun Tzu’s ancient text on military strategy and tactics.', '50', 10);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `customerorder`
--
ALTER TABLE `customerorder`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `customers`
--
ALTER TABLE `customers`
  ADD PRIMARY KEY (`Id`),
  ADD UNIQUE KEY `email` (`email`),
  ADD UNIQUE KEY `contact` (`contact`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`Id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `customerorder`
--
ALTER TABLE `customerorder`
  MODIFY `Id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `customers`
--
ALTER TABLE `customers`
  MODIFY `Id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `Id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
