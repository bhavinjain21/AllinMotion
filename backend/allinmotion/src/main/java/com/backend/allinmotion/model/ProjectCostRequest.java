package com.backend.allinmotion.model;
import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ProjectCostRequest {
    private String type;
    private int duration;

    public int getDuration() {
        return duration;
    }

    public String getType() {
        return type;
    }

    public List<String> getDetails() {
        return details;
    }

    private List<String> details;
}