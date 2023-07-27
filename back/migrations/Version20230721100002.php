<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20230721100002 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE security_token (id INT AUTO_INCREMENT NOT NULL, property_id INT NOT NULL, st_name VARCHAR(255) NOT NULL, st_price INT NOT NULL, st_total_quantity INT DEFAULT NULL, st_actual_quantity INT DEFAULT NULL, INDEX IDX_B38B4291549213EC (property_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE `utf8_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE security_token ADD CONSTRAINT FK_B38B4291549213EC FOREIGN KEY (property_id) REFERENCES property (id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE security_token DROP FOREIGN KEY FK_B38B4291549213EC');
        $this->addSql('DROP TABLE security_token');
    }
}
