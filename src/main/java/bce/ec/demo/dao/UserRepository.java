package bce.ec.demo.dao;
import org.springframework.data.jpa.repository.JpaRepository;

import bce.ec.demo.entities.User;


public interface UserRepository extends JpaRepository<User, Integer> {
    // Additional query methods can be defined here if needed

}
