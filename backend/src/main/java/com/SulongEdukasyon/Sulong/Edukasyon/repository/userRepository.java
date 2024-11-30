package com.SulongEdukasyon.Sulong.Edukasyon.repository;

import com.SulongEdukasyon.Sulong.Edukasyon.model.user;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface userRepository extends JpaRepository<user, Long> {
    Optional<user> findByEmail(String email);
}
