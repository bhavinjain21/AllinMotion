package com.backend.allinmotion.service;

import com.backend.allinmotion.model.Contact;
import com.backend.allinmotion.repository.ContactRepository;
import org.springframework.stereotype.Service;

@Service
public class ContactService {
    private final ContactRepository contactRepository;

    public ContactService(ContactRepository contactRepository) {
        this.contactRepository = contactRepository;
    }

    public String saveContact(Contact contact) {
        contactRepository.save(contact);
        return "WILL CONTACT YOU SOON";
    }
}