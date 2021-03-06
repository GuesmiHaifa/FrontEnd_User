package fr.dawan.gestionUtilisateur;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import fr.dawan.gestionUtilisateur.entities.User;
import fr.dawan.gestionUtilisateur.services.IUserService;

@SpringBootApplication
public class GestionUtilisateurApplication implements CommandLineRunner{
	
	@Autowired
	private IUserService service;

	public static void main(String[] args) {
		SpringApplication.run(GestionUtilisateurApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		service.saveOrUpDate(new User("Olivier", "Atton", "oatton@gmail.com"));
        service.saveOrUpDate(new User("Haifa", "Guessmi", "hGuesmi@gmail.com"));
        service.saveOrUpDate(new User("Soumia", "Slimani", "S.Slim@gmail.com"));
        service.saveOrUpDate(new User("Mohamed", "Gem", "gem01@gmail.com"));
		
	}
	

}
