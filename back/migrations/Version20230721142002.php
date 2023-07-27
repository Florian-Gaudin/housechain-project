<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20230721142002 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE security_token_wallet (id INT AUTO_INCREMENT NOT NULL, user_id INT NOT NULL, security_token_id INT DEFAULT NULL, st_quantity NUMERIC(10, 2) DEFAULT NULL, created_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', utility_token_income NUMERIC(10, 2) DEFAULT NULL, INDEX IDX_4785C384A76ED395 (user_id), INDEX IDX_4785C38422B5606B (security_token_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE `utf8_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE security_token_wallet ADD CONSTRAINT FK_4785C384A76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE security_token_wallet ADD CONSTRAINT FK_4785C38422B5606B FOREIGN KEY (security_token_id) REFERENCES security_token (id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE security_token_wallet DROP FOREIGN KEY FK_4785C384A76ED395');
        $this->addSql('ALTER TABLE security_token_wallet DROP FOREIGN KEY FK_4785C38422B5606B');
        $this->addSql('DROP TABLE security_token_wallet');
    }
}
