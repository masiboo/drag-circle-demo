package com.test.dgragcircle.controller;


import com.test.dgragcircle.model.CircleInfo;
import com.test.dgragcircle.repository.CircleInfoRepository;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@AllArgsConstructor
public class CircleInfoController {

    private final CircleInfoRepository circleInfoRepository;

    @PostMapping("/insert/circleInfo")
    public CircleInfo insertCircleInfo(@RequestBody CircleInfo circleInfo){
        return circleInfoRepository.save(circleInfo);
    }

    @GetMapping("/findAll/circleInfo")
    public List<CircleInfo> getAllCircleInfo(){
         return circleInfoRepository.findAll();
    }
}
