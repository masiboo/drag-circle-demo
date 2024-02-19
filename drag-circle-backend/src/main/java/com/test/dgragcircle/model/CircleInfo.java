package com.test.dgragcircle.model;


import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;

import java.util.Date;

@Data
@Entity
@Table(name="circle-info")
public class CircleInfo {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    private int componentId;

    private int coordinateX;

    private int coordinateY;

    @CreationTimestamp
    private Date createdAt;

    @CreationTimestamp
    private Date updatedAt;
}
