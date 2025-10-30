package com.backend.allinmotion.repository;


import com.backend.allinmotion.model.Contact;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ContactRepository extends JpaRepository<Contact, Long> {
}

