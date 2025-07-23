package com.test.dgragcircle.controller;


import com.test.dgragcircle.model.CircleInfo;
import com.test.dgragcircle.repository.CircleInfoRepository;
import com.test.dgragcircle.service.CircleInfoService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/circleInfo")
@RestController
@AllArgsConstructor
public class CircleInfoController {

    private final CircleInfoRepository circleInfoRepository;
    private final CircleInfoService circleInfoService;

    @PostMapping("/insert")
    public CircleInfo insertCircleInfo(@RequestBody CircleInfo circleInfo){
        return circleInfoRepository.save(circleInfo);
    }

    @GetMapping("/findAll")
    public List<CircleInfo> getAllCircleInfo(){
         return circleInfoRepository.findAll();
    }

    @GetMapping("/latest")
    public ResponseEntity<CircleInfo> getLastCircleInfo() {
        CircleInfo last = circleInfoService.getLastCircleInfo();
        if (last != null) {
            return ResponseEntity.ok(last);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
