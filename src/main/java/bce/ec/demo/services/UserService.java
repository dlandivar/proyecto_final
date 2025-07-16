package bce.ec.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import bce.ec.demo.dao.UserRepository;
import bce.ec.demo.entities.User;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public List<User> findAll() {
        return userRepository.findAll();
    }

    public User create(User user) {
        return userRepository.save(user);
    }

    public List<User> createUsers(List<User> users) {
        return userRepository.saveAll(users);
    }

    public User getUserById(int userId) {
        return userRepository.findById(userId).orElse(null);
    }

  public User updateById(User user) {
        return userRepository.save(user);
    }

    public void deleteById(int userId) {
        userRepository.deleteById(userId);
    }

    
}
