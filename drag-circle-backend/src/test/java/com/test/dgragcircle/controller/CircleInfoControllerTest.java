package com.test.dgragcircle.controller;


import com.fasterxml.jackson.databind.ObjectMapper;
import com.test.dgragcircle.model.CircleInfo;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@ExtendWith(SpringExtension.class)
@SpringBootTest
@AutoConfigureMockMvc
public class CircleInfoControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private ObjectMapper objectMapper;

    @Test
    public void testInsertCircleInfo() throws Exception {
        CircleInfo circleInfo = new CircleInfo();
        circleInfo.setComponentId(100);
        circleInfo.setCoordinateX(10);
        circleInfo.setCoordinateY(20);

        mockMvc.perform(MockMvcRequestBuilders.post("/insert/circleInfo")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(circleInfo)))
                        .andExpect(status().isOk())
                        .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                        .andExpect(jsonPath("$.id").isNumber())
                        .andExpect(jsonPath("$.componentId").value(100))
                        .andExpect(jsonPath("$.coordinateX").value(10))
                        .andExpect(jsonPath("$.coordinateY").value(20));
    }

    @Test
    public void testGetAllCircleInfo() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders.get("/findAll/circleInfo")
                        .contentType(MediaType.APPLICATION_JSON))
                        .andExpect(status().isOk())
                        .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                        .andExpect(jsonPath("$").isArray());
    }
}
