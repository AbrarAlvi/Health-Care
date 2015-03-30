package com.zar.hcms.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import com.zar.hcms.domain.User;






@RestController
@RequestMapping("/dashboard/")
public class DashboardController {
	
	//UserService userService=new UserService();
	     	    
	@RequestMapping(value = "/{id}", method = RequestMethod.GET,headers="Accept=application/json")
	public User getUser(@PathVariable int id) {
		User user=new User();
		user.setUserid(001);
		user.setFirstName("ruhul");
		user.setLastName("mazumder");
		
		return user;
	}
	
	@RequestMapping(method = RequestMethod.GET,headers="Accept=application/json")
	public List<User> getAllUsers() {
		List<User> users= new ArrayList<User>();
		User user=new User();
		user.setUserid(001);
		user.setFirstName("ruhul");
		user.setLastName("mazumder");
		users.add(user);
		return users;
	}
	

	
	
}