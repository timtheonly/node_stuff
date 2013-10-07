SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `invoice`
--

-- --------------------------------------------------------

--
-- Table structure for table `client`
--
create database if not exists `invoice`;
use `invoice`;

DROP TABLE IF EXISTS `client`;
CREATE TABLE IF NOT EXISTS `client` (
  `name` varchar(25) NOT NULL,
  `client_ID` int(11) NOT NULL AUTO_INCREMENT,
  `address_line_1` varchar(25) NOT NULL,
  `address_line_2` varchar(25) DEFAULT NULL,
  `address_line_3` varchar(25) DEFAULT NULL,
  `address_line_4` varchar(25) DEFAULT NULL,
  `phone` varchar(20) NOT NULL,
  PRIMARY KEY (`client_ID`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `invoices`
--

DROP TABLE IF EXISTS `invoices`;
CREATE TABLE IF NOT EXISTS `invoices` (
  `invoiceID` int(11) NOT NULL AUTO_INCREMENT,
  `dateCreated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `createdBy` int(11) NOT NULL,
  `client` int(11) NOT NULL,
  `dateSubmitted` timestamp NULL DEFAULT NULL,
  `datePaid` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`invoiceID`,`dateCreated`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;


-- --------------------------------------------------------

--
-- Table structure for table `invoiveitems`
--

DROP TABLE IF EXISTS `invoiceitems`;
CREATE TABLE IF NOT EXISTS `invoiveitems` (
  `invoiceNo` int(11) NOT NULL,
  `itemId` int(11) NOT NULL AUTO_INCREMENT,
  `dateadded` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `description` varchar(50) NOT NULL,
  `value` float NOT NULL,
  `vat` float NOT NULL,
  PRIMARY KEY (`itemId`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;


-- --------------------------------------------------------

--
-- Table structure for table `login`
--

DROP TABLE IF EXISTS `login`;
CREATE TABLE IF NOT EXISTS `login` (
  `user_id` int(11) NOT NULL,
  `loginTime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `logoutTime` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`user_id`,`loginTime`)
) ENGINE=InnoDB DEFAULT CHARSET=ascii;


-- --------------------------------------------------------

--
-- Table structure for table `settings`
--

DROP TABLE IF EXISTS `settings`;
CREATE TABLE IF NOT EXISTS `settings` (
  `company_name` varchar(50) NOT NULL,
  `vat_no` varchar(8) NOT NULL,
  `address_line_1` varchar(25) NOT NULL,
  `address_line_2` varchar(25) NOT NULL,
  `address_line_3` varchar(25) NOT NULL,
  `address_line_4` varchar(25) DEFAULT NULL,
  `logo` varchar(25) DEFAULT 'oops.jpg',
  PRIMARY KEY (`vat_no`),
  UNIQUE KEY `vat_no` (`vat_no`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


-- --------------------------------------------------------

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `name` varchar(25) NOT NULL,
  `USER_ID` int(11) NOT NULL AUTO_INCREMENT,
  `super` tinyint(1) NOT NULL,
  `login_name` varchar(15) NOT NULL,
  `password` varchar(40) NOT NULL,
  PRIMARY KEY (`USER_ID`),
  UNIQUE KEY `login_name` (`login_name`),
  UNIQUE KEY `login_name_2` (`login_name`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=0 ;