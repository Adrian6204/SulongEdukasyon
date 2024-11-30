package com.SulongEdukasyon.Sulong.Edukasyon.service;

import com.SulongEdukasyon.Sulong.Edukasyon.model.user;
import com.SulongEdukasyon.Sulong.Edukasyon.repository.userRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class userService {

    @Autowired
    private userRepository userRepository;

    public user registerUser(user user) {
        Optional<user> existingUser = userRepository.findByEmail(user.getEmail());
        if (existingUser.isPresent()) {
            throw new RuntimeException("Email already registered");
        }
        return userRepository.save(user);
    }

    public user getUserByEmail(String email) {
        return userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));
    }
}
