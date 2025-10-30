package com.backend.allinmotion.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Contact {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String customerName;
    private String emailToContact;
    private String phoneNo;
    private String companyName;

    @Column(length = 1000)
    private String requirementDescription;
}

