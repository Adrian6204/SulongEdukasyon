package com.SulongEdukasyon.Sulong.Edukasyon.controller;

import com.SulongEdukasyon.Sulong.Edukasyon.model.user;
import com.SulongEdukasyon.Sulong.Edukasyon.service.userService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
public class userController {

    @Autowired
    private userService userService;

    @PostMapping("/register")
    public ResponseEntity<user> registerUser(@RequestBody user user) {
        try {
            user registeredUser = userService.registerUser(user);
            return ResponseEntity.ok(registeredUser);
        } catch (RuntimeException e) {
            return ResponseEntity.badRequest().body(null);
        }
    }

    @GetMapping("/{email}")
    public ResponseEntity<user> getUserByEmail(@PathVariable String email) {
        try {
            user user = userService.getUserByEmail(email);
            return ResponseEntity.ok(user);
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }
}
