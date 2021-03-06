package fr.dawan.gestionUtilisateur.services;

import java.util.List;

import fr.dawan.gestionUtilisateur.entities.User;

public interface IUserService {
	List<User> getUsers();
	User findById(long id);
	void deleteUserById(long id);
	User saveOrUpDate(User user);

}
