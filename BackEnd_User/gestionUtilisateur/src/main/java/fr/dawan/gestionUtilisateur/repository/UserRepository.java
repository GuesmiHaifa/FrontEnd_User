package fr.dawan.gestionUtilisateur.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import fr.dawan.gestionUtilisateur.entities.User;
@Repository
public interface UserRepository extends JpaRepository<User, Long> {

	
}
