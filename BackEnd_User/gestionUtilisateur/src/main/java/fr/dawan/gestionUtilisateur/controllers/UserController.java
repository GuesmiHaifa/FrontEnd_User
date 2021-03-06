package fr.dawan.gestionUtilisateur.controllers;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import fr.dawan.gestionUtilisateur.entities.User;
import fr.dawan.gestionUtilisateur.services.IUserService;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins ="http://localhost:3000")
public class UserController {
	
	@Autowired
	private IUserService service;
	
	@GetMapping(value="",produces = "application/json")
	public List<User> getUsers(){
		return service.getUsers();
			
	}
	@GetMapping("/{id}")
	private User findUser(@PathVariable long id) {
		 return service.findById(id);
		
	}
	@PostMapping("/add")
	private User addUser(@RequestBody User user) {
		 return service.saveOrUpDate(user);
	
	}
	@DeleteMapping("/delete/{id}")
	private void deleteUser(@PathVariable long id) {
		 service.deleteUserById(id);
		
	

	}
	
	
	

}

