<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20230724082236 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE income_frequency (id INT AUTO_INCREMENT NOT NULL, frequency VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE `utf8_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE security_token_wallet ADD income_frequency_id INT NOT NULL');
        $this->addSql('ALTER TABLE security_token_wallet ADD CONSTRAINT FK_4785C384711390C2 FOREIGN KEY (income_frequency_id) REFERENCES income_frequency (id)');
        $this->addSql('CREATE INDEX IDX_4785C384711390C2 ON security_token_wallet (income_frequency_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE security_token_wallet DROP FOREIGN KEY FK_4785C384711390C2');
        $this->addSql('DROP TABLE income_frequency');
        $this->addSql('DROP INDEX IDX_4785C384711390C2 ON security_token_wallet');
        $this->addSql('ALTER TABLE security_token_wallet DROP income_frequency_id');
    }
}
