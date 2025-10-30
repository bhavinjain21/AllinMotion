package com.backend.allinmotion.controller;


import com.backend.allinmotion.model.Contact;
import com.backend.allinmotion.model.ProjectCostRequest;
import com.backend.allinmotion.service.ContactService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/contact")
@CrossOrigin(origins = "*")
public class ContactController {

    @Autowired
    private  ContactService contactService;



    @GetMapping
    public String showForm() {
        return "Contact form endpoint ready!";
    }

    @PostMapping
    public String submitContact(@RequestBody Contact contact) {
        return contactService.saveContact(contact);
    }

    @PostMapping("/calculate-cost")
    public double calculateCost(@RequestBody ProjectCostRequest req) {
        double base = switch (req.getType()) {
            case "2D" -> 1000;
            case "3D" -> 2000;
            case "Live" -> 1500;
            default -> 0;
        };

        double durationCost = req.getDuration() * 20;
        double extra = 0;
        if (req.getDetails().contains("Music")) extra += 300;
        if (req.getDetails().contains("Animation")) extra += 500;
        if (req.getDetails().contains("Scripting")) extra += 400;

        return base + durationCost + extra;
    }
}
